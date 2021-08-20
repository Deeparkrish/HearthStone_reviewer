

// Created by : Deepa 
// Log in Data to save from hTML
// to include event listener  for buttons -
// Login form handler - asynchronous func
async function loginFormHandler(event) {
  event.preventDefault();
  // get the input  email
  const email = document.querySelector("#email-login").value.trim();
  // //get the input password
  const password = document.querySelector("#password-login").value.trim();
  console.log(email, password);
  // If both are entered
  if (email && password) {
    // call fetch and send email and pwd to validate.
    const response = await fetch("/api/users/login", {
      method: "post",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });
    // If authentication passes
    if (response.ok) {
      document.location.replace("/"); // Go to user Dashboard page
    } else {
      alert(response.statusText); // else alert that the authnetication failed
    }
  }
}
// Event listener fo the log in form
document.querySelector(".login-form").addEventListener("submit", loginFormHandler);
