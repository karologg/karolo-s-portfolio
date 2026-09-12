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