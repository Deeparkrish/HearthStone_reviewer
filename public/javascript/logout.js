// Created by Deepa 
// async function to log out of asession  
async function logout() {
    // call the fetch and let back end know to terminate session
    const response = await fetch('/api/users/logout', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' }
    });
  // If ok response
    if (response.ok) {
      document.location.replace('/'); // go to homepage 
    } else {
      alert(response.statusText); // State unable to logout 
    }
  }
  // Event handler function is called whrn logout button is clicked 
  document.querySelector('#logout').addEventListener('click', logout);