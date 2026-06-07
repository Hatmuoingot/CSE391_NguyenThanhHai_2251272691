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
