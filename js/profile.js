const bars = document.querySelectorAll(".progress");

const observer= new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("animate");
        }
    });
});

bars.forEach(bar => observer.observe(bar));