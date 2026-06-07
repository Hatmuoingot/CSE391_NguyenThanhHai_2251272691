Câu A1:

1. Vẽ sơ đồ cây DOM Tree đơn giản cho đoạn HTML mẫu:
   document
   └── div#app
   ├── header
   │ ├── h1 ("Todo App")
   │ └── nav
   │ ├── a.active ("All")
   │ ├── a ("Active")
   │ └── a ("Completed")
   └── main
   ├── form#todoForm
   │ ├── input#todoInput
   │ └── button ("Add")
   └── ul#todoList
   ├── li.todo-item ("Learn HTML")
   └── li.todo-item.completed ("Learn CSS")
2. Mã querySelector cho từng yêu cầu:
   Chọn thẻ <h1>: document.querySelector("h1")

Chọn input trong form: document.querySelector("#todoForm input")

Chọn tất cả .todo-item: document.querySelectorAll(".todo-item")

Chọn link đang active: document.querySelector("nav a.active")

Chọn <li> đầu tiên trong #todoList: document.querySelector("#todoList li:first-child")

Chọn tất cả <a> bên trong <nav>: document.querySelectorAll("nav a")

Câu A2:
textContent: Chỉ đọc và ghi nội dung văn bản thuần túy (Raw text). Nếu truyền các chuỗi có thẻ HTML như <h1>Hello</h1>, trình duyệt sẽ hiển thị nguyên văn chuỗi văn bản đó ra màn hình chứ không biên dịch. An toàn tuyệt đối.

innerHTML: Đọc và ghi nội dung có chứa thẻ HTML. Trình duyệt sẽ phân tích cú pháp (parse) chuỗi truyền vào và render thành các phần tử DOM thật.

Nguy cơ bảo mật XSS (Cross-Site Scripting): Nếu kẻ tấn công nhập một chuỗi độc hại (ví dụ: <img src=x onerror="alert('Hacked!')">) vào ô input và hệ thống dùng innerHTML để hiển thị, trình duyệt sẽ cố tình chạy đoạn script ẩn trong thuộc tính lỗi onerror. Kẻ xấu có thể chiếm đoạt cookies, token tài khoản của người dùng.

Cách sửa lỗi code nguy hiểm đề bài cho: Thay thế innerHTML bằng cách tạo phần tử DOM an toàn thông qua thuộc tính textContent:

const userInput = document.querySelector("#search").value;
const resultBox = document.querySelector("#result");
// Sửa lại: Ép hiển thị text thuần để triệt tiêu mọi script inject ngầm
resultBox.textContent = userInput;

Câu A3:
Mặc định khi click vào button: Cửa sổ Console sẽ in ra lần lượt theo thứ tự nổi bọt từ trong ra ngoài: BUTTON -> INNER -> OUTER.
Nếu bỏ comment lệnh e.stopPropagation() ở nút Button: Sự kiện sẽ bị chặn đứng ngay lập tức tại phần tử gốc, không cho phép bong bóng nổi lên các thẻ cha bao quanh nữa. Kết quả Console lúc này chỉ in ra duy nhất một dòng chữ: BUTTON.
