function tinhGiaGiamGia(giaBan, phanTramGiam) {
    giaBan = Number(giaBan);
    phanTramGiam = Number(phanTramGiam);

    if (phanTramGiam < 0 || phanTramGiam > 100) {
        return "⚠️ Phần trăm giảm không hợp lệ!";
    }
    
    let giamGia = (giaBan * phanTramGiam) / 100;
    let giaSauGiam = giaBan - giamGia;
    
    if (giaSauGiam === 0) {
        console.log("Sản phẩm miễn phí!");
    }
    
    return giaSauGiam;
}


const gia = tinhGiaGiamGia("100000", 20); 
console.log("Giá sau giảm: " + gia + "đ"); 

const gia2 = tinhGiaGiamGia(50000, 110);
console.log("Giá: " + gia2); 

for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log("Item " + i); 
    }, 1000);
}