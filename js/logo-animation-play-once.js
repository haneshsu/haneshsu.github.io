document.addEventListener("DOMContentLoaded", function () {
    let logoAnimationContainer = document.getElementById("logo-animation");

    if (!sessionStorage.getItem("logoAnimationPlayed")) {
        // Load Lottie animation
        let animation = lottie.loadAnimation({
            container: logoAnimationContainer,
            renderer: "svg",
            loop: false,
            autoplay: true,
            path: "/assets/landing/2b_hanes_hsu_logo_animation_03062025.json" // Make sure this path is correct
        });

        // Once the animation is complete, hide the container
        animation.addEventListener("complete", function () {
            logoAnimationContainer.style.display = "none";
            sessionStorage.setItem("logoAnimationPlayed", "true"); // Store flag to prevent replay
        });

    } else {
        // If animation already played, hide it immediately
        logoAnimationContainer.style.display = "none";
    }
});
