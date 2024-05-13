function checkPassword() {
    var password = document.getElementById('passwordInput').value;
    if (password === '01100010 01101111 01101100 01101111') {
        window.location.href = 'pagina2.html';
    } else {
        alert('Senha incorreta. Tente novamente.');
    }
}
