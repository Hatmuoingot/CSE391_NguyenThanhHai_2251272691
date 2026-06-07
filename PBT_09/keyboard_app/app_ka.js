const triggerAlertBtn = document.querySelector("#triggerAlertBtn");
const secureAlertBox = document.querySelector("#secureAlertBox");

triggerAlertBtn.addEventListener("click", () => {
    secureAlertBox.classList.remove("d-none");
});
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        secureAlertBox.classList.add("d-none");
    }
});