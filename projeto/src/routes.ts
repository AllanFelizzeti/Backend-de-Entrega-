import { Router } from "express";
import { AuthenticateClientControlller } from "./modules/account/authenticateClient/AuthenticateClientController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";

const routes = Router();

const createClientController = new CreateClientController();
const authenticaClientController = new AuthenticateClientControlller();

routes.post("/authenticate/", authenticaClientController.handle);

routes.post("/client/", createClientController.handle);

export { routes };
