const galleryGrid = document.querySelector("#galleryGrid");
const loadTrigger = document.querySelector("#load-trigger");

let currentPage = 1;
const limit = 20;  
let isFetching = false;


async function loadMorePhotos() {
    if (isFetching) return; 
    isFetching = true;

    try {
        const res = await fetch(`https://picsum.photos/v2/list?page=${currentPage}&limit=${limit}`);
        if (!res.ok) throw new Error("Không thể nạp thêm ảnh từ máy chủ.");
        
        const photos = await res.json();
        
        if (photos.length === 0) {
            loadTrigger.textContent = "🏁 Đã tải hết toàn bộ kho ảnh!";
            observer.unobserve(loadTrigger); 
            return;
        }

        
        photos.forEach(photo => {
            const card = document.createElement("div");
            card.className = "card photo-card border-0 shadow-sm overflow-hidden rounded-3";
            
            card.innerHTML = `
                <img src="${photo.download_url}" alt="Photo by ${photo.author}" loading="lazy">
                <div class="card-body p-2">
                    <p class="m-0 small text-truncate text-muted fw-bold">📷 Tác giả: ${photo.author}</p>
                </div>
            `;
            galleryGrid.appendChild(card);
        });

        currentPage++; 
    } catch (error) {
        console.error("Sự cố tải ảnh:", error.message);
    } finally {
        isFetching = false;
    }
}


const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
        loadMorePhotos(); 
    }
}, {
    rootMargin: "100px" 
});

observer.observe(loadTrigger);