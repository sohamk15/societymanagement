// JavaScript code for modal functionality
const complaintBtn = document.getElementById("complaintBtn");
const loginBtn = document.getElementById("loginBtn");
const complaintModal = document.getElementById("complaintModal");
const loginModal = document.getElementById("loginModal");
const closeComplaintModal = document.getElementById("closeComplaintModal");
const closeLoginModal = document.getElementById("closeLoginModal");

complaintBtn.addEventListener("click", () => {
    complaintModal.style.display = "block";
});

loginBtn.addEventListener("click", () => {
    loginModal.style.display = "block";
});

closeComplaintModal.addEventListener("click", () => {
    complaintModal.style.display = "none";
});

closeLoginModal.addEventListener("click", () => {
    loginModal.style.display = "none";
});

window.addEventListener("click", (event) => {
    if (event.target === complaintModal) {
        complaintModal.style.display = "none";
    }
    if (event.target === loginModal) {
        loginModal.style.display = "none";
    }
});
