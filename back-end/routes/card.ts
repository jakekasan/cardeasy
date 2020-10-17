import { Router, Request, Response, NextFunction } from "express";
import { cardRepo, userRepo, designRepo, occasionRepo } from "../repos";

const Card = Router();

Card.get("/", (req: Request, res: Response, next: NextFunction) => {

    console.log("Card.get")

    const { query } = req;

    if (query && query.id) {
        console.log("Card.getById", { query });
        
        cardRepo.getById(query.id as string)
            .then(cardData => {
                Promise.all([
                    Promise.all(cardData.collaborators.map(userId => userRepo.getById(userId)))
                        .then(collaborators => {
                            return { collaborators }
                        }),
                    userRepo.getById(cardData.recipient).then(user => ({recipient: user})),
                    userRepo.getById(cardData.sender).then(user => ({sender: user})),
                    designRepo.getById(cardData.design).then(design => ({ design: design })),
                    occasionRepo.getById(cardData.occasion).then(occasion => ({ occasion: occasion }))
                ])
                    .then(data => {
                        res.json(Object.assign({}, cardData, ...data))
                    })
                    .catch(e => next(e))
            })
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
})

export default Card;