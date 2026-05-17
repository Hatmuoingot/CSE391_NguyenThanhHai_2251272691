Câu A1:
Màn hình Mobile (< 768px) - 1 Cột/Hàng
┌────────────────────────────────────────────────────────┐
│ Box 1 (100% width) │
├────────────────────────────────────────────────────────┤
│ Box 2 (100% width) │
├────────────────────────────────────────────────────────┤
│ Box 3 (100% width) │
├────────────────────────────────────────────────────────┤
│ Box 4 (100% width) │
└────────────────────────────────────────────────────────┘

Màn hình TABLET (768px - 991px) - 2 Cột/Hàng
┌───────────────────────────┬────────────────────────────┐
│ Box 1 (50% width) │ Box 2 (50% width) │
├───────────────────────────┼────────────────────────────┤
│ Box 3 (50% width) │ Box 4 (50% width) │
└───────────────────────────┴────────────────────────────┘

Màn hình Desktop (≥ 992px) - 4 Cột/Hàng
┌───────────────┬───────────────┬───────────────┬───────────────┐
│ Box 1 (25%) │ Box 2 (25%) │ Box 3 (25%) │ Box 4 (25%) │
└───────────────┴───────────────┴───────────────┴───────────────┘

Bảng tổng hợp cấu trúc:
| Kích thước | < 768px | 768px - 991px | ≥ 992px |
|---|---|---|---|
| **Số cột trên 1 hàng** | 1 cột | 2 cột | 4 cột |
| **Box layout** | Xếp chồng dọc (Mỗi box chiếm 12/12 cột = 100%) | Chia đôi nằm ngang (Mỗi box chiếm 6/12 cột = 50%) | Dàn hàng ngang (Mỗi box chiếm 3/12 cột = 25%) |

Giải thích ý nghĩa col-md-6: Class này quy định phần tử sẽ chiếm 6 trên 12 cột (tương đương 50% chiều rộng của hàng chứa nó) khi màn hình có kích thước hiển thị từ breakpoint md trở lên (tức là từ 768px đến trước breakpoint tiếp theo là lg 992px).

Tại sao không cần viết col-sm-12? Vì Bootstrap hoạt động theo nguyên lý Mobile-First. Khi bạn đã khai báo col-12, thuộc tính này mặc định áp dụng từ kích thước màn hình nhỏ nhất (0px trở lên) cho đến khi gặp một breakpoint lớn hơn ghi đè nó (ở đây là col-md-6). Do đó, viết col-sm-12 là dư thừa.

Câu A2:

1. Giải thích class d-none d-md-block:
   Cơ chế ẩn/hiện: Phần tử mang class này sẽ bị ẩn hoàn toàn (display: none) trên các thiết bị di động có màn hình nhỏ dưới 768px.

Điểm kích hoạt: Ngay khi kích thước màn hình đạt từ mức md trở lên (≥ 768px), element sẽ xuất hiện trở lại với định dạng khối (display: block). Class này thường dùng để ẩn các khối nội dung rườm rà trên di động để tối ưu trải nghiệm người dùng.

2. Liệt kê và giải thích 5 Spacing Utilities phổ biến:
   mt-3: Thêm margin-top với giá trị là 1rem (tương đương 16px dựa trên base font 16px mặc định).

px-4: Thêm cả padding-left và padding-right với giá trị 1.5rem (24px) cùng một lúc.

mb-auto: Đặt margin-bottom: auto. Trong Flexbox context, utility này giúp đẩy các phần tử anh em nằm phía dưới xuống sát đáy container.

py-5: Thêm cả padding-top và padding-bottom ở mức cao nhất trong thang đo mặc định bằng 3rem (48px).

ms-2: Thêm margin-start (tương đương margin-left trong chế độ đọc từ trái sang phải) một khoảng 0.5rem (8px).

3. Sự khác nhau giữa .container, .container-fluid và .container-md:
   .container: Có chiều rộng giới hạn (max-width) thay đổi nhảy bậc theo từng responsive breakpoint và tự động căn giữa màn hình.

.container-fluid: Luôn luôn chiếm trọn vẹn 100% chiều rộng (width: 100%) của viewport ở mọi kích thước màn hình, không bị giới hạn bởi max-width.

.container-md: Hoạt động như một container co giãn hoàn toàn (fluid - 100%) khi ở màn hình nhỏ hơn 768px. Kể từ mốc ≥ 768px trở lên, nó lập tức chuyển trạng thái về thành container có max-width cố định.

Câu C1:

1. Quy trình đổi màu $primary sang mã đỏ #E63946 bằng SASS:
   Bước 1: Thiết lập môi trường npm: Tại thư mục gốc của project, chạy lệnh npm init -y để tạo file quản lý cấu trúc gói, sau đó chạy lệnh cài đặt mã nguồn lõi: npm install bootstrap sass.

Bước 2: Tổ chức file SASS tùy biến: Tạo một file cấu hình riêng, ví dụ src/custom.scss.

Bước 3: Viết mã ghi đè (Override): Khai báo biến ghi đè mã màu TRƯỚC khi gọi tệp tài nguyên chính của Bootstrap.
// src/custom.scss
@import "bootstrap/scss/functions"; // Import thư viện hàm hỗ trợ bắt buộc

    $primary: #E63946; // Override biến primary sang mã đỏ tùy chọn

    @import "bootstrap/scss/bootstrap"; // Tiến hành nạp toàn bộ mã nguồn lõi Bootstrap để biên dịch

Bước 4: Thực thi biên dịch thành file CSS: Thêm kịch bản biên dịch tự động vào trường scripts của package.json: "build": "sass src/custom.scss dist/style.css". Sau đó chạy lệnh npm run build trong Terminal để xuất ra tệp style.css cuối cùng và liên kết nó vào HTML thay cho link CDN mặc định.

2. Tại sao KHÔNG nên ép đè trực tiếp class CSS thuần?
   Xung đột cấu trúc liên đới sinh ra lỗi: Nếu bạn ép cứng mã màu bằng cách viết .btn-primary { background: red; }, bạn chỉ thay đổi được duy nhất trạng thái tĩnh của nút.

Mất tính đồng bộ hệ thống của Design Tokens: Bootstrap sử dụng biến tổng $primary để tính toán tự động thông qua các hàm SASS nhằm sinh ra hàng loạt trạng thái giao diện liên quan: màu khi người dùng hover, màu khi click giữ active, màu viền khi bao quanh focus-ring, hay sắc thái nhạt cho màu nền thông báo .alert-primary. Đè CSS thuần sẽ làm gãy chuỗi liên kết này, khiến giao diện sinh ra lỗi bất đồng bộ khi tương tác.

Câu C2:
Viết mã bằng CSS thuần (Pure CSS):

- Rất nhiều (150 - 300 dòng): Phải viết từ đầu các cấu trúc Flexbox, thuộc tính media queries phức tạp cho Responsive, căn chỉnh Grid, các hiệu ứng dịch chuyển trạng thái ẩn hiện.
- Chậm: Tốn thời gian đo đạc pixel, fix lỗi hiển thị chéo trình duyệt (Cross-browser layout issues) và bẫy co giãn màn hình.
- Tự do tuyệt đối: Hoàn toàn không bị bó buộc tư duy vào bất kỳ quy tắc hay khuôn mẫu hình khối định sẵn nào.
  Sử dụng thư viện Bootstrap 5:
- Gần như bằng 0: 100% layout được cấu trúc gọn gàng bằng các class tiện ích đúc sẵn trực tiếp trong mã HTML.
- Cực nhanh: Chỉ mất vài phút sắp xếp đúng phân cấp lớp Container → Row → Col là layout tự động khớp chuẩn.
- Bị giới hạn ban đầu: Nếu lạm dụng CDN mặc định, trang web dễ bị rập khuôn. Cần có kỹ năng xử lý SASS chuyên sâu để bẻ gãy giao diện mẫu.
  Đúc kết chiến lược sử dụng:

NÊN dùng Bootstrap khi: Dự án đang chạy đua với thời gian (Deadline gấp), cần làm nhanh các trang quản trị hệ thống (Dashboard Layout), các bản chạy thử MVP mẫu cho khách hàng duyệt, hoặc các ứng dụng có cấu trúc lưới chuẩn hóa quy mô lớn.

KHÔNG NÊN dùng Bootstrap khi: Dự án đòi hỏi tính sáng tạo nghệ thuật cao, giao diện mang tính độc bản thương hiệu siêu tùy biến (Creative Landing Page), hoặc khi bạn cần tối ưu hóa hiệu năng tải trang đến từng byte dung lượng mà không muốn gánh thêm bất kỳ đoạn mã thừa nào từ một bên thứ ba.
