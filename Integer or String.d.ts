import Integer from "./Integer";
import String from "./String";

declare type Integer_or_String = Integer | String;
declare function Integer_or_String(data: Integer_or_String, token?: string): Integer_or_String;
export default Integer_or_String;
