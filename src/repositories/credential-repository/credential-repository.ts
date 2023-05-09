import prisma from "../../config/database.js";
import { Prisma } from '@prisma/client';

async function findTitleByUser(userId: number, title: string) {
    return prisma.credential.findMany({
        where: {
            userId: userId,
            title
        },
    })
}
async function newCredential(data: Prisma.CredentialUncheckedCreateInput) {
    return prisma.credential.create({
  data,
});
};

async function getCredentials(userId:number) {
    return prisma.credential.findMany({
        where: {
            userId: userId,
        },
    })
}
async function getCredentialsById(userId:number, credentialId:number) {
    return prisma.credential.findMany({
        where: {
            userId: userId,
            id: credentialId
        },
    })
}
async function findByIdCredential(credentialId:number, select?: Prisma.UserSelect) {

  const params: Prisma.CredentialFindUniqueArgs = {
    where: {
      id:credentialId,
    },
  };

  if (select) {
    params.select = select;
  }

  return prisma.credential.findUnique(params);
}
async function remove(credentialId:number) {
    return prisma.credential.delete({
        where: {
            id: credentialId
        },
    })
}




export default { findTitleByUser, newCredential, getCredentials, getCredentialsById, findByIdCredential , remove}