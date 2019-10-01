import { Bot, User, IUser } from "./_internals.js";
/** This object represents one row of the high scores table for a game. */
export declare class GameHighScore extends Bot implements IGameHighScore {
    constructor(data: IGameHighScore, token?: string | Bot);
    position: number;
    user: User;
    score: number;
}
/** This object represents one row of the high scores table for a game. */
export interface IGameHighScore {
    /** Position in high score table for the game */
    position: number;
    /** User */
    user: IUser;
    /** Score */
    score: number;
}
