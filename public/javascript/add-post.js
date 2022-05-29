async function newFormHandler(event) {
  event.preventDefault();
  // taking values from input and textarea
  const title = document.querySelector('input[name="post-title"]').value;
  const post_description = document.querySelector('textarea[name="post-url"]').value;

  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      post_url: post_description
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

document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);
