Câu A1:
Thẻ Meta Viewport chuẩn:

<meta name="viewport" content="width=device-width, initial-scale=1.0">

width=device-width: Thiết lập chiều rộng của trang web bằng chiều rộng màn hình thiết bị.

initial-scale=1.0: Thiết lập tỷ lệ zoom ban đầu là 1:1.

Nếu thiếu thẻ này: iPhone sẽ hiển thị trang web theo chiều rộng desktop (thường là 980px) rồi tự động thu nhỏ toàn bộ trang lại, dẫn đến chữ và nút bấm siêu nhỏ, người dùng phải zoom bằng tay để đọc.

Mobile-First vs Desktop-First:

Mobile-First: Viết CSS cho mobile trước, sau đó dùng @media (min-width: 768px) để ghi đè cho màn hình lớn hơn. (Được khuyên dùng vì tối ưu cho mobile - thiết bị phổ biến nhất).

Desktop-First: Viết CSS cho desktop trước, dùng @media (max-width: 768px) để ghi đè cho màn hình nhỏ.

Câu A2:
Mobile (< 576px): 1 cột.

Tablet (≥ 768px): 2 cột.

Desktop (≥ 1024px): 4 cột.

Câu A3:
375px: 100% (100% width)

600px: 540px

800px: 720px

1000px: 960px

1400px: 1140px

Câu A4:
4 tính năng: 1. Biến ($color: #fff), 2. Nesting (lồng), 3. Mixins (@mixin tái sử dụng block code), 4. @extend (kế thừa).

Tại sao browser không đọc được: Trình duyệt chỉ hiểu CSS chuẩn. SCSS là ngôn ngữ mở rộng cần được Compile (biên dịch) thành file .css trước khi đưa lên trình duyệt.

Câu C1:
Mobile: Thanh menu chuyển thành Hamburger icon (dấu 3 gạch).

Desktop: Menu trải dài ngang.

Responsive: Grid chuyển từ 1 cột (Mobile) sang nhiều cột (Desktop). Các banner phụ thường bị ẩn đi trên mobile để tiết kiệm diện tích.

Câu C2:
Mobile: Logo trên, form đặt bàn dạng cột đơn, ảnh món ăn xếp dọc.

Desktop: Logo bên trái, menu ngang. Grid 3 cột cho món ăn. Bản đồ và Form đặt bàn chia đôi màn hình.

CSS Skeleton:

.container { display: grid; grid-template-columns: 1fr; }
@media (min-width: 768px) { .container { grid-template-columns: 1fr 1fr; } }
