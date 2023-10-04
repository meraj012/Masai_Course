fetch('https://jsonplaceholder.typicode.com/todos')
.then(response => response.json())
.then(data => {
    const tableBody = document.getElementById('todos-table-body');
    data.forEach(todo => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${todo.id}</td>
            <td>${todo.title}</td>
            <td>${todo.completed ? 'Completed' : 'Incomplete'}</td>
        `;
        tableBody.appendChild(row);
    });
})
.catch(error => console.error('Error fetching data:', error));
