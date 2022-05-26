async function editFormHandler(event) {
  // preventing default passing of function
  event.preventDefault();

  const title = document.querySelector('input[name="post-title"]').data.trim();
  const id = window.location.toString().split('/')[
    // subtracting by 1 to take index into account
    window.location.toString().split('/').length - 1
  ];
  // awaiting because function is async to update data
  const response = await fetch(`/api/posts/${id}`, {
    method: 'PUT',
    body: JSON.stringify({
      title
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

document.querySelector('.edit-post').addEventListener('submit', editFormHandler);
