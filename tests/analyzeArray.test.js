import {analyzeArray} from '../code/assignment';

test('function that takes array and returns an object with avg, min, max, and length', () => {
    expect(analyzeArray([1, 3, 87, 7, 25])).toMatchObject(
        {average: 24.6, length: 5, max: 87, min: 1
    });
})