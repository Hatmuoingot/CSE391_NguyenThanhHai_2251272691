Câu A1:
1. 5 bước xảy ra: 
B1: Browser của máy Client sẽ gửi HTTP Request cho Server của Shopee.
B2: Server của Shopee sẽ tìm html và gửi lại.
B3: Máy Client sẽ nhận được gói tin HTTP Response từ Server của Shopee.
B4: Browser sẽ Parse HTML -> Fetch CSS/JS
B5: Browser render nốt giao diện Layout -> Paint -> Composite.
Nguồn: 01_introduction_html_universe.md, Phần 2,3.
Câu A2:
- Tại sao bị Google đánh giá thấp:
Vì trang web đang bị hội chứng "Div Soup" (lạm dụng thẻ div). Thẻ <div> không mang ý nghĩa ngữ nghĩa. Google Bot và trình đọc màn hình (Screen Reader) không thể phân biệt được đâu là menu, đâu là nội dung chính, làm giảm điểm SEO và Accessibility.
Nguồn: 04_visible_part_html.md, Phần 3.
- Lỗi Semantic: 
<div class="header"> ➔ Sửa thành <header>

<div class="menu"> ➔ Sửa thành <nav>

<div class="main"> ➔ Sửa thành <main>

<div class="product"> ➔ Sửa thành <article> (hoặc <section>)

<div class="footer"> ➔ Sửa thành <footer>
Câu A3: 
Kết quả hiển thị:
Hộp 1
Text A Text B
Hộp 2
Text C Text D
Hộp 3
Giải thích: <div> là phần tử dạng khối (Block) nên luôn nằm ở một dòng riêng biệt. <span> và <strong> là dạng nội tuyến (Inline) nên chúng sẽ nằm nối tiếp nhau trên cùng một dòng.
Nguồn: 04_visible_part_html.md, Phần 3.
Câu A4:
- Sự khác nhau (05_tables_hyperlinks.md, mục 3):
<thead>: Phần tiêu đề của bảng (các cột). Trình duyệt thường tự in đậm.

<tbody>: Phần chứa dữ liệu chính của bảng.

<tfoot>: Phần tổng kết, tính tổng ở cuối bảng.
- Tại sao KHÔNG NÊN dùng table để layout (05_tables_hyperlinks.md, mục 7):
+ Đây là Anti-pattern (lỗi thời) từ thời HTML4. Mã nguồn sẽ trở nên vô cùng cồng kềnh (bloated).
+ Rất khó để làm Responsive (hiển thị tốt trên mobile).
+ Phá hỏng Accessibility vì Screen Reader sẽ đọc nội dung trang web như một bảng dữ liệu thay vì một luồng bài viết logic.
Câu C1:
<header> <nav> </nav>
</header>
<nav aria-label="breadcrumb"> </nav>
<main> <article> <section> </section>
        <section> </section>

        <section> <table> </table>
        </section>

        <section> </section>

    </article>

    <aside> </aside>
</main>
<footer> </footer>
Câu C2:
Quan điểm "chỉ dùng thẻ <div> và thêm class" tuy tiện lợi ban đầu nhưng lại tạo ra "Div Soup" — một anti-pattern gây tổn hại nghiêm trọng đến chất lượng web. Dù giao diện hiển thị có thể giống nhau, nhưng cấu trúc ngầm của trang sẽ bị ảnh hưởng nặng nề bởi hai lý do kỹ thuật cốt lõi: SEO và Accessibility.
Thứ nhất, về mặt SEO, các bot của Google đọc mã nguồn để hiểu trang web. Khi sử dụng các thẻ Semantic như <article> hay <main>, bạn đang giúp Google dễ dàng nhận biết đâu là nội dung trọng tâm để lập chỉ mục. Nếu chỉ dùng một rừng <div>, Google sẽ không thể phân biệt được đâu là bài viết chính, đâu là phần phụ, dẫn đến việc đánh giá thấp thứ hạng trang web.
Thứ hai, về Accessibility (Khả năng tiếp cận), Semantic HTML đóng vai trò là "đôi mắt" của những người khiếm thị sử dụng Screen Reader (trình đọc màn hình). Ví dụ cụ thể: khi bạn dùng thẻ <nav>, Screen Reader sẽ ngay lập tức thông báo đây là khu vực điều hướng, cho phép người dùng nhảy nhanh đến các liên kết. Ngược lại, nếu dùng <div class="menu">, máy đọc sẽ chỉ lướt qua đó như một khối văn bản vô nghĩa, làm mất đi khả năng định vị của họ.
Tuy nhiên, điều này không có nghĩa là thẻ <div> vô dụng. Nó vẫn là lựa chọn hoàn hảo trong trường hợp bạn chỉ cần một "chiếc hộp" rỗng không mang ý nghĩa ngữ nghĩa cốt để gom nhóm các phần tử, phục vụ thuần túy cho mục đích dàn trang (như làm container cho CSS Flexbox hay Grid). Tóm lại, hãy dùng thẻ Semantic để mô tả ý nghĩa, và để dành thẻ <div> cho việc trang trí layout.
Câu B3:
Lỗi 1 (Dòng 1): Khai báo thiếu chữ html. Sửa thành <!DOCTYPE html>.

Lỗi 2 (Dòng 4): Thẻ <title> mở nhưng không có thẻ đóng </title>.

Lỗi 3 (Dòng 8): Thẻ <h1> đóng sai cú pháp. Sửa <h1> ở cuối thành </h1>.

Lỗi 4 (Dòng 12): Thẻ <a> thứ nhất đóng sai. Sửa <a> ở cuối thành </a>.

Lỗi 5 (Dòng 19): Thẻ <img> thiếu dấu ngoặc kép ở đường dẫn và thiếu thuộc tính bắt buộc alt. Sửa thành <img src="iphone.jpg" alt="iPhone 16 Pro">.

Lỗi 6 (Dòng 21): Thẻ <b> và <p> đóng mở chéo nhau (lỗi lồng thẻ). Sửa thành <b>25.990.000đ</b></p>.

Lỗi 7 (Dòng 28 & 29): Đây là hàng tiêu đề của bảng nhưng lại dùng thẻ <td> (dữ liệu). Sửa <td>Tên</td> thành <th>Tên</th> (tương tự cho Giá).

Lỗi 8 (Dòng 26): Bảng <table> hoàn toàn vắng mặt các thẻ phân vùng ngữ nghĩa bắt buộc như <thead> và <tbody>.

Lỗi 9 (Dòng 38): Sử dụng đến hai thẻ <main> trong một trang web (Dòng 17 và Dòng 38). Luật Semantic quy định mỗi trang chỉ được có duy nhất một <main>. Sửa thẻ <main> thứ hai thành <aside>.

Lỗi 10 (Dòng 43): Thẻ <p> trong footer mở nhưng không có thẻ đóng </p>.
Bài B4:
