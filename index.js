let userForm = document.getElementById("registrationForm");
let userEntries = [];
const saveUserForm = (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const dob = document.getElementById("dob").value;

    const acceptTerms = document.getElementById("acceptTerms").value;
    const entry = {
        name,
        email,
        password,
        dob,
        acceptTerms,
    };
    userEntries.push(entry);
    localStorage.setItem("uesrEntries", JSON.stringify(userEntries));
};
userForm.addEventListener("submit", saveUserForm);
