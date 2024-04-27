function checkPassword() {
    var password = document.getElementById('passwordInput').value;
    if (password === 'bolo') {
        window.location.href = 'pagina2.html';
    } else {
        alert('Senha incorreta. Tente novamente.');
    }
}
