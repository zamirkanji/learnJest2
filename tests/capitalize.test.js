import {capitalize} from '../code/assignment';

test('takes first letter of string and capitalizes it', () => {
    expect(capitalize('hello'))
        .toEqual('Hello');
})