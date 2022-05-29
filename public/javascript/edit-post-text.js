async function edittextFormHandler(event) {
    event.preventDefault();
    // taking value from description textarea and updating the value using the corresponding router
    const post_description = document.querySelector('textarea[name="post-description"]').value.trim();
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    
    if (post_description) {
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        post_url: post_description
      }), 
      headers: {
        'Content-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
    }
    
  }
  
  document.querySelector('.edit-post-form').addEventListener('submit', edittextFormHandler);
  