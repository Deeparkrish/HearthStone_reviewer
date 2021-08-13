// crrated by Deepa 
// sign up form handler - asynchronous func
async function signupFormHandler(event) {
    event.preventDefault();
    //  get the username 
    const username = document.querySelector('#username-signup').value.trim();
    // get the input  email 
    const email = document.querySelector('#email-signup').value.trim();
    // //get the input password 
    const password = document.querySelector('#password-signup').value.trim();
    // If both are entered  
    if (email && password) {
        // call fetch and send email and pwd to check if its in correct syntax.
      const response = await fetch('/api/users/', {
        method: 'post',
        body: JSON.stringify({
          username,
          email,
          password
        }),
        headers: { 'Content-Type': 'application/json' }
      });
      // If validation passes 
      if (response.ok) {
        document.location.replace('/'); // Go to user Dashboard page 
      } else {
        alert(response.statusText); // else alert that invalid input format
      }
    }
  }
  // Event listener fo the sign up  form 
  document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);