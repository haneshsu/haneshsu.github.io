document.addEventListener("DOMContentLoaded", function () {
    lottie.loadAnimation({
        container: document.getElementById("logo-animation"), // The div where animation appears
        renderer: "svg",
        loop: false, // Set to true if you want it to repeat
        autoplay: true,
        path: "/assets/landing/hanes_hsu_logo_animation_03062025.json" // Adjust to the correct path of your JSON file
    });
});
