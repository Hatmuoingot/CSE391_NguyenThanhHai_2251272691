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

Câu C1:
Network errors (Mất mạng đột ngột giữa chừng)
Chiến lược: Khi người dùng đang lướt ứng dụng mà bị rớt mạng, fetch sẽ lập tức bị hủy và ném về một Promise trạng thái rejected. Ta sẽ dùng sự kiện toàn cục window.addEventListener("offline") để hiển thị một thanh thông báo (Banner) màu đỏ chạy dọc ứng dụng báo: "Mất kết nối Internet". Đồng thời, đóng băng các nút bấm "Thanh toán" để tránh user gửi trùng request lỗi, và lưu tạm data giỏ hàng vào localStorage.

Mã nguồn minh họa:

window.addEventListener("offline", () => {
alert("🚨 Hệ thống: Mất kết nối mạng Internet! Vui lòng kiểm tra lại thiết bị Wi-Fi/4G.");
document.querySelector("#submitOrderBtn").disabled = true; // Khóa nút đặt hàng
});

window.addEventListener("online", () => {
alert("🟢 Đã khôi phục kết nối mạng. Bạn có thể tiếp tục mua sắm.");
document.querySelector("#submitOrderBtn").disabled = false; // Mở khóa lại nút
}); 2. API errors (Xử lý các mã lỗi trạng thái của Server)
Khi server nhận được lệnh nhưng trả về mã trạng thái thất bại, ta check qua response.status để phân tầng xử lý:

Lỗi 500 (Internal Server Error): Server bị lỗi logic nội bộ. Biện pháp: Hiện thông báo xin lỗi chung chung: "Hệ thống đang bảo trì, vui lòng quay lại sau ít phút".

Lỗi 404 (Not Found): Không tìm thấy sản phẩm/đường dẫn. Biện pháp: Điều hướng user về trang danh mục sản phẩm chính, không để hiển thị trang trống.

Lỗi 429 (Too Many Requests): User hoặc bot đang spam bấm nút quá nhanh làm nghẽn server. Biện pháp: Kích hoạt lệnh khóa nút bấm trong vòng 30 giây (Rate limiting UI) kèm đếm ngược thời gian bắt user chờ.

Mã nguồn minh họa:

async function handleResponse(response) {
if (response.ok) return response.json();

    switch (response.status) {
        case 404:
            alert("⚠️ Sản phẩm này đã ngừng kinh doanh hoặc không tồn tại!");
            break;
        case 429:
            alert("⚠️ Bạn đang thao tác quá nhanh! Vui lòng đợi 30 giây trước khi thử lại.");
            break;
        case 500:
            alert("⚙️ Hệ thống máy chủ đang quá tải. Lỗi 500. Vui lòng thử lại sau.");
            break;
        default:
            alert(`Lỗi hệ thống không rõ: HTTP ${response.status}`);
    }
    throw new Error(`API Error Status: ${response.status}`);

} 3. Timeout (API phản hồi quá chậm > 10 giây)
Sử dụng AbortController để ngắt kết nối bắt buộc, chặn tình trạng ứng dụng xoay spinner loading vô hạn làm ức chế người dùng.

async function fetchWithTimeout(url, ms = 10000) { // Đề bài yêu cầu mốc 10 giây (10000ms)
const controller = new AbortController();
const timerId = setTimeout(() => controller.abort(), ms); // Hủy kết nối nếu quá 10s

    try {
        const response = await fetch(url, { signal: controller.signal });
        clearTimeout(timerId); // Dọn dẹp bộ đếm thời gian nếu dữ liệu về kịp lúc
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return await response.json();
    } catch (error) {
        clearTimeout(timerId);
        if (error.name === 'AbortError') {
            throw new Error("⚠️ Lỗi: Quá thời gian phản hồi quy định của hệ thống (> 10 giây)!");
        }
        throw error;
    }

} 4. Retry logic (Tự động thử lại 3 lần nếu lỗi Network)
Sử dụng vòng lặp để tự động kích hoạt gửi lại request, tăng độ ổn định của ứng dụng lên tối đa.

async function fetchWithRetry(url, maxRetries = 3) { // Yêu cầu thử lại tối đa 3 lần
for (let attempt = 1; attempt <= maxRetries; attempt++) {
try {
const response = await fetch(url);
if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
return await response.json(); // Kết nối thành công, trả về dữ liệu
} catch (error) {
if (attempt === maxRetries) {
throw new Error(`⚠️ Thất bại: Đã tự động kết nối lại ${maxRetries} lần nhưng bất thành!`);
}
console.warn(`Kết nối lần ${attempt} lỗi. Đang tự động thử lại sau 1 giây...`);
// Chờ 1 giây (1000ms) rồi mới nhảy sang vòng lặp tiếp theo
await new Promise(resolve => setTimeout(resolve, 1000));
}
}
}

Câu C2:

