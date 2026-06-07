const searchBtn = document.querySelector("#searchBtn");
const cityInput = document.querySelector("#cityInput");
const statusBox = document.querySelector("#statusBox");
const historyContainer = document.querySelector("#historyContainer");

let searchHistory = JSON.parse(localStorage.getItem("weather_history")) || [];

async function fetchWeather(city) {
    if (city.toLowerCase() !== "hanoi") {
        statusBox.innerHTML = `<div class="text-danger fw-bold">❌ Lỗi: Bản demo chỉ hỗ trợ tọa độ của 'Hanoi'!</div>`;
        return;
    }

    statusBox.innerHTML = `
        <div class="spinner-border text-primary mb-2" role="status"></div>
        <div class="text-muted small fw-medium">⏳ Đang tải dữ liệu thời tiết...</div>
    `;

    try {
        const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=21.03&longitude=105.85&current_weather=true");
        if (!res.ok) throw new Error("Không thể kết nối tới máy chủ thời tiết.");
        
        const data = await res.json();
        const current = data.current_weather;

        statusBox.innerHTML = `
            <h5 class="fw-bold text-dark m-0">📍 Thành phố: Hà Nội</h5>
            <h2 class="fw-bold text-primary my-2">${current.temperature}°C</h2>
            <p class="small text-muted m-0">Tốc độ gió: ${current.windspeed} km/h</p>
        `;

        updateHistory(city);

    } catch (error) {
        statusBox.innerHTML = `<div class="text-danger fw-bold">❌ Lỗi kết nối: ${error.message}</div>`;
    }
}

function updateHistory(city) {
    if (!searchHistory.includes(city)) {
        searchHistory.unshift(city);
        if (searchHistory.length > 5) searchHistory.pop(); 
        localStorage.setItem("weather_history", JSON.stringify(searchHistory));
        renderHistory();
    }
}

function renderHistory() {
    historyContainer.innerHTML = "";
    searchHistory.forEach(city => {
        const btn = document.createElement("button");
        btn.className = "btn btn-sm btn-secondary py-0 px-2 text-capitalize";
        btn.textContent = city;
        btn.addEventListener("click", () => fetchWeather(city)); 
        historyContainer.appendChild(btn);
    });
}

searchBtn.addEventListener("click", () => {
    const val = cityInput.value.trim();
    if (val) fetchWeather(val);
});

renderHistory();