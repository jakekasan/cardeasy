import { cardRepoFactory } from "./CardRepository";
import { designRepoFactory } from "./DesignRepository";
import { occasionRepoFactory } from "./OccasionRepository";
import { sessionRepoFactory } from "./SessionRepository";
import { userRepoFactory } from "./UserRepository";

const cardRepo = cardRepoFactory();
const designRepo = designRepoFactory();
const occasionRepo = occasionRepoFactory();
const sessionRepo = sessionRepoFactory();
const userRepo = userRepoFactory();

export {
    cardRepo,
    designRepo,
    occasionRepo,
    sessionRepo,
    userRepo
};