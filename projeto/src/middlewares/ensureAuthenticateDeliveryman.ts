import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayLoad {
  sub: string;
}

export async function ensureAuthenticateDeliryman(
  request: Request,
  response: Response, 
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(410).json({
      message: "Token missing",
    });
  }

  //Bearer 923654879-69874512359
  //[0] = Bearer
  //[1] - 923654879-69874512359
  const [, token] = authHeader.split(" ")

  try {

     const { sub } = verify(token, "019acc25a4e242bb77ad489832ada12d") as IPayLoad;

     request.id_deliveryman = sub;

     return next();
  }catch(err) {
    return response.status(401).json({
      massage: "Invalid token!",
    });
  }

}