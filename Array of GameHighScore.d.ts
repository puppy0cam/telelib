import GameHighScore, { IGameHighScore } from "./GameHighScore";

declare function Array_of_GameHighScore(data: Array<GameHighScore | IGameHighScore>, token?: string): Array<GameHighScore>;
declare type Array_of_GameHighScore = Array<GameHighScore>;
export default Array_of_GameHighScore;
