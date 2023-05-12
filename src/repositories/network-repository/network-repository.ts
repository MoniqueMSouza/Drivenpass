import prisma from "../../config/database.js";
import { Prisma } from '@prisma/client';

async function newNetwork(data: Prisma.NetworkCreateManyInput) {
    return prisma.network.create({
        data,
    });
};
async function listNetwork(userId: number) {
    return prisma.network.findMany({
        where: {
            userId: userId,
        },
    })
};
async function listNetworkById(userId: number, networkId: number) {
    return prisma.network.findMany({
        where: {
            userId: userId,
            id: networkId
        },
    })
};
async function findById(id: number, select?: Prisma.UserSelect) {
    const params: Prisma.NetworkFindUniqueArgs = {
        where: {
            id,
        },
    };

    if (select) {
        params.select = select;
    }

    return prisma.network.findUnique(params);
}
async function remove(networkId: number) {
    return prisma.network.delete({
        where: {
            id: networkId
        },
    })
}



export default { newNetwork, listNetwork, listNetworkById, findById, remove }