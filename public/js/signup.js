const signupBtn = document.querySelector('#signup-button');

signupBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  const name = document.getElementById('login-signup').value;
  const email = document.getElementById('email-signup').value;
  const password = document.getElementById('password-signup').value;
  
  const data = await fetch('/api/users/signup', {
    method: 'POST',
    body: JSON.stringify({
      name,
      email,
      password
    }),
    headers: { 'Content-Type': 'application/json' }
  }).then(() => {
    window.location.href = '/';
    alert('Are you registered');
  });
  
})