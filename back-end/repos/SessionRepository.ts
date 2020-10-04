import FileRepository from "./FileRepository";

export interface ISession {
    id: string,
    userId: string
}

class SessionRepository extends FileRepository<ISession> {};

export const sessionRepoFactory = () => new SessionRepository([]);

export default SessionRepository;