import prisma from "../../config/database.js";
import { Prisma } from '@prisma/client';

async function newNetwork(data: Prisma.NetworkCreateManyInput) {
    return prisma.network.create({
  data,
});
};



export default { newNetwork}