import { Request, Response } from "express";
import { FindAllDeliveriesDeliverymanUseCasa } from "./FindAllDeliveriesDeliverymanUseCase";


export class FindAllDeliveriesDeliverymanController {
  async handle(request: Request, response: Response) {
    const { id_deliveryman } = request;

    const findAllDeliveriesDeliverymanUseCasa = new FindAllDeliveriesDeliverymanUseCasa();
    const deliveries = await findAllDeliveriesDeliverymanUseCasa.execute(id_deliveryman);

    return response.json(deliveries);
  }
} 