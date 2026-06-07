function playGame() {
    const targetNumber = Math.floor(Math.random() * 100) + 1;
    
    let attempts = 0;         
    const maxAttempts = 7;    
    const guessedHistory = []; 
    let hasWon = false;       

    while (attempts < maxAttempts && !hasWon) {
        let input = prompt(`[Lượt ${attempts + 1}/${maxAttempts}] Nhập số bạn đoán (từ 1 đến 100):`);
        
        if (input === null) {
            alert("Trò chơi đã bị hủy bỏ.");
            return;
        }
        let guess = parseInt(input.trim());
        
        if (isNaN(guess) || guess < 1 || guess > 100) {
            alert("⚠️ Lỗi: Bạn phải nhập một số nguyên hợp lệ nằm trong khoảng từ 1 đến 100!");
            continue; 
        }

        if (guessedHistory.includes(guess)) {
            alert(`⚠️ Cảnh báo: Bạn đã đoán số ${guess} này rồi! Hãy chọn số khác.`);
            continue; 
        }

        attempts++;
        guessedHistory.push(guess); 

        if (guess === targetNumber) {
            hasWon = true; 
            alert(`Đúng rồi! 🎉 Bạn đoán đúng sau ${attempts} lần!`);
        } else if (guess > targetNumber) {
            alert("Thấp hơn"); 
        } else {
            alert("Cao hơn");  
        }
    }

    if (!hasWon) {
        alert(`Bạn đã hết lượt! Bạn thua cuộc. ❌ Đáp án chính xác là: ${targetNumber}`);
    }
}