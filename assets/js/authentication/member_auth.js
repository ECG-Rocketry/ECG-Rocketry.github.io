var jsonUrl = '../users.json';

fetch(jsonUrl)
  .then(function (response) {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(function (data) {
    const users = data.users; // Load user data from the JSON

    const loginForm = document.getElementById('login-form');
    const profile = document.getElementById('profile');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('login-button');
    const userUsername = document.getElementById('user-username');
    const userData = document.getElementById('user-data');
    const logoutButton = document.getElementById('logout-button');

    loginButton.addEventListener('click', () => {
        const username = usernameInput.value;
        const password = passwordInput.value;

        if (users[username] && users[username].password === password) {
            loginForm.style.display = 'none';
            profile.style.display = 'block';
            userUsername.textContent = username;
            userData.textContent = users[username].data;
        } else {
            alert('Invalid login credentials');
        }
    });

    logoutButton.addEventListener('click', () => {
        loginForm.style.display = 'block';
        profile.style.display = 'none';
        usernameInput.value = '';
        passwordInput.value = '';
    });
  })
  .catch(function (error) {
    console.error('There was a problem with the fetch operation:', error);
  });
