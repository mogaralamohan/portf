document.addEventListener('DOMContentLoaded', () => {

    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');

    // Reset loader visibility
    loader.style.display = 'block'; // Ensure loader is visible on reload
    mainContent.style.display = 'none'; // Hide main content initially

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => {
        mainContent.style.display = 'block';
        loader.style.display = 'none';
    });

    document.querySelectorAll('.project').forEach(project => {
        project.addEventListener('click', () => {
            project.classList.toggle('clicked');
        });
    });

    window.addEventListener('deviceorientation', (event) => {
        const x = event.gamma; 

        if (x > 10) {
            document.body.style.filter = "brightness(0.7)";
        } else if (x < -10) {
            document.body.style.filter = "brightness(1.3)";
        } else {
            document.body.style.filter = "brightness(1)";
        }
    });

    const projects = document.querySelectorAll('.project');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            } else {
                entry.target.classList.remove('fade-in'); // Allow re-triggering
            }
        });
    }, { threshold: 0.5 });

    projects.forEach(project => {
        observer.observe(project);
    });

    document.querySelectorAll('.project').forEach(project => {
        project.addEventListener('touchstart', () => {
            confetti({
                spread: 90,
                angle: 45,
                particleCount: 100,
                origin: { x: 0.5, y: 0.5 }
            });
        });
    });
});
