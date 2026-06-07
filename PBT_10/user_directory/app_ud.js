
const api = {
    baseURL: "https://jsonplaceholder.typicode.com",
    
    async getUsers() {
        const res = await fetch(`${this.baseURL}/users?_limit=4`);
        if (!res.ok) throw new Error("Lỗi không thể tải danh sách người dùng.");
        return res.json();
    },
    async createUser(name) {
        const res = await fetch(`${this.baseURL}/users`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name })
        });
        if (!res.ok) throw new Error("Lỗi không thể tạo thành viên mới.");
        return res.json();
    },
    async deleteUser(id) {
        const res = await fetch(`${this.baseURL}/users/${id}`, { method: "DELETE" });
        if (!res.ok) throw new Error("Lỗi không thể xóa thành viên.");
        return true;
    }
};


const ui = {
    listUl: document.querySelector("#userList"),
    alertDiv: document.querySelector("#alertContainer"),

    renderUsers(users) {
        this.listUl.innerHTML = "";
        users.forEach(user => {
            const li = document.createElement("li");
            li.className = "list-group-item d-flex justify-content-between align-items-center fw-medium text-dark";
            li.dataset.id = user.id;

            li.innerHTML = `
                <span>👤 ${user.name}</span>
                <button class="btn btn-sm btn-outline-danger py-0 del-btn">Xóa</button>
            `;
            this.listUl.appendChild(li);
        });
    },
    showLoading() { this.listUl.innerHTML = `<li class="list-group-item text-center text-muted py-3">⏳ Đang đồng bộ dữ liệu với API...</li>`; },
    showSuccess(msg) { this.alertDiv.innerHTML = `<div class="alert alert-success py-1 small fw-bold">${msg}</div>`; },
    showError(msg) { this.alertDiv.innerHTML = `<div class="alert alert-danger py-1 small fw-bold">❌ Lỗi: ${msg}</div>`; }
};


let localUsers = [];

document.querySelector("#loadBtn").addEventListener("click", async () => {
    try {
        ui.showLoading();
        localUsers = await api.getUsers();
        ui.renderUsers(localUsers);
        ui.showSuccess("Đã nạp thành công danh sách thành viên từ API server!");
    } catch (err) {
        ui.showError(err.message);
    }
});

document.querySelector("#userForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const input = document.querySelector("#userNameInput");
    const name = input.value.trim();
    if (!name) return;

    try {
        const newUser = await api.createUser(name);
        localUsers.push(newUser);
        ui.renderUsers(localUsers);
        input.value = "";
        ui.showSuccess(`Đã thêm mới thành viên '${name}' thành công!`);
    } catch (err) {
        ui.showError(err.message);
    }
});


ui.listUl.addEventListener("click", async (e) => {
    if (e.target.classList.contains("del-btn")) {
        const li = e.target.closest("li");
        const id = Number(li.dataset.id);
        if (!confirm("Bạn có chắc chắn muốn xóa thành viên này?")) return;

        try {
            await api.deleteUser(id);
            localUsers = localUsers.filter(u => u.id !== id);
            ui.renderUsers(localUsers);
            ui.showSuccess("Đã xóa bỏ thành viên khỏi hệ thống thành công!");
        } catch (err) {
            ui.showError(err.message);
        }
    }
});