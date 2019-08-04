import InputFile from "./InputFile";
import String from "./String";

declare type InputFile_or_String = InputFile | String;
declare function InputFile_or_String(data: InputFile_or_String, token?: string): InputFile_or_String;
export default InputFile_or_String;
