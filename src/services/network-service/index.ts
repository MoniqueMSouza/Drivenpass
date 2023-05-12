import { networkService } from "../../protocols";
import { Network } from "@prisma/client";
import networkRepositorie from "../../repositories/network-repository/network-repository.js"
import Cryptr from "cryptr";

const cryptr = new Cryptr('SecretKey');


async function newNetwork({ title, network, password, userId }: networkService): Promise<Network> {
    const encryptedPassword = cryptr.encrypt(password);

    return networkRepositorie.newNetwork({
        userId,
        title,
        network,
        password: encryptedPassword,
    })
}

async function getNetworks(userId: number) {
    const networks = await networkRepositorie.listNetwork(userId);
    if (!networks) {
        throw { type: "BadRequest", message: "You can not do that!" };
    }
    networks.map((network: networkService) => (network.password = cryptr.decrypt(network.password)));

    return networks
}

async function getNetworkById(userId: number, networkId: number) {

    const networks = await networkRepositorie.findById(networkId);

    if (!networks || networks.userId !== userId) {
        throw { type: "NotFoundError", message: "No result for this search!" }
    }

    networks.password = cryptr.decrypt(networks.password)
    return networks

}

async function deleteNetwork(userId: number, networkId: number) {

    const network = await networkRepositorie.listNetworkById(userId, networkId);

    if (!network) {
        throw { type: "BadRequest", message: "You can not do that!" };
    }
    await networkRepositorie.remove(networkId);

}

export default { newNetwork, getNetworks, getNetworkById, deleteNetwork }