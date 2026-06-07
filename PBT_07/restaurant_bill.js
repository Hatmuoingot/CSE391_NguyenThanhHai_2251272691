function generateInvoice(cart, hasTip = false) {
    let subTotal = 0;
    cart.forEach(item => {
        subTotal += item.price * item.quantity;
    });

    let discountPercent = 0;
    if (subTotal > 1000000) {
        discountPercent = 15;
    } else if (subTotal > 500000) {
        discountPercent = 10;
    }

    const currentDay = new Date().getDay(); 
    if (currentDay === 3) {
        discountPercent += 5; 
    }

    let discountAmount = (subTotal * discountPercent) / 100;
    let priceAfterDiscount = subTotal - discountAmount;

    let vatAmount = (priceAfterDiscount * 8) / 100; 
    let tipAmount = hasTip ? (priceAfterDiscount * 5) / 100 : 0; 

    let finalTotal = priceAfterDiscount + vatAmount + tipAmount;

    console.log("╔══════════════════════════════════════╗");
    console.log("║        HÓA ĐƠN NHÀ HÀNG              ║");
    console.log("╠══════════════════════════════════════╣");
    
    cart.forEach((item, index) => {
        let itemRow = `║ ${index + 1}. ${item.name.padEnd(10)} x${item.quantity}   @${(item.price/1000)}k  = ${(item.price * item.quantity).toLocaleString("vi-VN")}đ`;
        console.log(itemRow.padEnd(39) + "║");
    });
    
    console.log("╠══════════════════════════════════════╣");
    console.log(`║ Tổng cộng:              ${subTotal.toLocaleString("vi-VN")}đ`.padEnd(39) + "║");
    console.log(`║ Giảm giá (${discountPercent}%):           ${discountAmount.toLocaleString("vi-VN")}đ`.padEnd(39) + "║");
    console.log(`║ VAT (8%):                ${vatAmount.toLocaleString("vi-VN")}đ`.padEnd(39) + "║");
    console.log(`║ Tip (5%):                ${tipAmount.toLocaleString("vi-VN")}đ`.padEnd(39) + "║");
    console.log("╠══════════════════════════════════════╣");
    console.log(`║ THANH TOÁN:              ${finalTotal.toLocaleString("vi-VN")}đ`.padEnd(39) + "║");
    console.log("╚══════════════════════════════════════╝");
}

const myCart = [
    { name: "Phở bò", price: 65000, quantity: 2 },
    { name: "Trà đá", price: 5000, quantity: 3 },
    { name: "Bún chả", price: 55000, quantity: 1 }
];

generateInvoice(myCart, true);