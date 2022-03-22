import { calculator } from "../code/assignment";

test('calculator object that returns add, subtract, mult, divide functions', () => {
    let calc = calculator(3, 3);
    expect(calc.add()).toEqual(6);
    expect(calc.sub()).toEqual(0);
    expect(calc.mult()).toEqual(9);
    expect(calc.divide()).toEqual(1);
})