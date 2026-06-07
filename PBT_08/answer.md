Câu A1:
// Cách 1: Function Declaration (Khai báo hàm truyền thống)
function tinhThueBaoHiemDecl(luong) {
const thue = luong > 11000000 ? luong \* 0.1 : 0;
return { thue, thuc_nhan: luong - thue };
}

// Cách 2: Function Expression (Biểu thức hàm)
const tinhThueBaoHiemExpr = function(luong) {
const thue = luong > 11000000 ? luong \* 0.1 : 0;
return { thue, thuc_nhan: luong - thue };
};

// Cách 3: Arrow Function (Hàm mũi tên ngắn gọn)
const tinhThueBaoHiemArrow = (luong) => {
const thue = luong > 11000000 ? luong \* 0.1 : 0;
return { thue, thuc_nhan: luong - thue };
};

Ba cách này có sự khác biệt rất lớn về cơ chế Hoisting:

Function Declaration: Có hỗ trợ Hoisting toàn diện. Trình duyệt sẽ tự động đưa định nghĩa hàm lên đầu scope ngầm, do đó bạn có thể gọi hàm tinhThueBaoHiemDecl() ở bất kỳ dòng nào, ngay cả trước khi viết code khai báo nó.

Function Expression & Arrow Function: Không hỗ trợ Hoisting. Do hàm được gán vào một biến hằng số const, nếu bạn cố tình gọi hàm trước dòng khai báo, hệ thống sẽ lập tức chặn lại và báo lỗi ReferenceError phá vỡ chương trình.

Câu A2:
Dự đoán kết quả đầu ra (Output):
c.increment() -> 1
c.increment() -> 2
c.increment() -> 3
c.decrement() -> 2
c.getCount() -> 2

Kết quả đầu ra sau 200ms của hai vòng lặp:
Vòng lặp var sẽ in ra: 3 dòng chữ var: 3 giống hệt nhau.
Vòng lặp let sẽ in ra tăm tắp: let: 0, let: 1, let: 2.

Giải thích bản chất kỹ thuật:
Biến var hoạt động theo cơ chế Global/Function scope và không có Block scope. Khi hàm setTimeout bất đồng bộ hết thời gian chờ để chạy lệnh in, vòng lặp for đã kết thúc từ lâu và đẩy giá trị biến i dùng chung lên mốc số 3.
Ngược lại, biến let có tính chất Block Scope nghiêm ngặt. Mỗi một vòng lặp chạy qua, JavaScript sẽ tự động cô lập và tạo ra một vùng nhớ mới tinh để lưu giữ giá trị của j tại thời điểm đó, giúp hàm callback đằng sau đọc đúng dữ liệu.

Câu A3:

1. Lọc lấy các số chẵn trong mảng
   const evens = nums.filter(n => n % 2 === 0);

2. Nhân giá trị của từng số lên gấp 3 lần
   const triples = nums.map(n => n \* 3);

3. Tính tổng tích lũy của tất cả phần tử
   const total = nums.reduce((sum, n) => sum + n, 0);

4. Tìm kiếm phần tử đầu tiên lớn hơn số 7
   const firstMatch = nums.find(n => n > 7);

5. Kiểm tra xem có bất kỳ phần tử nào lớn hơn số 10 không
   const hasLarge = nums.some(n => n > 10);

6. Kiểm tra xem tất cả các phần tử trong mảng có lớn hơn số 0 không
   const allPositive = nums.every(n => n > 0);

7. Biến đổi tạo mảng text phân loại chẵn lẻ
   const labels = nums.map(n => `Số ${n} là ${n % 2 === 0 ? "chẵn" : "lẻ"}`);

8. Đảo ngược thứ tự mảng mà không phá hoại, thay đổi mảng gốc ban đầu
   const reversed = [...nums].reverse();

Câu A4:
Dự đoán kết quả đầu ra (Output):
console.log(name, price, ram, color); -> Đổ ra chữ: iPhone 16 25990000 8 Titan

console.log(specs); -> Báo lỗi: ReferenceError: specs is not defined.

Lý do: Vì ta đã dùng cú pháp bóc sâu lồng nhau specs: { ram, color }, JavaScript chỉ định nghĩa 2 biến con là ram và color chứ không tạo biến specs.

console.log(updated.price); -> 23990000 (Ghi đè thuộc tính mới thành công)

console.log(updated.sale); -> true

console.log(product.price); -> 25990000 (Mã gốc không hề bị thay đổi reference)

console.log(product.specs.ram); -> 16
Giải thích bẫy Spread Operator:
Cú pháp rải chân phương { ...product } chỉ thực hiện sao chép nông (Shallow Copy). Nó chỉ nhân bản các trường dữ liệu nguyên bản ở tầng bề mặt. Đối với các Object lồng sâu bên trong như trường specs, lệnh spread chỉ sao chép lại cái địa chỉ ô nhớ (Reference pointer) chứ không sao chép dữ liệu ruột. Do đó, khi ta can thiệp sửa thuộc tính copy.specs.ram = 16, nó sẽ tác động trực tiếp lên ô nhớ chung và làm biến đổi luôn cả mảng dữ liệu gốc ban đầu.
