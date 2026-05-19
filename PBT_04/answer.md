Câu A1 — Grid System

| Kích thước             | < 768px                                        | 768px - 991px                                     | ≥ 992px                                       |
| ---------------------- | ---------------------------------------------- | ------------------------------------------------- | --------------------------------------------- |
| **Số cột trên 1 hàng** | 1 cột                                          | 2 cột                                             | 4 cột                                         |
| **Box layout**         | Xếp chồng dọc (Mỗi box chiếm 12/12 cột = 100%) | Chia đôi nằm ngang (Mỗi box chiếm 6/12 cột = 50%) | Dàn hàng ngang (Mỗi box chiếm 3/12 cột = 25%) |

- Giải thích ý nghĩa `col-md-6`:\*\* Class này quy định phần tử sẽ chiếm 6 trên 12 cột (tương đương 50% chiều rộng của hàng chứa nó) khi màn hình có kích thước hiển thị từ breakpoint `md` trở lên (tức là từ 768px đến trước mốc `lg` 992px).

- Tại sao không cần viết `col-sm-12`?\*\* Vì Bootstrap hoạt động theo nguyên lý Mobile-First. Khi đã khai báo `col-12`, thuộc tính này mặc định áp dụng từ kích thước màn hình nhỏ nhất trở lên cho đến khi gặp một breakpoint lớn hơn ghi đè nó (ở đây là `col-md-6`). Do đó, viết `col-sm-12` là dư thừa.

Câu A2:

- Trường hợp 1:
  .container { display: flex; }
  .item { flex: 1; } /_ 4 items _/
  -> Dự đoán: 4 items nằm trên 1 hàng duy nhất. Do gán flex: 1, cả 4 items tự động co giãn và chia đều độ rộng bằng nhau (Mỗi item chiếm chính xác 25% độ rộng của container).

  Sơ đồ bố cục:  
   ─────────────────────────────────────────────
  │ Box 1 │ Box 2 │ Box 3 │ Box 4 │
  ─────────────────────────────────────────────

- Trường hợp 2: Flexbox bẻ hàng có tính toán độ rộng
  .container { display: flex; flex-wrap: wrap; }
  .item { width: 45%; margin: 2.5%; } /_ 6 items _/
  Dự đoán: Cấu trúc gồm 3 hàng, mỗi hàng chứa 2 items. Do tổng độ rộng của 2 items kèm margin là (45% x 2) + (2.5% x 4) = 90% + 10% = 100%, item thứ 3 buộc phải ngắt dòng xuống hàng kế tiếp nhờ lệnh flex-wrap: wrap.
  Sơ đồ bố cục:
  ─────────────────────────────────────────────
  │ Box 1 (45%) │ Box 2 (45%) │
  ─────────────────────────────────────────────
  │ Box 3 (45%) │ Box 4 (45%) │
  ─────────────────────────────────────────────
  │ Box 5 (45%) │ Box 6 (45%) │
  ─────────────────────────────────────────────
- Trường hợp 3: Flexbox phân bố khoảng cách hai đầu và căn dọc
  .container { display: flex; justify-content: space-between; align-items: center; } /_ 3 items _/
  Dự đoán: 3 items nằm trên 1 hàng. Item 1 dính sát lề trái, Item 3 dính sát lề phải, Item 2 nằm chính giữa hàng. Cả 3 items đều được căn chỉnh nằm ở trung tâm theo trục dọc (chiều cao) của container.
  Sơ đồ bố cục:
  ─────────────────────────────────────────────
  │ Box 1 │ Box 2 │ Box 3 │
  ─────────────────────────────────────────────
- Trường hợp 4: Grid Layout chia cột cố định kết hợp co giãn
  .container { display: grid; grid-template-columns: 200px 1fr 200px; gap: 20px; } /_ 3 items _/
  Dự đoán: 3 items nằm trên 1 hàng với 3 cột biệt lập. Cột trái (Item 1) cố định rộng 200px, cột phải (Item 3) cố định rộng 200px. Cột giữa (Item 2) mang giá trị 1fr sẽ tự động chiếm trọn toàn bộ phần không gian còn lại ở giữa sau khi đã trừ đi 400px và 40px khoảng cách khoảng trống (gap).
  Sơ đồ bố cục:
  ┌───────────────────────────────────────────────────────────┐
  │ ┌──────────────┐ ┌─────────────────────────┐ ┌──────────────┐ │
  │ │Item 1 (200px)│ │ Item 2 (1fr) │ │Item 3 (200px)│ │
  │ └──────────────┘ └─────────────────────────┘ └──────────────┘ │
  └───────────────────────────────────────────────────────────┘
- Trường hợp 5: Grid layout chia 3 cột đều nhau, tự bẻ hàng
  .container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; } /_ 7 items _/
  Dự đoán: Bố cục gồm 3 hàng. Hàng 1 (Item 1, 2, 3) và Hàng 2 (Item 4, 5, 6) lấp đầy đủ 3 cột. Hàng 3 chỉ có duy nhất Item 7 nằm ở góc trái dưới cùng (thuộc cột số 1), bỏ trống 2 ô lưới phía sau của hàng đó.
  Sơ đồ bố cục:
  ┌───────────────────────────────────────────────────────────┐
  │ ┌───────────┐ ┌───────────┐ ┌───────────┐ │
  │ │ Item 1 │ │ Item 2 │ │ Item 3 │ │
  │ └───────────┘ └───────────┘ └───────────┘ │
  │ ┌───────────┐ ┌───────────┐ ┌───────────┐ │
  │ │ Item 4 │ │ Item 5 │ │ Item 6 │ │
  │ └───────────┘ └───────────┘ └───────────┘ │
  │ ┌───────────┐ │
  │ │ Item 7 │ (Ô trống) (Ô trống) │
  │ └───────────┘ │
  └───────────────────────────────────────────────────────────┘

