import { Bot, User, IUser } from "./_internals.js";

/** This object represents one row of the high scores table for a game. */
export class GameHighScore extends Bot implements IGameHighScore {
    constructor(data: IGameHighScore, token?: string | Bot) {
        "use strict";
        super(data, token);
        this.user = new User(data.user, this);
    }
    public position!: number;
    public user!: User;
    public score!: number;
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
