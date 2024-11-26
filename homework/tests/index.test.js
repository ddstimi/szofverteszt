<<<<<<< HEAD
const Greeter = require("../src/index");
describe('Greeter', () => {
    test('No input should greet with "my friend"', () => {
        expect(Greeter.greet()).toBe('Hello, my friend.');
    });

    test('One name should include the name in the greeting', () => {
        expect(Greeter.greet(['Bob'])).toBe('Hello Bob.');
    });

    test('Multiple names should list all names correctly', () => {
        expect(Greeter.greet(['Alice', 'Bob', 'Jerry'])).toBe('Hello Alice, Bob and Jerry.');
    });

    test('All uppercase name should result in a shouting greeting', () => {
        expect(Greeter.greet(['BARRY'])).toBe('HELLO BARRY!');
    });

    test('Mixed names should separate normal and shouting greetings', () => {
        expect(Greeter.greet(['JAY', 'Maya', 'Alice', 'BOB', 'Charlotte']))
            .toBe('Hello Maya, Alice and Charlotte. HELLO JAY AND BOB!');
    });

    test('Names containing commas should be split into separate names', () => {
        expect(Greeter.greet(['Jerry', 'Alice, Bob']))
            .toBe('Hello Jerry, Alice and Bob.');
    });

});

=======
// TESTS HERE
describe("Description", () => {});
>>>>>>> d58822bb8283522961830d6ba7d9bbe59875a604
