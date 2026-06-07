function calculate(a, operation, b) {
    a = Number(a);
    b = Number(b);

    switch (operation) {
        case '+': 
            return a + b;
        case '-': 
            return a - b;
        case '*': 
            return a * b;
        case '/': 
            if (b === 0) {
                return "⚠️ Lỗi: Không thể chia cho số 0!";
            }
            return a / b;
        default: 
            return "⚠️ Lỗi: Phép tính không hợp lệ!";
    }
}

console.log("Phép cộng (5 + 3):", calculate(5, '+', 3));  
console.log("Phép trừ (10 - 4):", calculate(10, '-', 4)); 
console.log("Phép nhân (4 * 3):", calculate(4, '*', 3));   
console.log("Phép chia (9 / 3):", calculate(9, '/', 3));   
console.log("Bẫy chia cho 0 (5 / 0):", calculate(5, '/', 0)); 