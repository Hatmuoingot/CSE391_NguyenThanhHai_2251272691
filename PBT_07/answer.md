Đoạn 1: Kết quả ra undefined. Do cơ chế Hoisting của biến var, trình duyệt tự động đưa phần khai báo lên đầu scope nhưng chưa có giá trị gán.

Đoạn 2: Kết quả báo lỗi ReferenceError. Do biến let bị dính cơ chế Temporal Dead Zone (Vùng chết tạm thời), bạn tuyệt đối không được truy cập hay gọi biến trước dòng khai báo.

Đoạn 3: Kết quả báo lỗi TypeError. Do biến const là một hằng số cố định, hệ thống cấm hành vi gán lại giá trị mới bằng toán tử =.

Đoạn 4: Kết quả hiển thị mảng [1, 2, 3, 4]. Vì hằng số const chỉ chặn việc gán lại địa chỉ ô nhớ mới, chứ không chặn việc chỉnh sửa (mutate) dữ liệu ruột bên trong của một Object hoặc Array (.push()).

Đoạn 5: Kết quả dòng 1 ra Trong block: 2, dòng 2 ra Ngoài block: 1. Do let hoạt động theo cơ chế Block Scope (chỉ có giá trị trong cặp ngoặc nhọn {}). Hai biến a này nằm ở 2 phạm vi khác nhau hoàn toàn.

Câu A2:
console.log(typeof null); -> Kết quả ra "object". Đây là một lỗi thiết kế lịch sử của ngôn ngữ JavaScript từ lúc khai sinh nhưng không thể sửa vì sợ vỡ hệ thống các trang web cũ.

console.log("5" + 3); -> Kết quả ra chuỗi "53". Toán tử + khi gặp chuỗi sẽ ưu tiên hành vi ghép chuỗi văn bản.

console.log("5" - 3); -> Kết quả ra số 2. Toán tử trừ - không dùng cho chuỗi nên JavaScript tự động ép chuỗi "5" thành số 5 để làm phép toán số học.

console.log(5 == "5"); -> Kết quả ra true. Toán tử so sánh lỏng lẻo == tự động ép kiểu để đưa về cùng một dạng rồi mới so sánh giá trị.

console.log(5 === "5"); -> Kết quả ra false. Toán tử nghiêm ngặt === kiểm tra cả giá trị lẫn kiểu dữ liệu (Số khác kiểu với Chữ).

Câu A3:
6 giá trị Falsy mặc định trong JavaScript: false, 0, "" (chuỗi rỗng), null, undefined, và NaN.

Dự đoán luồng chạy điều kiện:
if ([]) -> Chạy vào nhánh TRUE (Mọi mảng và object dù rỗng vẫn là Truthy).
if ("") -> Chạy vào nhánh FALSE (Nằm trong danh sách Falsy mặc định).
if ("0") -> Chạy vào nhánh TRUE (Chuỗi có ký tự bên trong luôn là Truthy).

Câu C1:
Lỗi 1: Sai toán tử gán trong mệnh đề if

Vị trí: if (giaSauGiam = 0) { ... }

Bản chất: Dấu = là toán tử gán chứ không phải so sánh. Câu lệnh này vô tình ép biến giaSauGiam về bằng 0, và vì số 0 là một giá trị Falsy nên khối mã bên trong if sẽ không bao giờ được thực thi.

Cách sửa: Đổi thành toán tử so sánh nghiêm ngặt ===: if (giaSauGiam === 0) { ... }

Lỗi 2: Tính toán sai kiểu dữ liệu (Type Coercion)

Vị trí: tinhGiaGiamGia("100000", 20)

Bản chất: Giá trị truyền vào đang là một Chuỗi ("100000") chứ không phải số. Mặc dù toán tử nhân \* và chia / ở dòng dưới tự động ép kiểu về dạng số để tính ra kết quả đúng, nhưng đây là một thói quen nguy hiểm dễ sinh bug trong các phép tính cộng.

Cách sửa: Chuyển đổi tường minh bằng hàm Number() ngay khi nhận tham số: giaBan = Number(giaBan);

Lỗi 3: Lỗi logic in thông báo kết quả sai mốc

Vị trí: Khối test gán const gia2 = tinhGiaGiamGia(50000, 110) vẫn cố tình in ra log.

Bản chất: Khi truyền vào số phần trăm giảm là 110, hàm sẽ lọt vào nhánh if chặn trên và trả về chuỗi thông báo "Phần trăm giảm không hợp lệ". Do đó câu lệnh log bên ngoài sẽ in ra kết quả kỳ dị là: Giá: Phần trăm giảm không hợp lệ.

Cách sửa: Cần kiểm tra kiểu dữ liệu của kết quả trả về trước khi in ra màn hình.

Lỗi 4: Lỗi "ẩn" kinh điển liên quan đến Scope của var trong vòng lặp

Vị trí: for (var i = 0; i < 5; i++) { setTimeout(...) }

Bản chất: Biến var không có Block Scope mà hoạt động theo cơ chế Function/Global Scope. Hàm setTimeout là xử lý bất đồng bộ, nó sẽ đợi sau 1 giây (1000ms) mới kích hoạt chạy log. Tại thời điểm 1 giây sau đó, vòng lặp for đã chạy xong từ lâu và biến i toàn cục đã tăng chạm mốc số 5. Kết quả là màn hình sẽ in ra 5 dòng chữ Item 5 lặp lại giống hệt nhau thay vì chạy từ 0 đến 4.

Cách sửa: Thay thế từ khóa khai báo var thành let. Mỗi lượt lặp của let sẽ tạo ra một block scope riêng biệt gắn chặt với giá trị của i tại vòng lặp đó.

Câu C2:
