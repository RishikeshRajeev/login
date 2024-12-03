
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        alert(`Login successful!\nUsername: ${username}`);
        document.getElementById('loginForm').reset(); 
    } else {
        alert("Please fill in both fields.");
    }
});
