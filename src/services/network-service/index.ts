import { CreateCredentialParams, networkService } from "../../protocols";
import { Credential, Network } from "@prisma/client";
import networkRepositorie from "../../repositories/network-repository/network-repository.js"
import Cryptr from "cryptr";

async function newNetwork({ title, network, password, userId }: networkService): Promise<Network> {
    const cryptr = new Cryptr('SecretKey');
    const encryptedPassword = cryptr.encrypt(password);

    return networkRepositorie.newNetwork({
        userId,
        title,
        network,
        password: encryptedPassword,
    })
}

async function getNetworks({ }) {
}

async function getNetworksId({ }){
}

async function deleteNetwork ({}){    
}

export default { newNetwork, getNetworks, getNetworksId, deleteNetwork }