document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    const startButton = document.querySelector(".start-button");

    // Hardcoded credentials for demo purposes
    const VALID_USER = {
        email: "admin@admin",
        password: "1234",
    };

    // Function to check if the user is signed in
    const isSignedIn = () => localStorage.getItem("isSignedIn") === "true";

    // Function to update the navigation bar
    const updateAuthState = () => {
        const navLogin = document.getElementById("login");

        if (isSignedIn()) {
            navLogin.textContent = "My Schedules";
            navLogin.href = "myschedules.html";
            navLogin.onclick = null;
        } else {
            navLogin.textContent = "Log in";
            navLogin.href = "login.html";
            navLogin.onclick = null;
        }
    };

    // Handle form submission for login
    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault(); 

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Check credentials
            if (email === VALID_USER.email && password === VALID_USER.password) {
                localStorage.setItem("isSignedIn", "true");
                updateAuthState();
                window.location.href = "myschedules.html";
            } else {
                alert("Invalid email or password. Please try again.");
            }
        });
    }

    if (startButton) {
        startButton.addEventListener("click", (event) => {
            if (!isSignedIn()) {
                event.preventDefault(); // Prevent navigation
                alert("You must be signed in to start scheduling.");
            }
        });
    }

    updateAuthState();
});
