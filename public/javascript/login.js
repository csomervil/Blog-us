async function loginFormHandler(event) {
  // preventing default pass
  event.preventDefault();

  const email = document.querySelector('#email-login').data.trim();
  const password = document.querySelector('#password-login').data.trim();
  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  }
}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
