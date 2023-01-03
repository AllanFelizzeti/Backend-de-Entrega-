import { prisma } from "../../../../database/prismaClient";
import { hash } from "bcrypt";

interface ICreateClient{
  username: string;
  password: string
}

export class CreateClientUseCase {
  async execute({ password, username }: ICreateClient) {
    //Validar se o client exist
    const clientExist = await prisma.clients.findFirst({
      where: {
        username
      },
    });

    if(clientExist) {
      throw new Error("Client alresdy exists")
    }

    //Criptografar a senha 
    const hashPassword = await hash(password, 10);

    //Salvar o Client
    const client = await prisma.clients.create({
      data: {
        username,
        password: hashPassword,
      },
    });
    
    return client;
  }
}