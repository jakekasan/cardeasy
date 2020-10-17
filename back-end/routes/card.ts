import { Router, Request, Response, NextFunction } from "express";
import { cardRepo } from "../repos";

const Card = Router();

Card.get("/", (req: Request, res: Response, next: NextFunction) => {

    console.log("Card.get")

    const { query } = req;

    if (query && query.id) {
        console.log("Card.getById", { query });
        
        cardRepo.getById(query.id as string)
            .then(data => res.json(data))
            .catch(e => next(e));
    } else {
        console.log("Card.getAll");
        
        cardRepo.getAll()
            .then(data => res.json(data))
            .catch(e => next(e));
    }
});

Card.post("/", (req: Request, res: Response, next: NextFunction) => {

    console.log("Card.post");

    const { body } = req;

    res.json(body);

    // cardRepo.create(body)
    //     .then((result) => res.json(result))
    //     .catch(e => next(e));

})

export default Card;