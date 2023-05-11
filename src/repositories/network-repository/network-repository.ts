import prisma from "../../config/database.js";
import { Prisma } from '@prisma/client';

async function newNetwork(data: Prisma.NetworkCreateManyInput) {
    return prisma.network.create({
  data,
});
};

async function listNetwork(userId:number) {
    return prisma.network.findMany({
        where: {
            userId: userId,
        },
    })
};



export default { newNetwork, listNetwork}