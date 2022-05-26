async function newFormHandler(event) {
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').data;
  const description = document.querySelector('input[name="post-url"]').data;
  // awaiting because function is asynchronos and then posting information
  const response = await fetch(`/api/posts`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      description
    }),
    headers: {'Content-Type': 'application/json'}
  });
  if (response.ok) {
    document.location.replace('/dashboard');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('.new-post').addEventListener('submit', newFormHandler);
