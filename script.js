function checkLogin() {
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let user_records = JSON.parse(localStorage.getItem("users")) || [];

  if (
    user_records.some((v) => {
      return v.email === email && v.password === password;
    })
  ) 
  
  {
    alert("Login Successful");
    window.location.href='dashboard.html';
  } 
  else if (email.indexOf("@") === -1) {
    document.getElementById("email_error").style.display = "block";




  } else {
    document.getElementById("password_error").style.display = "block";
  }
}
