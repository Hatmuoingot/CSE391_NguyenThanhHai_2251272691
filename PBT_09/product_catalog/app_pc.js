
const products = [
    { id: 1, name: "iPhone 16 Pro Max", price: 34990000, category: "phone" },
    { id: 2, name: "Samsung Galaxy S24 Ultra", price: 29990000, category: "phone" },
    { id: 3, name: "MacBook Pro M3 Pro", price: 54990000, category: "laptop" },
    { id: 4, name: "Dell XPS 15 Ultra", price: 42990000, category: "laptop" },
    { id: 5, name: "Xiaomi 14 Ultra", price: 21990000, category: "phone" }
];

let cartBadgeValue = 0;
const catalogGrid = document.querySelector("#catalogGrid");
const badgeCounter = document.querySelector("#badgeCounter");

function displayProducts(items) {
    catalogGrid.innerHTML = "";
    
    items.forEach(p => {
        const wrapperCard = document.createElement("div");
        wrapperCard.className = "col";
        
        wrapperCard.innerHTML = `
            <div class="card h-100 border-0 shadow-sm rounded-3">
                <div class="card-body d-flex flex-column justify-content-between">
                    <div>
                        <h6 class="card-title fw-bold text-dark mb-1">${p.name}</h6>
                        <span class="badge bg-secondary mb-2">${p.category}</span>
                    </div>
                    <div class="mt-3">
                        <p class="text-danger fw-bold fs-5 mb-2">${p.price.toLocaleString("vi-VN")}đ</p>
                        <button class="btn btn-sm btn-dark w-100 buy-btn">Thêm vào giỏ</button>
                    </div>
                </div>
            </div>
        `;

        wrapperCard.querySelector(".buy-btn").addEventListener("click", () => {
            cartBadgeValue++;
            badgeCounter.textContent = cartBadgeValue;
        });

        catalogGrid.appendChild(wrapperCard);
    });
}

document.querySelector("#liveSearch").addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase().trim();
    const matched = products.filter(p => p.name.toLowerCase().includes(query));
    displayProducts(matched);
});

document.querySelector("#catSelect").addEventListener("change", (e) => {
    const selected = e.target.value;
    const filtered = selected === "all" ? products : products.filter(p => p.category === selected);
    displayProducts(filtered);
});

document.querySelector("#darkToggle").addEventListener("click", () => {
    const body = document.querySelector("#mainBody");
    body.classList.toggle("bg-dark");
    body.classList.toggle("text-white");
});

displayProducts(products);