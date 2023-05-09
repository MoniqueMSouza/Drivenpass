import { User, Credential } from '@prisma/client'


export type UserInput = Omit<User, "id">
export type CredentialInput = Omit<Credential, "id" | "userId">
export type credentialService = Omit<Credential, "id">
export type CreateCredentialParams = Pick<Credential, 'userId' | 'title' | 'url' | 'username' | 'password'>;
