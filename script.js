var registeredUsers = {
    "admin": "admin"
};

function registerUser() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (!username || !password || registeredUsers[username]) {
        alert(username ? 'Имя пользователя "' + username + '" уже занято. Пожалуйста, выберите другое имя.' : 'Вы не ввели имя пользователя. Пожалуйста, введите имя пользователя.');
        return;
    }

    registeredUsers[username] = password;
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
    alert('Пользователь "' + username + '" успешно зарегистрирован.');
}

function loginUser() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    if (username === "admin" && password === "admin") {
        alert('Добро пожаловать, администратор!');
        // Здесь можно добавить перенаправление на страницу администратора или другое действие после входа
        window.location.href = 'user_dashboard.html'; // Пример перенаправления
        return;
    }

    if (!username || !password || !registeredUsers[username] || registeredUsers[username] !== password) {
        alert(username ? 'Неверное имя пользователя или пароль' : 'Вы не ввели имя пользователя. Пожалуйста, введите имя пользователя.');
        return;
    }

    alert('Добро пожаловать, ' + username + '!');
    // Здесь можно добавить перенаправление на страницу пользователя или другое действие после входа
    window.location.href = 'user_dashboard.html'; // Пример перенаправления
}

function updateDateTime() {
    var now = new Date();
    document.getElementById('currentTime').textContent = now.toLocaleTimeString();
    document.getElementById('currentDate').textContent = now.toLocaleDateString();
}

setInterval(updateDateTime, 1000);
updateDateTime(); // Инициализация отображения времени и даты при загрузке страницы

// Загрузка данных из localStorage при запуске страницы
if (localStorage.getItem('registeredUsers')) {
    registeredUsers = JSON.parse(localStorage.getItem('registeredUsers'));
}