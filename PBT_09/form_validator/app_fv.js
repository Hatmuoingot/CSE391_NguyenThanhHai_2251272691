const emailInput = document.querySelector("#emailInput");
const emailErrDisplay = document.querySelector("#emailErrDisplay");
const passwordInput = document.querySelector("#passwordInput");
const passwordStrengthText = document.querySelector("#passwordStrengthText");
const submitFormBtn = document.querySelector("#submitFormBtn");

let emailValidStatus = false;
let passwordValidStatus = false;

function checkFormState() {
    submitFormBtn.disabled = !(emailValidStatus && passwordValidStatus);
}

emailInput.addEventListener("input", (e) => {
    const value = e.target.value.trim();
    const regexPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 

    if (value === "") {
        emailErrDisplay.textContent = "⚠️ Trường thông tin này bắt buộc, không được để trống!";
        emailInput.classList.add("is-invalid");
        emailValidStatus = false;
    } else if (!regexPattern.test(value)) {
        emailErrDisplay.textContent = "⚠️ Định dạng cấu trúc email không hợp lệ!";
        emailInput.classList.add("is-invalid");
        emailValidStatus = false;
    } else {
        emailErrDisplay.textContent = "";
        emailInput.classList.remove("is-invalid");
        emailInput.classList.add("is-valid");
        emailValidStatus = true;
    }
    checkFormState();
});

passwordInput.addEventListener("input", (e) => {
    const value = e.target.value;

    if (value.length < 8) {
        passwordStrengthText.textContent = "❌ Mật khẩu quá ngắn (Yêu cầu phải ≥ 8 ký tự)!";
        passwordStrengthText.className = "text-danger small mt-1";
        passwordInput.classList.add("is-invalid");
        passwordValidStatus = false;
    } else {
        passwordStrengthText.textContent = "✅ Mật khẩu an toàn đạt tiêu chí!";
        passwordStrengthText.className = "text-success small mt-1";
        passwordInput.classList.remove("is-invalid");
        passwordInput.classList.add("is-valid");
        passwordValidStatus = true;
    }
    checkFormState();
});

document.querySelector("#authForm").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("🎉 Xác nhận: Đăng ký thành công! Biểu mẫu sạch dữ liệu độc hại.");
});