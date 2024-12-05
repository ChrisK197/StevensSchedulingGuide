document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");

    // Predefined credentials
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
            navLogin.href = "myschedules.html";  // Directs to "My Schedules" page
            navLogin.onclick = null;
        } else {
            navLogin.textContent = "Log in";
            navLogin.href = "login.html";  // Restores the "Log in" page link
            navLogin.onclick = null;
        }
    };

    // Handle form submission for login
    if (loginForm) {
        loginForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Prevent default form submission

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Check credentials
            if (email === VALID_USER.email && password === VALID_USER.password) {
                localStorage.setItem("isSignedIn", "true");
                alert("Login successful! Redirecting to the home page...");
                updateAuthState();
                window.location.href = "index.html"; // Redirect to home page
            } else {
                alert("Invalid email or password. Please try again.");
            }
        });
    }

    // Initialize navigation state
    updateAuthState();
});
