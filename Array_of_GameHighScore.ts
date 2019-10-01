import { IGameHighScore, GameHighScore, Bot } from "./_internals.js";

export const Array_of_GameHighScore = (value: IGameHighScore[], token?: string | Bot) => {
    "use strict";
    const result: GameHighScore[] = new Array(value.length);
    for (let i = 0; i < value.length; i++) {
        result[i] = new GameHighScore(value[i], token);
    }
    return result;
}
