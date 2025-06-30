document.getElementById('userForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = {
    name: e.target.name.value,
    password: e.target.password.value,
    age: e.target.age.value
  };

  await fetch('/api/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  alert('User registered!');
  e.target.reset();
  loadUsers();
});

async function loadUsers() {
  const res = await fetch('/api/users');
  const users = await res.json();
  const list = document.getElementById('userList');
  list.innerHTML = '';
  users.forEach(u => {
    list.innerHTML += `<li>${u.name} (${u.age} years)</li>`;
  });
}

loadUsers();
