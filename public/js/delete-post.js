const delPost = document.querySelectorAll('.btn-delete');

for (let i = 0; i < delPost.length; i++) {
  delPost[i].addEventListener('click', async (event) => {
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
  })
}

