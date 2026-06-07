function classicFizzBuzz() {
    console.log("--- BẮT ĐẦU VERSION 1: CLASSIC FIZZBUZZ (1-100) ---");
    
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } 
        else if (i % 3 === 0) {
            console.log("Fizz");
        } 
        else if (i % 5 === 0) {
            console.log("Buzz");
        } 
        else {
            console.log(i);
        }
    }
}

function customFizzBuzz(n, rules) {
    let result = "";

    for (let i = 0; i < rules.length; i++) {
        if (n % rules[i].divisor === 0) {
            result += rules[i].word;
        }
    }

    if (result === "") {
        return n; 
    }

    return result;
}

const myRules = [
    { divisor: 3, word: "Fizz" },
    { divisor: 5, word: "Buzz" },
    { divisor: 7, word: "Jazz" }
];

console.log("\n--- BẮT ĐẦU VERSION 2: CUSTOM FIZZBUZZ TEST ---");
console.log(`Số 21 kết quả là:`, customFizzBuzz(21, myRules));   
console.log(`Số 15 kết quả là:`, customFizzBuzz(15, myRules));  
console.log(`Số 35 kết quả là:`, customFizzBuzz(35, myRules));  
console.log(`Số 105 kết quả là:`, customFizzBuzz(105, myRules));
console.log(`Số 11 kết quả là:`, customFizzBuzz(11, myRules));  