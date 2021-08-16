async function createFormHandler(event) {
    event.preventDefault();
    // Save the data that user entered 
    const comment_text = document.querySelector('input[name="comment-text"]').value;
    const card_id = document.querySelector('input[name="card-id"]').value;


    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ 
        comment_text,
        card_id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-comment-form').addEventListener('submit', createFormHandler);
