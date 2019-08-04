import PassportFile, { IPassportFile } from "./PassportFile";

declare function Array_of_PassportFile(data: Array<PassportFile | IPassportFile>, token?: string): Array<PassportFile>;
declare type Array_of_PassportFile = Array<PassportFile>;
export default Array_of_PassportFile;
