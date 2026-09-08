      const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});

const appointmentForm = document.getElementById("appointmentForm");
const formMessage = document.getElementById("formMessage");

appointmentForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const service = document.getElementById("service").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    if (name === "" || phone === "" || service === "" || date === "" || time === "") {
        formMessage.textContent = "Please fill all the fields.";
        return;
    }

    formMessage.textContent =
        "Thank you, " + name + "! Your appointment request has been received. ✨";

    appointmentForm.reset();
});
 