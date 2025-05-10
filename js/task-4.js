const loginForm = document.querySelector(".login-form");
loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;

    if (email === "" || password === "") {
        return console.log("All form fields must be filled in");
    }
    const userData = {
        login: email.trim(),
        password: password.trim(),
    }
    console.log(userData);
    form.reset();
})