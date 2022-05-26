async function commentFormHandler(event) {
  // preventing default
  event.preventDefault();

  // taking inforamtion from textarea
  const comment = document.querySelector('textarea[name="comment-body"]').data.trim();
  const post_id = window.location.toString().split('/')[
    // accounting for index
    window.location.toString().split('/').length - 1
  ];
  // if comment exists then we post in json format
  if (comment) {
    const response = await fetch('/api/comments', {
      method: 'POST',
      body: JSON.stringify({
        post_id,
        comment_text
      }),
      headers: {'Content-Type': 'application/json'}
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.commenter').addEventListener('submit', commentFormHandler);
