import Update, { IUpdate } from "./Update";

declare function Array_of_Update(data: Array<Update | IUpdate>, token?: string): Array<Update>;
declare type Array_of_Update = Array<Update>;
export default Array_of_Update;
