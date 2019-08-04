import Integer from "./Integer";
import User from "./User";

/** This object represents one row of the high scores table for a game. */
export default class GameHighScore implements IGameHighScore {
    constructor(data: IGameHighScore | GameHighScore, token?: string);
    public position: Integer;
    public user: User;
    public score: Integer;
}

export interface IGameHighScore {
    /** Position in high score table for the game */
    position: Integer;
    /** User */
    user: User;
    /** Score */
    score: Integer;
}
