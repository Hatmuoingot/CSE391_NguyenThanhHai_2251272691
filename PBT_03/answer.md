Câu A1:
Có 3 cách để nhúng CSS vào trang web:

1. Inline CSS (Viết trực tiếp vào thẻ HTML):

Ví dụ: <h1 style="color: blue;">Tiêu đề</h1>

Ưu điểm: Độ ưu tiên cao nhất, ghi đè được các rule khác nhanh chóng.

Nhược điểm: Không thể tái sử dụng, làm file HTML cồng kềnh, cực kỳ khó bảo trì (khó maintain).

Khi nào dùng: Chỉ dùng trong trường hợp khẩn cấp cần ghi đè (override) tạm thời.

2. Internal CSS (Viết trong thẻ <style> ở <head>):

Ví dụ: <style> h1 { color: blue; } </style>

Ưu điểm: Gom toàn bộ style vào chung một file HTML, tiện cho việc test nhanh.

Nhược điểm: Không thể chia sẻ style này cho các trang HTML khác.

Khi nào dùng: Thích hợp cho việc làm prototype nhanh hoặc trang web chỉ có 1 trang duy nhất (single-page).

3. External CSS (Viết ra file .css riêng):

Ví dụ: <link rel="stylesheet" href="styles.css">

Ưu điểm: Trình duyệt có thể lưu bộ nhớ đệm (cache) giúp tải trang nhanh hơn ở các lần sau, dễ bảo trì, tái sử dụng được cho nhiều trang (50 trang dùng 1 file CSS).

Nhược điểm: Mất thêm một request mạng ở lần tải đầu tiên.

Khi nào dùng: Là chuẩn bắt buộc cho mọi dự án thực tế (production).

Câu hỏi thêm: Nếu 1 element có cả 3 cách áp dụng đồng thời, Inline CSS sẽ thắng. Lý do là trong cơ chế Cascade (Thác nước), Inline style có độ ưu tiên (specificity) cao hơn hẳn so với Internal và External (Inline có điểm specificity là 1000).
Nguồn: 08_introduction_css.md, Phần 3.
Câu A2:
1. h1 → Chọn: <h1>ShopTLU</h1> (Type selector nhắm vào mọi thẻ h1).

2. .price → Chọn: <p class="price">25.990.000đ</p> và <p class="price">45.990.000đ</p> (Class selector nhắm vào mọi phần tử có class price).

3. #app header → Chọn: <header class="top-bar dark"> (Descendant selector nhắm vào header nằm bên trong id app).

4. nav a:first-child → Chọn: <a href="/" class="active">Home</a> (Pseudo-class chọn thẻ a đầu tiên trong nav).

5. .product.featured h2 → Chọn: <h2>MacBook Pro</h2> (Nhắm thẻ h2 nằm trong phần tử có ĐỒNG THỜI 2 class product và featured).

6. article > p → Chọn: TẤT CẢ 4 thẻ <p> nằm trực tiếp bên trong 2 thẻ <article> (gồm 2 thẻ giá tiền và 2 thẻ mô tả).

7. a[href="/"] → Chọn: <a href="/" class="active">Home</a> (Attribute selector nhắm chính xác thuộc tính href).

8. .top-bar.dark h1 → Chọn: <h1>ShopTLU</h1> (Thẻ h1 nằm trong phần tử có 2 class top-bar và dark).
Nguồn: 09_css_selectors.md, Phần 3.
Câu A3:
Dựa trên nguyên lý Box Model:

Trường hợp 1: content-box (mặc định)

+ Chiều rộng hiển thị (Rendered Width) = Width + Padding(trái+phải) + Border(trái+phải) = 400 + (20 * 2) + (5 * 2) = 450px.

+ Không gian chiếm trên trang (Kèm Margin) = 450 + (10 * 2) = 470px.

Trường hợp 2: border-box

+ Chiều rộng hiển thị = 400px (Kích thước được khóa cứng không bị phình ra).

+ Kích thước content thực tế = 400 - Padding(40) - Border(10) = 350px.

