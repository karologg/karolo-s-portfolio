const bars = document.querySelectorAll(".progress");

const observer= new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            
            entry.target.classList.add("animate");
        } else {
            entry.target.classList.remove("animate");
        }
    });
});

bars.forEach(bar => observer.observe(bar));

function copyEmail() {
    const email = document.querySelector(".e-mail").textContent;
    navigator.clipboard.writeText(email).then(() => {
        const notification = document.querySelector(".notification");
        notification.classList.add("show");
        setTimeout(() => {
            notification.classList.remove("show");
        }, 3000);
    });
}