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
