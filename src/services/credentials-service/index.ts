import { CreateCredentialParams } from "../../protocols";
import { Credential } from "@prisma/client";
import credentialRepositorie from "../../repositories/credential-repository/credential-repository.js"
import Cryptr from "cryptr";




async function newCredential({ title, url, username, password, userId }: CreateCredentialParams): Promise<Credential> {

    const cryptr = new Cryptr('SecretKey');

    const encryptedString = cryptr.encrypt(password);

    return credentialRepositorie.newCredential({
        userId,
        title,
        url,
        username,
        password: encryptedString,
    })
}

async function deleteCredential(userId:number, credentialId: number) {
    const credential = await credentialRepositorie.findByIdCredential(credentialId);

    if (!credential || credential.userId !== userId) {
        throw { type: "BadRequest", message: "You can not do that!" };
    }
     await credentialRepositorie.remove(credentialId);

  }



/*    const credential = await credentialRepositorie.findTitleByUser(userId, title)
    if (credential) {
        throw { type: "ConflictError", message: "Title already existis!" }
    }*/

export default { newCredential, deleteCredential }