+ Không gian chiếm trên trang = 400 + Margin(20) = 420px.

Trường hợp 3: Margin collapse (Nuốt Margin)

+ Khoảng cách giữa box-a và box-b = 40px.

+ Giải thích: Theo nguyên lý Margin Collapse, margin dọc giữa 2 block element khi gặp nhau sẽ KHÔNG CỘNG DỒN mà gộp lại và lấy giá trị LỚN HƠN (40px > 25px).

+ Nâng cao: Nếu .box-a là -10px và .box-b là 40px, theo quy luật collapse giữa số âm và số dương, chúng sẽ cộng lại với nhau. Khoảng cách = 40 + (-10) = 30px.
Nguồn: 11_box_model.md, Phần 3.
Câu A4:
Cách tính điểm Specificity (ID - Class - Tag):

1. Tính Specificity score:

Rule A (p): 0 ID, 0 Class, 1 Tag → 0-0-1.

Rule B (.price): 0 ID, 1 Class, 0 Tag → 0-1-0.

Rule C (#main-price): 1 ID, 0 Class, 0 Tag → 1-0-0.

Rule D (p.price): 0 ID, 1 Class, 1 Tag → 0-1-1.

2. Element sẽ có màu gì?

Màu Đỏ (Red). Giải thích: Vì Rule C sử dụng ID selector có điểm số Specificity cao nhất (1-0-0) nên nó chiến thắng mọi rule khác.

3. Nếu thêm inline style style="color: orange;"?

Element sẽ có màu Cam (Orange). Vì inline style có điểm Specificity là 1000, cao hơn cả ID selector.

4. Nếu Rule A thêm !important?

Element sẽ có màu Đen (Black). Vì !important là cờ ưu tiên tối thượng (vô hạn điểm), nó phá vỡ mọi quy luật cascade thông thường và ghi đè tất cả các style khác, kể cả inline style hay ID.
Câu B1: 
Danh sách 5 loại Selector đã sử dụng trong file style.css
1. Universal Selector (`*`):** Dùng `*` để áp dụng `box-sizing: border-box` cho mọi phần tử.
2. Type Selector / Element Selector (`body`, `header`, `footer`, `table`...):** Dùng để thiết lập style cơ bản cho các thẻ HTML.
3. Class Selector (`.active`):** Dùng `nav a.active` để định dạng riêng cho nút điều hướng đang được chọn (màu vàng, có viền dưới).
4. ID Selector (`#about`, `#skills`, `#contact`):** Dùng để định dạng đổ bóng (box-shadow) và padding cho các vùng nội dung chính.
5. Pseudo-class Selector (`:hover`, `:nth-child`):** Dùng `nav a:hover` để tạo hiệu ứng khi di chuột, `tbody tr:nth-child(even)` để làm hiệu ứng ngựa vằn (zebra striping) cho bảng, và `tbody tr:hover` để đổi màu hàng khi hover.
6. Descendant Selector / Tổ hợp (`header nav`, `thead th`):** Nhắm mục tiêu cụ thể vào các phần tử con nằm trong phần tử cha để tránh ảnh hưởng đến các thẻ khác ngoài lề.
Câu B2:
Hộp 1 (content-box): chiều rộng thực tế = 350px (Width 300 + Padding 40 + Border 10).

Hộp 2 (border-box): chiều rộng thực tế = 300px.

Giải thích: content-box chỉ áp dụng width cho phần nội dung, trong khi border-box bao gồm cả nội dung, padding và border trong giới hạn width được khai báo.
Câu B3:
* { color: black; }                             /* 1. Spec: 0,0,0 */
p { color: gray; }                              /* 2. Spec: 0,0,1 */
.text { color: lightblue; }                     /* 3. Spec: 0,1,0 */
.highlight { color: blue; }                     /* 4. Spec: 0,1,0 (Thắng rule 3 do viết sau) */
p.text { color: green; }                        /* 5. Spec: 0,1,1 */
.text.highlight { color: orange; }              /* 6. Spec: 0,2,0 */
#demo { color: brown; }                         /* 7. Spec: 1,0,0 */
p#demo { color: red; }                          /* 8. Spec: 1,0,1 */
#demo.text { color: purple; }                   /* 9. Spec: 1,1,0 */
#demo.text.highlight { color: darkmagenta; }    /* 10. Spec: 1,2,0 */

Element cuối cùng sẽ hiển thị màu Dark Magenta. Lý do: Rule #demo.text.highlight sở hữu độ ưu tiên cao nhất với điểm số Specificity là 1-2-0 (1 ID, 2 Classes, 0 Tags).

Nếu thay đổi thứ tự các rules trong CSS file, kết quả không thay đổi (trừ rule 3 và 4 vì cùng điểm). Quy tắc Cascade xử lý Specificity độc lập với thứ tự đọc tệp; thứ tự từ trên xuống dưới chỉ đóng vai trò phân định khi hai rules có điểm Specificity bằng nhau.
Câu C1:
1. Tính chiều rộng thực tế (content-box):

Sidebar: width (300px) + padding trái/phải (20px * 2) + border trái/phải (1px * 2) = 342px.

Content: width (660px) + padding trái/phải (30px * 2) + border trái/phải (1px * 2) = 722px.

2. Tổng chiều rộng thực tế của hai cột là 342px + 722px = 1064px. Con số này vượt quá kích thước của .container cha (chỉ có 960px). Do không đủ chỗ chứa trên cùng một dòng, cột thứ hai (.content) bị đẩy (wrap) xuống dòng bên dưới.

3. 2 cách sửa:

Cách 1 (Khuyên dùng - Dùng border-box): Thêm thuộc tính box-sizing: border-box; cho cả .sidebar và .content. Khi đó, padding và border sẽ bị co vào bên trong, ép tổng chiều rộng hai cột trở về đúng thông số khai báo ban đầu là 300px + 660px = 960px, vừa khít container.

Cách 2 (Không dùng border-box - Trừ hao thủ công): Ta phải tự tính toán trừ đi phần đệm và viền vào thuộc tính width. Ta sửa width của .sidebar thành 258px (300 - 40 - 2) và width của .content thành 598px (660 - 60 - 2).
Câu C2:
1. "Sản phẩm A" (h2) có font-size = ? và color = ?

font-size = 20px (Nhờ rule .card .title nhắm mục tiêu trực tiếp vào nó, ghi đè font-size kế thừa từ .container).

color = green (Mặc dù ID selector #featured .title { color: red } có điểm specificity rất cao (100), nhưng thẻ này lại mang class .highlight chứa cờ !important. Cờ này có quyền ưu tiên tuyệt đối, vô hiệu hóa mọi luật khác).

2. "Mô tả sản phẩm" (p trong card featured) có color = ?

color = blue.

Giải thích: Phần tử này được nhắm mục tiêu bởi rule .card p { color: inherit; }, yêu cầu nó kế thừa trực tiếp màu từ thẻ cha gần nhất (<div class="card" id="featured">). Phần tử cha này không bị tác động bởi luật #featured .title, mà nhận màu từ rule .card { color: blue; }. Do đó, <p> thừa hưởng màu xanh lam (blue).

3. "Sản phẩm B" (h2) có font-size = ? và color = ?

font-size = 20px (Áp dụng từ rule .card .title).

color = blue (Các thuộc tính liên quan đến văn bản (text properties) mặc định sẽ được truyền xuống phần tử con. Thẻ h2 nằm trong .card nên nó kế thừa color: blue từ cha).

4. "Mô tả sản phẩm B" (p.highlight) có color = ?

color = green.

Giải thích: Thẻ <p> này có class .highlight. Quy tắc .highlight { color: green !important; } với cờ !important sẽ chiến thắng quy tắc .card p { color: inherit; } (mặc dù .card p có điểm specificity là 11, cao hơn 10 của .highlight, nhưng !important phá vỡ luật điểm số).