Câu C1:

1. Navigation bar ngang: Dùng Flexbox. Vì đây là dạng layout định hướng 1 chiều dòng dữ liệu nằm ngang, cấu trúc Flexbox hỗ trợ căn chỉnh hoàn hảo các khối con nằm giữa trục dọc bằng align-items: center và phân phối khoảng cách giãn cách hai đầu cực nhanh thông qua thuộc tính justify-content.

2. Lưới ảnh Instagram: Dùng Grid. Bản chất lưới ảnh Instagram là layout phân cấp cả 2 chiều (2D - hàng và cột đều cố định). Dùng grid-template-columns: repeat(3, 1fr) sẽ đảm bảo các ô luôn có độ rộng bằng nhau tuyệt đối, và khi số ảnh tăng lên không giới hạn, các ô tự động wrap xuống dòng dưới theo cấu trúc ô lưới hoàn chỉnh.

3. Layout blog (main content + sidebar): Dùng Grid. Bố cục trang web lớn dạng cột bất đối xứng như này thích hợp xử lý bằng Grid. Thiết lập tường minh grid-template-columns: 1fr 300px (hoặc tỷ lệ tương đương) giúp kiểm soát phân chia chính xác vùng không gian lớn của trang.

4. Footer với 4 cột thông tin: Dùng Flexbox (với flex: 1 hoặc phần trăm rộng cố định) hoặc Grid (với repeat(4, 1fr)). Tuy nhiên, Grid tối ưu và gọn mã hơn vì chỉ cần định nghĩa duy nhất 1 dòng khai báo ở thẻ cha container là có ngay 4 cột đều nhau tăm tắp, không cần gán thủ công CSS width lên từng thẻ con.

5. Card sản phẩm (ảnh trên, text giữa, nút dưới dính đáy): Dùng Flexbox hướng dọc (flex-direction: column). Việc ép khối con chuyển hướng dòng dọc biến card thành một layout 1 chiều. Lúc này thuộc tính margin-top: auto gán trên nút "Mua" sẽ kích hoạt cơ chế chiếm dụng không gian trống phía trên để đẩy chiếc nút xuống bám sát vào đáy của thẻ Card.

Câu C2:

- Lỗi 1: Cards không đều chiều cao — nút "Mua" bị nhảy tự do
  Nguyên nhân: Khối bao ngoài .card chưa được kích hoạt thuộc tính hiển thị Flexbox, do đó chiều cao của các card dù bằng nhau (theo cơ chế kéo dãn mặc định của flex container cha .card-container), nhưng phần khối ruột .card-body bên trong lại co giãn tự do theo độ dài ngắn của tiêu đề chữ. Nút bấm không có cơ chế neo đáy.
  Sửa lỗi:
  /_ Kích hoạt hướng dòng dọc bên trong bản thân mỗi Card sản phẩm _/
  .card {
  width: 30%;
  margin: 1.5%;
  display: flex;
  flex-direction: column; /_ Biến ruột card thành flex hướng dọc _/
  }
  /_ Thêm class hoặc bổ trợ bao quanh phần nội dung thông tin _/
  .card-body {
  display: flex;
  flex-direction: column;
  flex-grow: 1; /_ Cho phép phần thân tự co dãn chiếm không gian trống _/
  }
  /_ Neo chết nút bấm luôn dính sát đáy Card _/
  .card .btn {
  margin-top: auto; /_ CHÌA KHÓA: Đẩy nút bám sát đáy _/
  padding: 10px;
  }
- Lỗi 2: Item muốn căn chính giữa tuyệt đối nhưng vẫn dính góc trái trên cùng
  Nguyên nhân: Mới chỉ khai báo thuộc tính kích hoạt display: flex cho thẻ cha nhưng hoàn toàn thiếu đi 2 thuộc tính cấu hình điều hướng phân bổ không gian là căn giữa trục ngang (justify-content) và căn giữa trục dọc (align-items).
  Sửa lỗi:
  .hero {
  height: 100vh;
  display: flex;
  justify-content: center; /_ Kéo phần tử con vào chính giữa theo trục ngang _/
  align-items: center; /_ Kéo phần tử con vào chính giữa theo trục dọc _/
  }
  .hero-content {
  text-align: center;
  }
- Lỗi 3: Sidebar bị co móp lại khi khối Content kề bên có văn bản quá dài
  Nguyên nhân: Theo cơ chế mặc định của Flexbox, giá trị co rút flex-shrink của các item bằng 1. Khi vùng nội dung .content kế bên chứa chuỗi ký tự quá dài hoặc dung lượng lớn tràn ra ngoài, flex container sẽ tự động ép và co bóp độ rộng của .sidebar nhỏ lại hơn mức 250px thiết lập ban đầu để nhường chỗ cho content.
  Sửa lỗi:
  .layout {
  display: flex;
  }
  .sidebar {
  width: 250px;
  flex-shrink: 0; /_ CHÌA KHÓA: Cấm tuyệt đối hệ thống tự ý co móp độ rộng của Sidebar _/
  }
  .content {
  flex: 1;
  min-width: 0; /_ Đảm bảo an toàn không làm vỡ giao diện khi văn bản dài tràn dòng _/
  }
