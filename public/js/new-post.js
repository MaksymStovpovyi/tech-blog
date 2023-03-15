const submitPost = document.querySelector('#post-submit');

submitPost.addEventListener('click', async (e) => {
  e.preventDefault();
  const title = document.getElementById('post-title').value;
  const content = document.getElementById('post-text').value;
  
  const data = await fetch('/api/postings', {
    method: 'POST',
    body: JSON.stringify({
      title,
      content
    }),
    headers: { 'Content-Type': 'application/json' }
  }).then(() => {
    window.location.href = '/';
  });
  
});