1. Phương thức Promise.all()
   Khi nào Resolve (Thành công)? Phương thức này chỉ giải quyết thành công khi TẤT CẢ các Promise con nằm trong mảng truyền vào đều đồng loạt hoàn thành và trả về dữ liệu.

Khi nào Reject (Thất bại)? Phương thức sẽ lập tức rơi vào trạng thái thất bại ngay khi có Ý NHẤT 1 tác vụ con trong mảng phát sinh lỗi (Cơ chế mì ăn liền - Fail-fast mechanism). Toàn bộ các kết quả của các Promise thành công khác đều bị hủy bỏ ngầm.

Tình huống ứng dụng thực tế (Use case): Sử dụng khi các luồng dữ liệu bất đồng bộ có tính chất ràng buộc, bắt buộc phải có đầy đủ cùng nhau thì mới xử lý tiếp được.

Ví dụ cụ thể: Khi người dùng nhấn nút "Thanh toán đơn hàng" (Checkout) trên trang E-Commerce, hệ thống bắt buộc phải nạp đồng thời thông tin giỏ hàng (fetch/cart) và thông tin ví điện tử của user (fetch/wallet). Nếu một trong hai nguồn dữ liệu này bị lỗi mạng, phiên giao dịch lập tức bị hủy bỏ toàn bộ để bảo đảm tính an toàn tài chính.

2. Phương thức Promise.allSettled()
   Khi nào Resolve (Thành công)? Phương thức giải quyết thành công khi TẤT CẢ các Promise con đều đã chạy xong và có kết cục rõ ràng. Kết quả trả về là một mảng các đối tượng chứa trạng thái cụ thể của từng tác vụ (fulfilled hoặc rejected).

Khi nào Reject (Thất bại)? Phương thức này KHÔNG BAO GIỜ bị rơi vào trạng thái Reject toàn cục.

Tình huống ứng dụng thực tế (Use case): Sử dụng khi xây dựng hệ thống Dashboard tổng hợp nhiều nguồn thông tin độc lập (Widgets Layout).

Ví dụ cụ thể: Trên trang quản trị, bạn có 3 ô hiển thị: Ô 1 hiện Tin tức (fetch/news), Ô 2 hiện Thời tiết (fetch/weather), Ô 3 hiện Giá vàng (fetch/gold). Nếu API thời tiết bị sập và trả về lỗi 404, Promise.allSettled() giúp ô tin tức và giá vàng vẫn nạp dữ liệu và hiển thị mượt mà cho user, ô thời tiết chỉ cần tự cô lập hiện thông báo lỗi cục bộ là xong.

3. Phương thức Promise.race()
   Khi nào Resolve (Thành công)? Giải quyết thành công khi có 1 tác vụ con bất kỳ về đích đầu tiên với trạng thái thành công (Resolve).

Khi nào Reject (Thất bại)? Rơi vào thất bại ngay lập tức nếu tác vụ con về đích đầu tiên đó bị dính lỗi (Reject).

Tình huống ứng dụng thực tế (Use case): Sử dụng khi cần đo đạc, kiểm tra hiệu năng tốc độ hoặc thiết lập mốc giới hạn thời gian phản hồi cứng cho một tác vụ.

Ví dụ cụ thể: Bạn muốn đo tốc độ phản hồi mạng của các cụm máy chủ khu vực (Server Singapore vs Server Hongkong). Bạn đẩy hai lệnh gọi mạng vào Promise.race(). Máy chủ nào có đường truyền tối ưu hơn, nạp xong trước thì ta lập tức lấy luôn cổng kết nối đó để phục vụ người dùng, bỏ qua máy chủ chậm chân còn lại.

4. Phương thức Promise.any()
   Khi nào Resolve (Thành công)? Giải quyết thành công ngay khi có 1 tác vụ con đầu tiên về đích thành công. Nếu các tác vụ khác về trước mà bị lỗi (Reject), phương thức sẽ tự động bỏ qua để kiên nhẫn đợi tác vụ thành công.

Khi nào Reject (Thất bại)? Chỉ rơi vào trạng thái thất bại khi và chỉ khi TẤT CẢ các Promise con nằm trong mảng đều đồng loạt bị lỗi sập.

Tình huống ứng dụng thực tế (Use case): Sử dụng khi gọi tải tài nguyên từ các nguồn máy chủ dự phòng hoặc các trạm CDN khác nhau nhằm tối đa hóa độ sống sót của ứng dụng.

Ví dụ cụ thể: Khi ứng dụng cần tải file cấu hình hệ thống, bạn gửi lệnh nạp tới cả Trạm CDN chính và 2 Trạm CDN dự phòng. Nếu Trạm chính dính lỗi 500, hệ thống không hề sập mà tự động lấy tệp tin từ Trạm dự phòng 2 vừa về đích thành công để duy trì ứng dụng chạy trơn tru.
