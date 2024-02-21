function savedata() {
    let name, email, password, confirmPassword;
    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    password = document.getElementById("password").value;
    confirmPassword = document.getElementById("confirmPassword").value;
  
    let user_records = JSON.parse(localStorage.getItem("users")) || [];
  
    const emailError = document.getElementById("email_error");
    const passwordError = document.getElementById("password_error");
    const confirmPasswordError = document.getElementById("confirm_password_error");
    const nameerror = document.getElementById("name_error");
  
    if (user_records.some((v) => v.email === email)) {
      alert("Duplicate Data or User Already Found");
    } else if (name.length < 3) {
      nameerror.style.display = "block";
      emailError.style.display = "none";
      passwordError.style.display = "none";
    } else if (!email.includes("@") || !email.includes(".com")) {
      nameerror.style.display = "none";
      emailError.textContent = "Email should contain both '@' and '.com'";
      emailError.style.display = "block";
      passwordError.style.display = "none";
    } else if (!/[a-z]/.test(password) || !/[A-Z]/.test(password) || !/[0-9]/.test(password) || !/[^a-zA-Z0-9]/.test(password)) {
      nameerror.style.display = "none";
      emailError.style.display = "none";
      passwordError.textContent = "Password should contain at least 1 uppercase, 1 lowercase, 1 special character & 1 number";
      passwordError.style.display = "block";
    } else if (password.length < 8) {
      nameerror.style.display = "none";
      emailError.style.display = "none";
      passwordError.textContent = "Password must be at least 8 characters";
      passwordError.style.display = "block";
    } else if (password !== confirmPassword) {
      nameerror.style.display = "none";
      emailError.style.display = "none";
      passwordError.style.display = "none";
      confirmPasswordError.textContent = "Password and Confirm Password do not match";
      confirmPasswordError.style.display = "block";
    } else {
      user_records.push({ name, email, password });
      localStorage.setItem("users", JSON.stringify(user_records));
      alert("Successfully Registered");
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      document.getElementById("confirmPassword").value = "";
      emailError.style.display = "none";
      passwordError.style.display = "none";
      confirmPasswordError.style.display = "none";
      window.location.href='index.html';
    }
  }
  
  document
    .getElementById("registrationForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      savedata();
    });
  