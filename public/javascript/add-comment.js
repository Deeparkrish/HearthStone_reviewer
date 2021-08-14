async function createFormHandler(event) {
    event.preventDefault();
  
    const content = document.querySelector('input[name="comment-text"]').value;
  
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({
        
        content
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
