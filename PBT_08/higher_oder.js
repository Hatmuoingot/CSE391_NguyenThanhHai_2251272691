
const pipe = (...fns) => (initialValue) => fns.reduce((acc, fn) => fn(acc), initialValue);

function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key] !== undefined) {
            return cache[key];
        }
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

function debounce(fn, delay) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
}

async function retry(fn, maxAttempts = 3) {
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            return await fn();
        } catch (error) {
            if (attempt === maxAttempts) throw error;
            console.log(`Thử lại lần ${attempt} thất bại, đang kết nối lại...`);
        }
    }
}

const process = pipe(
    x => x * 2,
    x => x + 10,
    x => x.toString(),
    x => "Kết quả: " + x
);
console.log(process(5));

const expensiveCalc = memoize((n) => {
    console.log("Đang tính toán sâu...");
    let result = 0;
    for (let i = 0; i < n; i++) result += i;
    return result;
});
console.log(expensiveCalc(100000));
console.log(expensiveCalc(100000));