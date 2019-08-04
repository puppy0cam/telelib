export default function ArrayOf<T>(validatorCreator: (token?: string) => (data: any) => T): (data: any[], token?: string) => T[];
