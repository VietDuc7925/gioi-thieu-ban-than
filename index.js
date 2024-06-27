document.addEventListener("DOMContentLoaded", function() {
  const avatar = document.getElementById("avatar");
  if (avatar) {
    avatar.addEventListener("click", function() {
      alert("Bạn đã nhấp vào ảnh đại diện");
    });
  }

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const email = document.getElementById("email").value;
      const phone = document.getElementById("phone").value;
      alert(`Email: ${email}\nSố điện thoại: ${phone}`);
    });
  }
});