const updatePost = document.querySelectorAll('.btn-update');

for (let i = 0; i < delPost.length; i++) {
  updatePost[i].addEventListener('click', async (event) => {
    event.preventDefault();
    const id = event.target.getAttribute('data-id');
    console.log('update here ' + id);
    window.location.href = `/update/${id}`;
  })
}