import { NextFunction, Request, Response, Router } from "express";
import IRepository from "../repos/IRepository";

const repoRouterFactory = <T>(repo: IRepository<T>) => {
    const repoRouter = Router();

    repoRouter.get("/", (req: Request, res: Response) => {
        const { query } = req;
        if (query) {
            const { id } = query;
            repo.getById(id as string)
                .then(data => res.json(data));
        } else {
            repo.getAll()
                .then(data => res.json(data));
        }
    })

    repoRouter.post("/", (req: Request, res: Response, next: NextFunction) => {

        const { body } = req;

        console.log({ body });
        
        if (body) {
            repo.create(body)
                .then(data => res.json(data))
                .catch(e => next(e));
        } else {
            res.json({
                status: "error",
                message: "No body was sent with post request"
            })
        }
    })

    return repoRouter
}

export default repoRouterFactory;