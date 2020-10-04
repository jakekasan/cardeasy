import collect from "../utils/collect";
import FileRepository from "./FileRepository";

export interface ICard {
    id: string,
    design: string,
    occasion: string,
    recipient: string,
    sender: string,
    collaborators: Array<string>
};

const DATA: Array<ICard> = [
    {
        id: "0",
        design: "0",
        occasion: "0",
        recipient: "0",
        sender: "1",
        collaborators: [
            "2","3","4","5"
        ]
    },
    {
        id: "1",
        design: "0",
        occasion: "0",
        recipient: "7",
        sender: "8",
        collaborators: [
            "2","6"
        ]
    },
    {
        id: "2",
        design: "0",
        occasion: "0",
        recipient: "10",
        sender: "9",
        collaborators: [
            "2","6","7","8"
        ]
    },
    {
        id: "3",
        design: "0",
        occasion: "1",
        recipient: "7",
        sender: "6",
        collaborators: [
            "2","12","11","10","9","8"
        ]
    },
    {
        id: "4",
        design: "0",
        occasion: "2",
        recipient: "6",
        sender: "5",
        collaborators: []
    }
];

class CardRepository extends FileRepository<ICard> {};

export const cardRepoFactory = () => new CardRepository(DATA);

export default CardRepository;

