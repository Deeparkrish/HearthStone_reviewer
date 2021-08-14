async function editFormHandler(event) {
    event.preventDefault();
    // get the comment text inputted in the text boxes 
    const content = document.querySelector('input[name="comment-text"]').value;
    // split the route path and fetch id 
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];

    const response = await fetch(`/api/comments/${id}`, {
        method: 'PUT', // PUT method to update the comment 
        body: JSON.stringify({
            title,
            content
        }),
        headers: {
            'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        document.location.replace('/dashboard/'); // render the dashboard with  updated comment
      } else {
        alert(response.statusText);
      }
  }
// Event Listener when subnit button is clicked 
  document.querySelector('.edit-comment-form').addEventListener('submit', editFormHandler);
