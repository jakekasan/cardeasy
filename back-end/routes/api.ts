import { NextFunction, Request, Response, Router } from "express";
import Card from "./card";

const api = Router();

api.use((req: Request, res: Response, next: NextFunction) => {
    console.log("API route fired");
    next();
});

api.use("/card", Card);

api.use((req: Request, res: Response, next: NextFunction) => {
    console.log("API didn't match...");
    res.status(404).send();
});

export default api;