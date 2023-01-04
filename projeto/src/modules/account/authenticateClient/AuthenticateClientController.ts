import { Request, Response } from "express";
import { AuthenticateClientUseCase } from "./AuthenticateClientUseCase";

export class AuthenticateClientControlller {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const authenticaClientUseCase = new AuthenticateClientUseCase();
    const result = await authenticaClientUseCase.execute({
      username,
      password,
    });

    return response.json(result);
  }
}