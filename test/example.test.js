// IMPORT MODULES under test here:
import { countsAsAYes } from '../function.js';
// import example from '../example.js';

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const word = 'Yellow';
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = countsAsAYes(word);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
