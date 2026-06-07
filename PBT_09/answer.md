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

Câu C1:
// App: Counter with history
const countDisplay = document.querySelector(".count");
const historyList = document.getElementById("history");

let count = 0;

document.querySelector("#incrementBtn").addEventListener("click", function() {
count++;
countDisplay.innerHTML = count; // ĐÚNG

    // Lưu history
    const li = document.createElement("li");
    li.textContent = "Count changed to " + count;
    li.addEventListener("click", function() {
        deleteHistory(this);
    });
    historyList.append(li); // ĐÚNG

});

// ĐÃ SỬA LỖI 1: Thay thế sự kiện sai "onclick" bằng tên chuẩn "click"
document.querySelector("#decrementBtn").addEventListener("click", function() {
count--;
countDisplay.innerHTML = count;
});

document.querySelector("#resetBtn").addEventListener("click", () => {
count = 0;
// ĐÃ SỬA LỖI 2: Phải gán lại vào thuộc tính hiển thị .innerHTML hoặc .textContent chứ không gán thẳng vào biến DOM hằng số
countDisplay.innerHTML = count;
// ĐÃ SỬA LỖI 3: Thay vì gán null gây lỗi hiển thị, dùng chuỗi rỗng "" để làm sạch lịch sử
historyList.innerHTML = "";
});

function deleteHistory(element) {
// ĐÃ SỬA LỖI 4: Dùng phương thức hiện đại .remove() ngắn gọn trực tiếp thay vì bóc tách cha-con cồng kềnh
element.remove();
}

// Clear all history
document.querySelector("#clearHistory").addEventListener("click", () => {
const items = historyList.querySelectorAll("li");
items.forEach(item => {
// ĐÃ SỬA LỖI 5: Thêm cặp dấu ngoặc tròn () để thực thi gọi hàm phương thức xóa .remove()
item.remove();
});
});

// Save to localStorage
window.addEventListener("beforeunload", () => {
localStorage.setItem("count", count);
localStorage.setItem("history", historyList.innerHTML);
});

// Load from localStorage
window.addEventListener("load", () => {
// ĐÃ SỬA LỖI 6: Lấy dữ liệu từ localStorage về và ép kiểu Number ngược lại, tránh lỗi nối chuỗi
count = Number(localStorage.getItem("count")) || 0;
// ĐÃ SỬA LỖI 7: Phục hồi lại dữ liệu cây li lịch sử cũ nếu có lưu trong bộ nhớ máy
historyList.innerHTML = localStorage.getItem("history") || "";
countDisplay.textContent = count;
});

Câu C2:
Tại sao gán 1000 listeners là Bad Practice? Nếu tạo 1000 phần tử và bắt trình duyệt gán 1000 sự kiện riêng lẻ, hệ thống sẽ bị ngốn một lượng bộ nhớ RAM cực kỳ lớn. Hơn nữa, khi danh sách bị render lại, các phần tử cũ bị xóa và phần tử mới sinh ra sẽ bị mất hoàn toàn sự kiện, bắt buộc phải viết code gán đi gán lại vô cùng phức tạp. Event Delegation giải quyết triệt để bằng cách gán 1 sự kiện duy nhất lên thẻ CHA. Khi con bị click, sự kiện tự động nổi bọt (bubbling) lên và cha chỉ cần dùng e.target để xử lý một cách mượt mà, tiết kiệm tài nguyên.

Refactor tối ưu hóa vòng lặp 1000 lần sử dụng DocumentFragment:

Bản chất lỗi cũ: Thao tác liên tục gõ lệnh .appendChild(div) trực tiếp vào document.body trong vòng lặp 1000 lần sẽ ép trình duyệt phải tính toán lại bố cục hình học pixel 1000 lần liên tiếp (Lỗi lặp lại Reflow/Repaint trên màn hình) gây lag ứng dụng.

Mã nguồn tối ưu sau khi sửa:

Khởi tạo một chiếc giỏ chứa tạm thời nằm ngầm trong bộ nhớ (không gây Reflow)
const fragment = document.createDocumentFragment();

for (let i = 0; i < 1000; i++) {
const div = document.createElement("div");
div.textContent = `Item ${i}`;
fragment.appendChild(div); // Gom phần tử vào giỏ chứa tạm ngầm
}

// Đẩy duy nhất 1 lần giỏ chứa vào cây DOM thật -> Chỉ kích hoạt Reflow đúng 1 lần duy nhất!
document.body.appendChild(fragment);
