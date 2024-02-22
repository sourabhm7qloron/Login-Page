function checkLogin() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let user_records = JSON.parse(localStorage.getItem("users")) || [];

  if (
    user_records.some((v) => {
      return v.email === email && v.password === password;
    })
  ) {
    alert("Login Successful");
    window.location.href = "dashboard.html";
  } else if (!email.includes("@") || !email.includes(".com")) {
    document.getElementById("email_error").textContent =
      "Email should contain both '@' and '.com'";
    document.getElementById("email_error").style.display = "block";
    document.getElementById("password_error").style.display = "none";
  } else if (
    !/[a-z]/.test(password) ||
    !/[A-Z]/.test(password) ||
    !/[0-9]/.test(password) ||
    !/[^a-zA-Z0-9]/.test(password)
  ) {
    document.getElementById("email_error").style.display = "none";
    document.getElementById("password_error").textContent =
      "Password should contain atleast 1 uppercase,lowercase,special character, number";
    document.getElementById("password_error").style.display = "block";
  } else {
    document.getElementById("email_error").style.display = "none";
    document.getElementById("password_error").textContent =
      "Data not available. Please register first";
    document.getElementById("password_error").style.display = "block";
  }
}
