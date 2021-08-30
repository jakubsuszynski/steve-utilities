export interface SomeInterface {
    diff: string
}

export const Greeter = (name: SomeInterface) => `Hello ${name.diff}`;
