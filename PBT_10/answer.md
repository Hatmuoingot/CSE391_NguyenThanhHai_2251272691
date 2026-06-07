Câu A1:
Dự đoán thứ tự hiển thị (Output):
1 - Start

4 - End

3 - Promise

6 - Promise 2

2 - Timeout 0ms

7 - Nested timeout

5 - Timeout 100ms
Giải thích cơ chế vận hành của JavaScript Engine:
Môi trường đơn luồng (Single-threaded): Các dòng code đồng bộ (Synchronous) luôn được ưu tiên chạy ngay lập tức từ trên xuống dưới, do đó 1 - Start và 4 - End sẽ xuất hiện đầu tiên.

Microtask Queue (Hàng đợi tác vụ vi mô): Chuyên chứa các phản hồi của Promise. Hàng đợi này có mức độ ưu tiên cao tuyệt đối. Ngay khi luồng code đồng bộ chính kết thúc, Event Loop sẽ quét sạch toàn bộ các task trong Microtask Queue trước, sinh ra chuỗi kết quả 3 - Promise và 6 - Promise 2.

Macrotask Queue / Callback Queue (Hàng đợi vĩ mô): Chuyên chứa các sự kiện hẹn giờ như setTimeout. Các tác vụ này chỉ được đẩy vào luồng thực thi sau khi Microtask Queue đã trống rỗng hoàn toàn. Do đó, các bộ đếm thời gian sẽ chạy sau, tính theo mốc thời gian đăng ký (0ms chạy trước, 100ms chạy sau cùng).

Câu A2:
Phân tích Fetch API
await fetch(...) trả về gì? Tại sao cần await?

fetch() trả về một Promise chứa đối tượng Response (chưa được phân tích cú pháp). Ta bắt buộc phải có từ khóa await để ra lệnh cho JavaScript tạm dừng thực thi luồng code phía sau, kiên nhẫn đợi cho đến khi Promise này được giải quyết (resolve) xong để mở gói lấy dữ liệu thô từ máy chủ phản hồi về.

response.ok khi nào trả về false? Liệt kê 3 status codes:

Thuộc tính response.ok sẽ trả về false khi máy chủ nhận được request nhưng phản hồi về các mã lỗi HTTP nằm ngoài khoảng số 200 - 299.

3 mã lỗi kinh điển thường gặp: 404 (Not Found - Không tìm thấy trang), 500 (Internal Server Error - Máy chủ sập lỗi logic), và 403 (Forbidden - Bị chặn truy cập do không đủ quyền).

response.json() tại sao CŨNG cần từ khóa await?

Bản chất việc đọc và chuyển đổi luồng dữ liệu thô (Stream body) từ server thành một đối tượng JavaScript JSON là một tác vụ tiêu tốn thời gian và chạy bất đồng bộ. Hàm này tiếp tục trả ra một Promise mới, nên ta cần thêm await lần thứ hai để lấy được mảng/đối tượng sạch sau khi phân tích xong.

try...catch ở đây bắt được những loại lỗi gì?

Khối catch ở đây sẽ bắt được: Lỗi mất kết nối mạng giữa chừng (Network error), lỗi cấu hình sai đường dẫn URL (Failed to fetch), các lỗi HTTP do ta chủ động ném ra bằng câu lệnh throw new Error, và lỗi phân tích cú pháp khi dữ liệu trả về bị lỗi định dạng không phải JSON sạch (JSON parse error).

Câu A3:
Sơ đồ Trạng thái Promise & Callback Hell

1. Vẽ sơ đồ 3 trạng thái của một Promise:
   ┌───────────────────────┐
   │ ⏳ PENDING │
   │ (Đang chờ xử lý) │
   └───────────┬───────────┘
   │
   ┌─────────────┴─────────────┐
   ▼ ▼
   ┌───────────────────────┐ ┌───────────────────────┐
   │ ✅ FULFILLED │ │ ❌ REJECTED │
   │ (Thành công .then) │ │ (Thất bại .catch) │
   └───────────────────────┘ └───────────────────────┘
2. Định nghĩa Callback Hell & Ví dụ minh họa:
   Callback Hell: Là hiện tượng các hàm bất đồng bộ lồng nhau quá nhiều cấp theo dạng hình tam giác hoặc kim tự tháp lồi sang phải, khiến mã nguồn trở nên vô cùng rối rắm, cực kỳ khó đọc và không thể bảo trì.

JavaScript:
Minh họa 4 cấp Callback Hell (Code cũ gãy khúc)
getWeather("Hanoi", function(weather) {
getUsers(weather.id, function(user) {
getPhotos(user.id, function(photo) {
renderUI(photo, function() {
console.log("Hoàn thành chuỗi bất đồng bộ kinh hoàng!");
});
});
});
});

Refactor làm sạch bằng cú pháp Async/Await hiện đại (Đọc mượt mà từ trên xuống)
async function runCleanCode() {
try {
const weather = await getWeather("Hanoi");
const user = await getUsers(weather.id);
const photo = await getPhotos(user.id);
await renderUI(photo);
} catch (error) {
console.error("Xử lý lỗi tập trung tại đây:", error.message);
}
}
