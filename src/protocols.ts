import { User, Credential, Network } from '@prisma/client'


export type UserInput = Omit<User, "id">
export type CredentialInput = Omit<Credential, "id" | "userId">
export type credentialService = Omit<Credential, "id">
export type CreateCredentialParams = Pick<Credential, 'userId' | 'title' | 'url' | 'username' | 'password'>;
export type CreateNetwork = Omit<Network,"id" | "userId">
export type networkService = Omit<Network,"id">

export type CredentialPromisse= {
    credentialId: number,
    password: string,
    userId: number,
    title: string,
    url: string,
    username: string,
}