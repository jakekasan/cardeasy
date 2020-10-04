import FileRepository from "./FileRepository";

interface IDesign {
    id: string,
    text: string
}

const DATA = [
    "CLASSIC",
    "VINTAGE",
    "FUTURISTIC",
    "BLUE",
    "RED",
    "PURPLE",
    "PINK",
    "TURQUOISE"
].map((item, i) => Object.assign({}, {text: item}, {id: i.toString()}))

class DesignRepository extends FileRepository<IDesign> {};

export const designRepoFactory = () => new DesignRepository(DATA);

export default DesignRepository;