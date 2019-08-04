declare type Boolean = boolean;
declare function Boolean<T>(value: T): T extends boolean ? T : never;
export default Boolean;
