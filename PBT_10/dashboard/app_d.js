const refreshBtn = document.querySelector("#refreshBtn");
const widget1 = document.querySelector("#widget1");
const widget2 = document.querySelector("#widget2");
const fetchTimeText = document.querySelector("#fetchTime");

async function loadDashboard() {
    const startTime = Date.now();
    
    widget1.innerHTML = `<span class="text-muted">⏳ Đang tải...</span>`;
    widget2.innerHTML = `<span class="text-muted">⏳ Đang tải...</span>`;

    const results = await Promise.allSettled([
        fetch("https://jsonplaceholder.typicode.com/posts/1").then(r => { if(!r.ok) throw new Error(); return r.json(); }),
        fetch("https://jsonplaceholder.typicode.com/invalid-endpoint-error").then(r => { if(!r.ok) throw new Error("Đường dẫn sai 404"); return r.json(); })
    ]);

    if (results[0].status === "fulfilled") {
        widget1.innerHTML = `<div class="fw-bold text-primary">${results[0].value.title}</div><p class="m-0 mt-1">${results[0].value.body}</p>`;
    } else {
        widget1.innerHTML = `<span class="text-danger">❌ Không thể nạp dữ liệu bài viết</span>`;
    }

    if (results[1].status === "fulfilled") {
        widget2.innerHTML = `<span class="text-success">Thành công</span>`;
    } else {
        widget2.innerHTML = `<span class="text-danger">❌ Lỗi API riêng biệt: ${results[1].reason.message}</span>`;
    }

    fetchTimeText.textContent = `Thời gian phản hồi: ${Date.now() - startTime} ms`;
}

refreshBtn.addEventListener("click", loadDashboard);

loadDashboard();