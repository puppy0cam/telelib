export default function isPrimitive<T>(value: T): T extends Function | object ? false : true;
