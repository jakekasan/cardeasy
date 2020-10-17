import { Router, Request, Response, NextFunction } from "express";
import { cardRepo, userRepo } from "../repos";


const User = Router();

User.get("/", (req: Request, res: Response, next: NextFunction) => {

    console.log("User.get")

    const { query: { id } } = req;

    if (id) {
        userRepo.getById(id as string)
            .then(userData => {
                // res.json(data)
                cardRepo.find([
                    card => card.collaborators.includes(userData.id),
                    card => card.sender == userData.id,
                    card => card.recipient == userData.id
                ])
                    .then(userCards => res.json({
                        ...userData,
                        cards: userCards
                    }))
                    .catch(err => {
                        console.log({err});
                        res.sendStatus(404);
                    })
            })
            .catch(err => res.sendStatus(404));
    } else {
        res.sendStatus(404);
    }
});

User.post("/", (req: Request, res: Response, next: NextFunction) => {

    console.log("User.post");

    const { body } = req;

    res.json(body);
})

export default User;