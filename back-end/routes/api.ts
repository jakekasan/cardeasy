import { NextFunction, Request, Response, Router } from "express";
import { designRepo, occasionRepo, userRepo } from "../repos";
import { IOccasion } from "../repos/OccasionRepository";
import { IDesign } from "../repos/DesignRepository";
import { IUser } from "../repos/UserRepository";
import Card from "./card";
import User from "./user";
import repoRouterFactory from "./repoRouterFactory";

const api = Router();

api.use((req: Request, res: Response, next: NextFunction) => {
    console.log("API route fired");
    next();
});

api.use("/card", Card);

api.use("/occasion", repoRouterFactory<IOccasion>(occasionRepo));
api.use("/design", repoRouterFactory<IDesign>(designRepo));
api.use("/user", User);
//api.use("/user", repoRouterFactory<IUser>(userRepo));

api.use((req: Request, res: Response, next: NextFunction) => {
    console.log("API didn't match...");
    res.status(404).send();
});

export default api;