import FileRepository from "./FileRepository";

export interface IUser {
    id: string,
    name: string,
    email: string
}

const DATA: Array<IUser> = [
    {
        name: "Bart Simpson",
        email: "elbarto@aykaramba.com"
    },
    {
        name: "Lisa Simpson",
        email: "lisa.simpson@springfield.com"
    },
    {
        name: "Homer Simpson",
        email: "homie@npp.com"
    },
    {
        name: "Marge Simpson",
        email: "marge.simpson@springfield.com"
    },
    {
        name: "Maggie Simpson",
        email: "the.baby@springfield.com"
    },
    {
        name: "Luke Skywalker",
        email: "luke.skywalker@rebel.alliance"
    },
    {
        name: "Darth Vader",
        email: "annie@empire.imp"
    },
    {
        name: "Ross Geller",
        email: "rossatron@museum.ny"
    },
    {
        name: "Rachel Greene",
        email: "r.greene@ralph-lauren.com"
    },
    {
        name: "Monica Geller",
        email: "mon@javu.com"
    },
    {
        name: "Pheobe Buffay",
        email: "pheebs@yahoo.com"
    },
    {
        name: "Chandler Bing",
        email: "chanandler.bong@yahoo.com"
    },
    {
        name: "Joey Tribianni",
        email: "joe@dool.com"
    }
].map((user, i) => {
    return {...user, id: i.toString()}
})

class UserRepository extends FileRepository<IUser> {};

export const userRepoFactory = () => new UserRepository(DATA);

export default UserRepository;