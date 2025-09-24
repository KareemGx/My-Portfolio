    // Smooth scroll for nav links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            window.scrollTo({
            top: target.offsetTop - 60, // offset for sticky navbar
            behavior: "smooth"
            });
        }
        });
    });
    
    // Hire Me button
    function scrollToContact() {
        const target = document.getElementById("contact");
        if (target) {
        window.scrollTo({
            top: target.offsetTop - 60,
            behavior: "smooth"
        });
        }
    }

    function toggleMenu() {
        const nav = document.getElementById("nav-links");
        nav.classList.toggle("show");
    }