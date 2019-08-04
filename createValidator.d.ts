export default function createValidator<T>(callback: new (data: any, token?: string) => T, asConstructor: true): (token?: string) => (data: any) => T;
export default function createValidator<T>(callback: (data: any, token?: string) => T, asConstructor?: false): (token?: string) => (data: any) => T;
