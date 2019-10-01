import { Stream } from "stream";
import { ReadStream } from "fs";

export type InputFile = Stream | Buffer | ReadStream;
export {};
