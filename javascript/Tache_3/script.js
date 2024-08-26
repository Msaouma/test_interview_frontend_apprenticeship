fetch('https://jsonplaceholder.typicode.com/todos')
  .then(response => {
    if (!response.ok) {
      throw new Error('Erreur HTTP ! statut: ' + response.status);
    }
    return response.json();
  })
  .then(data => {
    const todoList = document.getElementById('listes');
    data.slice(0, 5).forEach(element => {
        const listItem = document.createElement('li');
        listItem.classList.add('item');
        listItem.textContent = element.title;         
        todoList.appendChild(listItem);
    });
})
  .catch(error => {
    console.error('Il y a eu un problème avec la requête fetch :', error);
  });
