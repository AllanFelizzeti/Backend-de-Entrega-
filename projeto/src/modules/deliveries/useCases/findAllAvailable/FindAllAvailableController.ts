import { Request, Response } from "express";
import { FindAllAvailableDateUseCase } from "./FindAllAvaillableUseCase"; 


export class FindAllAvailableController {
  async handle(request: Request, response: Response) {
    const findAllAvailabledDateUseCase = new FindAllAvailableDateUseCase;

    const deliveries = await findAllAvailabledDateUseCase.execute();

    console.log(deliveries);
    return response.json(deliveries);
  }
}