const delPost = document.querySelector('.btn-delete');

delPost.addEventListener('click', async (event) => {
  event.preventDefault();
    if (event.target.hasAttribute('data-id')) {
    const id = event.target.getAttribute('data-id');

    const response = await fetch(`/api/postings/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to delete post');
    }
  }
});