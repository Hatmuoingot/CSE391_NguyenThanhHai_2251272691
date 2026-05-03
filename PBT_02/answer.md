 Câu A1:
 type="text" → Ô nhập chữ thập phân/văn bản thường, không tự validate. Dùng cho nhập Họ tên.

type="email" → Ô nhập chữ, tự động kiểm tra xem có chứa ký tự @ không. Dùng cho nhập Email đăng nhập/đăng ký.

type="password" → Ô nhập chữ nhưng tự động ẩn ký tự (hiện dấu sao/chấm tròn). Dùng cho nhập mật khẩu.

type="number" → Ô nhập số có nút tăng/giảm (spinbox). Dùng để chọn Số lượng sản phẩm.

type="tel" → Gọi bàn phím số (numpad) trên mobile, không tự validate định dạng. Dùng để nhập Số điện thoại giao hàng.

type="date" → Mở popup chọn ngày (Date picker). Dùng để chọn Ngày sinh hoặc Ngày giao hàng.

type="radio" → Nút chọn hình tròn, cho phép chọn duy nhất 1 lựa chọn trong 1 nhóm. Dùng để chọn Phương thức thanh toán (COD, Chuyển khoản).

type="checkbox" → Nút chọn hình vuông, cho phép chọn nhiều lựa chọn. Dùng cho mục "Lưu địa chỉ" hoặc "Đồng ý điều khoản".

type="search" → Ô nhập text có thêm nút "X" để xóa nhanh nội dung tìm kiếm. Dùng cho thanh tìm kiếm sản phẩm.

type="hidden" → Hoàn toàn ẩn khỏi giao diện người dùng. Dùng để gửi kèm thông tin ngầm định lên server.
Câu
Nguồn: 07_forms_interactive.md, phần 3.
Câu A2:
Trường hợp 1: Form sẽ dừng submit và hiện thông báo lỗi yêu cầu người dùng không được bỏ trống trường này. (Vì có thuộc tính required).

Trường hợp 2: Form sẽ dừng submit và hiện thông báo lỗi yêu cầu nhập đúng định dạng email (phải có ký tự @). (Vì là type="email").

Trường hợp 3: Form sẽ dừng submit và báo lỗi giá trị phải nhỏ hơn hoặc bằng 10. (Vì có giới hạn max="10" nhưng user lại nhập 15).

Trường hợp 4: Form sẽ dừng submit và yêu cầu nhập đúng định dạng. (Vì thuộc tính pattern="[0-9]{10}" chỉ chấp nhận đúng 10 chữ số từ 0-9, nhưng user lại nhập chữ "abc").

Trường hợp 5: Form sẽ dừng submit và báo lỗi số lượng ký tự tối thiểu là 8. (Vì có thuộc tính minlength="8" nhưng user mới nhập 3 ký tự).
Nguồn: 07_forms_interactive.md, phần 3 và 4.
Câu A3:
<label for="email"> rất quan trọng vì nó kết nối trực tiếp dòng text mô tả với ô input tương ứng. Khi Screen Reader đọc đến input, nó sẽ đọc nội dung của label để người khiếm thị biết họ cần nhập gì. Ngoài ra, việc click vào label sẽ tự động kích hoạt (focus) ô input, tăng trải nghiệm UX.

<fieldset> được dùng để nhóm một tập hợp các form control có liên quan mật thiết với nhau (như một nhóm radio buttons hoặc thông tin địa chỉ). <legend> đóng vai trò là tiêu đề của nhóm đó. Ví dụ: Dùng fieldset nhóm các radio button chọn "Phương thức vận chuyển", legend sẽ là "Chọn hình thức giao hàng".

aria-label là thuộc tính ẩn cung cấp nhãn cho các element không có text đi kèm (ví dụ: nút bấm chỉ có icon 🔍 tìm kiếm). KHÔNG nên dùng nó khi đã có thẻ <label> hợp lệ vì nó sẽ dẫn đến việc lặp lại thông tin dư thừa cho Screen Reader, hoặc làm loạn cấu trúc ngữ nghĩa chuẩn của HTML.
Nguồn: 07_forms_interactive.md, phần 8 và 9.
Câu A4:
Thuộc tính loading="lazy" chỉ đạo trình duyệt hoãn việc tải ảnh cho đến khi người dùng cuộn chuột gần tới vị trí của ảnh đó. Nó giúp trang web tải nhanh hơn và tiết kiệm băng thông ban đầu. KHÔNG NÊN dùng cho những hình ảnh nằm ở khu vực trên cùng (Above the fold/Hero image) vì chúng cần xuất hiện ngay lập tức.

Cung cấp nhiều thẻ <source> giúp đảm bảo video có thể phát trên mọi trình duyệt, vì không phải trình duyệt nào cũng hỗ trợ chung một định dạng giải mã (codec). Trình duyệt sẽ chọn định dạng tương thích đầu tiên. 3 định dạng phổ biến: WebM, MP4, và Ogg.

Thuộc tính alt dùng để mô tả nội dung bức ảnh, hiển thị khi ảnh bị lỗi đường dẫn và giúp Screen Reader đọc cho người khiếm thị.

Ảnh iPhone: alt="Điện thoại iPhone 16 màu trắng đặt trên bàn"

Ảnh trang trí: alt="" (chuỗi rỗng, báo cho Screen Reader bỏ qua)

Ảnh biểu đồ: alt="Biểu đồ hình tròn thể hiện doanh thu Quý 1 năm 2026, trong đó mảng di động chiếm 60%"
Nguồn: 06_graphics_multimedia.md, phần 3 và 7.
Câu A5:
Cách 1 (<img>): Dùng khi hình ảnh chỉ là một phần tử trực quan, mang tính bổ sung hình thức mà không cần một lời giải thích (caption) cụ thể gắn liền.

Ví dụ 1: Ảnh logo công ty ở góc trang.

Ví dụ 2: Một icon cảnh báo nhỏ bên cạnh thông báo lỗi.

Cách 2 (<figure>): Dùng khi hình ảnh là một đối tượng nội dung độc lập, đóng vai trò như một tư liệu cần có chú thích (<figcaption>) giải nghĩa đi kèm để người đọc hiểu trọn vẹn ngữ cảnh.

Ví dụ 1: Bức ảnh mô phỏng quá trình lắp ráp đi kèm hướng dẫn chi tiết bên dưới.

Ví dụ 2: Một tấm ảnh báo chí có ghi rõ tác giả và nguồn gốc bức ảnh bên dưới.
Nguồn: 04_visible_part_html.md, phần 3 và 8.
