import { CreateCredentialParams } from "../../protocols";
import { Credential } from "@prisma/client";
import credentialRepository from "../../repositories/credential-repository/credential-repository.js"
import Cryptr from "cryptr";

const cryptr = new Cryptr(process.env.CRYPTR_KEY);

async function newCredential({ title, url, username, password, userId }: CreateCredentialParams): Promise<Credential> {

    const duplicatedCredential = await credentialRepository.findTitleByUser(userId, title)
    if (duplicatedCredential) {
        throw { type: "DuplicatedTitleError", message: "Title already existis!" }
    }

    const encryptedString = cryptr.encrypt(password);

    return credentialRepository.newCredential({
        userId,
        title,
        url,
        username,
        password: encryptedString,
    })
}
async function deleteCredential(userId: number, credentialId: number) {
    const credential = await credentialRepository.findByIdCredential(credentialId);

    if (!credential || credential.userId !== userId) {
        throw { type: "BadRequest", message: "You can not do that!" };
    }
    await credentialRepository.remove(credentialId);
  

}
async function getCredentials(userId: number) {

    const credentials = await credentialRepository.getCredentials(userId)

    if (credentials.length === 0) {
        throw { type: "NotFoundError", message: "No result for this search!" };
    }

    credentials.map((credential) => (credential.password = cryptr.decrypt(credential.password)));
    return credentials;
}
async function getCredentialsById( userId: number, credentialId: number): Promise<Credential> {

    const credential = await credentialRepository.findByIdCredential(credentialId)

    if (!credential || credential.userId !== userId) {
        throw { type: "NotFoundError", message: "No result for this search!" }
    }

    credential.password = cryptr.decrypt(credential.password)
    return credential
}


export default { newCredential, deleteCredential, getCredentialsById, getCredentials }