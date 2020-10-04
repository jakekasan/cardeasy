import FileRepository from "./FileRepository";

export interface IOccasion {
    id: string,
    text: string
}

const DATA = [
    "Birthday",
    "Anniversary",
    "Moved house",
    "Graduated",
    "Christmas",
    "Promotion"
].map((item, i) => Object.assign({}, {text: item}, {id: i.toString()}))

class OccasionRepository extends FileRepository<IOccasion> {};

export const occasionRepoFactory = () => new OccasionRepository(DATA);

export default OccasionRepository;