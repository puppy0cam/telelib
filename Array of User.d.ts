import User, { IUser } from "./User";

declare function Array_of_User(data: Array<User | IUser>, token?: string): Array<User>;
declare type Array_of_User = Array<User>;
export default Array_of_User;
