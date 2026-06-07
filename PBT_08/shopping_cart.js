function createCart() {
    let items = [];
    let activeDiscount = { code: "NONE", rate: 0, flat: 0 };

    return {
        addItem(product, quantity = 1) {
            const existingItem = items.find(i => i.id === product.id);
            if (existingItem) {
                existingItem.quantity += quantity;
            } else {
                items.push({ ...product, quantity });
            }
        },

        removeItem(productId) {
            items = items.filter(i => i.id !== productId);
        },
        updateQuantity(productId, newQuantity) {
            const targetItem = items.find(i => i.id === productId);
            if (targetItem && newQuantity > 0) {
                targetItem.quantity = newQuantity;
            }
        },

        getSubTotal() {
            return items.reduce((sum, i) => sum + (i.price * i.quantity), 0);
        },
        getTotal() {
            let sub = this.getSubTotal();
            let reduced = sub * (1 - activeDiscount.rate) - activeDiscount.flat;
            return Math.max(0, reduced);
        },

        applyDiscount(code) {
            if (code === "SALE10") activeDiscount = { code, rate: 0.1, flat: 0 };
            else if (code === "SALE20") activeDiscount = { code, rate: 0.2, flat: 0 };
            else if (code === "FREESHIP") activeDiscount = { code, rate: 0, flat: 30000 };
        },

        getItemCount() {
            return items.reduce((sum, i) => sum + i.quantity, 0);
        },

        clearCart() { items = []; activeDiscount = { code: "NONE", rate: 0, flat: 0 }; },

        printCart() {
            console.log("┌──────────────────────────────────────────────┐");
            console.log("│ # │ Sản phẩm      │ SL │ Đơn giá     │ Tổng        │");
            items.forEach((item, idx) => {
                let row = `│ ${idx + 1} │ ${item.name.padEnd(13)} │  ${item.quantity} │ ${(item.price).toLocaleString().padEnd(10)} │ ${(item.price * item.quantity).toLocaleString().padEnd(10)} │`;
                console.log(row);
            });
            console.log("├──────────────────────────────────────────────┤");
            console.log(`│ Mã giảm giá đang dùng: ${activeDiscount.code.padEnd(22)} │`);
            console.log(`│ Tổng cộng sau chiết khấu:        ${this.getTotal().toLocaleString()}đ │`.padStart(46));
            console.log("└──────────────────────────────────────────────┘");
        }
    };
}

const cart = createCart();
cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1);
cart.addItem({ id: 3, name: "AirPods Pro", price: 6990000 }, 2);
cart.addItem({ id: 1, name: "iPhone 16", price: 25990000 }, 1); 

cart.printCart();
cart.applyDiscount("SALE10"); 
cart.printCart();