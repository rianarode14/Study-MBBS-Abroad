window.addEventListener("scroll", () => {
    requestAnimationFrame(() => {
        const steps = document.querySelectorAll(".step");
        let lastVisibleIndex = -1;

        steps.forEach((step, index) => {
            const rect = step.getBoundingClientRect();
            if (rect.top < 120) {
                step.classList.add("hidden");
                lastVisibleIndex = index;
            } else {
                step.classList.remove("hidden");
            }
        });

        for (let i = 0; i <= lastVisibleIndex; i++) {
            steps[i].classList.remove("hidden");
        }
    });
});
