async function edittextFormHandler(event) {
    event.preventDefault();
  
    const post_url = document.querySelector('textarea[name="post-description"]').value.trim();
    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    
    if (post_url) {
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        post_url: post_url
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
  