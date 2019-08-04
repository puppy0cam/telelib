import Stream from "stream";
import { Buffer } from "buffer";
declare type InputFile = Stream | Buffer;
declare function InputFile(data: InputFile): InputFile;
export default InputFile;
