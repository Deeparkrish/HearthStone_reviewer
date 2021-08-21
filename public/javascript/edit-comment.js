async function editFormHandler(event) {
    event.preventDefault();
    // get the comment text inputted in the text boxes 
    const comment_text = document.querySelector('input[name="comment-text"]').value;
    // split the route path and fetch id 
    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
    console.log(comment_text,id);
    const response = await fetch(`/api/comments/${id}`, {
        method: 'PUT', // PUT method to update the comment 
        body: JSON.stringify({
            comment_text
        }),
        headers: {
            'Content-Type': 'application/json'
        }
      });
      
      if (response.ok) {
        document.location.replace('/dashboard'); // render the dashboard with  updated comment
      } else {
        alert(response.statusText);
      }
  }
// Event Listener when subnit button is clicked 
  var el =document.querySelector('.edit-comment-form');
  if(el)
  el.addEventListener('submit', editFormHandler);
