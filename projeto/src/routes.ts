import { Router } from "express";
import { ensureAuthenticateClient } from "./middlewares/ensureAuthenticateClient";
import { ensureAuthenticateDeliryman } from "./middlewares/ensureAuthenticateDeliveryman";
import { AuthenticateClientController } from "./modules/account/authenticateClient/AuthenticateClientController";
import { AuthenticateDeliverymanController } from "./modules/account/authenticateDeliveryman/AuthenticateDeliverymanController";
import { CreateClientController } from "./modules/clients/useCases/createClient/CreateClientController";
import { FindAllDeliveriesController } from "./modules/clients/useCases/deliveries/FindAllDelivariesController";
import { CreateDeliveryController } from "./modules/deliveries/useCases/createDelivery/CreateDeliveryController";
import { FindAllAvailableController } from "./modules/deliveries/useCases/findAllAvailable/FindAllAvailableController";
import { UpdateDeliverymanController } from "./modules/deliveries/useCases/updateDeliveryman/useCases/UpdateDelivarymanController";
import { UpdateEndDateController } from "./modules/deliveries/useCases/updateEndDate/updateEndDateController";
import { CreateDeliverymanController } from "./modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController";
import { FindAllDeliveriesDeliverymanController } from "./modules/deliveryman/useCases/findAllDeliveryman/FindAllDeliveriesDeliverymanController";

const routes = Router();

const createClientController = new CreateClientController();
const authenticaClientController = new AuthenticateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateDeliverymanController = new AuthenticateDeliverymanController();

const deliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();
const updateDeliverymanController = new UpdateDeliverymanController();
const findAllDeliveriesClient = new FindAllDeliveriesController();

const findAllDeliveriesDeliveryman = new FindAllDeliveriesDeliverymanController();
const updateEndDateController = new UpdateEndDateController();

routes.post("/client/authenticate/", authenticaClientController.handle);
routes.post("/deliveryman/authenticate/", authenticateDeliverymanController.handle);

routes.post("/client/", createClientController.handle);
routes.post("/deliveryman/", createDeliverymanController.handle);

routes.post("/delivery/", ensureAuthenticateClient, deliveryController.handle);
routes.get("/delivery/available/", ensureAuthenticateDeliryman, findAllAvailableController.handle);

routes.put("/delivery/updateDeliveryman/:id", ensureAuthenticateDeliryman, updateDeliverymanController.handle);
routes.get("/client/deliveries/", ensureAuthenticateClient, findAllDeliveriesClient.handle);

routes.get("/deliveryman/deliveries/", ensureAuthenticateDeliryman, findAllDeliveriesDeliveryman.handle);
routes.put("/delivery/updateEndDate/:id", ensureAuthenticateDeliryman, updateEndDateController.handle);

export { routes };
