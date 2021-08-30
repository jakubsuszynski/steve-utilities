import {Greeter} from "./index";

test('My Greeter', () => {
    expect(Greeter({diff: 'Carl'})).toBe('Hello Carl');
});