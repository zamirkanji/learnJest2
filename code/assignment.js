const capitalize = (str) => {
    let firstLetter = str.slice(0, 1);
    firstLetter = firstLetter.toUpperCase();
    let rest = str.slice(1);
    str = firstLetter.concat("", rest);
    return str;
}

const reverseString = (str) => {
    let strArr = str.split("");
    strArr = strArr.reverse();
    str = strArr.join('');
    return str;
}

const calculator = (a, b) => {
    const add = () => a + b;
    const sub = () => a - b;
    const mult = () => a * b;
    const divide = () => a / b;
    return {add, sub, mult, divide}
}

const caesarCipher = (str) => {

}
const analyzeArray = (a) => {
    console.log(a.length);
	const lengthOfArr = a.length;
	const averageOfNums = function () {
        let total = a.reduce((prev, curr) => {
            return prev + curr;
        }, 0);
        console.log(total);
        let avg = total / lengthOfArr;
        return avg;
    };
	const arrayMin = Math.min(...a);
    const arrayMax = Math.max(...a);
	return {
		average: averageOfNums(),
        min: arrayMin,
        max: arrayMax,
	    length: lengthOfArr
	};
};

export {
    capitalize, 
    reverseString,
    calculator,
    caesarCipher,
    analyzeArray
}