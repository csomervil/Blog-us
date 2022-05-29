async function editFormHandler(event) {
  event.preventDefault();
  // taking value from input 
  const title = document.querySelector('input[name="post-title"]').value.trim();
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  // making sure that there is a post description and updating title
  if (post_url) {
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
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
document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);
