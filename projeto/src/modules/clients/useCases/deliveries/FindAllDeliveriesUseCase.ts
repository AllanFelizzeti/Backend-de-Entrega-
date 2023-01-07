import { prisma } from "../../../../database/prismaClient";



export class FindAllDeliveriesUseCase {
  async execute(id_clent: string) {
    const deliveries = await prisma.clients.findMany({
      where: {
        id: id_clent,
      },
      //include: //O preblema de usar include que ele retorna senha 
      select: {
        deliveries: true,
        id: true,
        username: true,
      },
    });

    return deliveries;
  }
}