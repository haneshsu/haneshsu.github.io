document.addEventListener("DOMContentLoaded", function () {
    let logoAnimationContainer = document.getElementById("logo-animation"); // Ensure this exists
    let skipButton = document.querySelector(".skip-button");

    // If button doesn't exist, create it dynamically
    if (!skipButton) {
        skipButton = document.createElement("button");
        skipButton.innerText = "skip";
        skipButton.classList.add("skip-button");

        // Accessibility: add aria-label for screen readers
        skipButton.setAttribute('aria-label', 'Skip logo animation');

        // Add button to the page
        document.body.appendChild(skipButton);
    } else {
        // Ensure button is visible if it already exists
        skipButton.style.display = "block";
    }

    // Skip button should hide animation when clicked
    skipButton.addEventListener("click", function () {
        if (logoAnimationContainer) {
            logoAnimationContainer.style.display = "none";
            sessionStorage.setItem("logoAnimationPlayed", "true");
            skipButton.style.display = "none"; // Hide the skip button after it's clicked
        }
    });

    if (!sessionStorage.getItem("logoAnimationPlayed")) {
        // Load Lottie animation
        let animation = lottie.loadAnimation({
            container: logoAnimationContainer,
            renderer: "svg",
            loop: false,
            autoplay: true,
            path: "/assets/landing/2b_hanes_hsu_logo_animation_03062025.json" // Ensure correct path
        });

        // When animation completes, hide it and remove the skip button
        animation.addEventListener("complete", function () {
            logoAnimationContainer.style.display = "none";
            sessionStorage.setItem("logoAnimationPlayed", "true");
            skipButton.style.display = "none"; // Hide the skip button once animation is done
        });

    } else {
        // If animation already played, hide it immediately and hide the skip button
        logoAnimationContainer.style.display = "none";
        skipButton.style.display = "none";
    }
});
