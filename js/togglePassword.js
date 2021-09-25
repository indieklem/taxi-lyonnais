function togglePassword(e) {
    let passwordAttribute = e.getAttribute('data-password');
    var passwordInput = document.getElementById('js-password-'+passwordAttribute);
    if(passwordInput.type == 'text') {
        passwordInput.type = 'password';
        e.src = 'images/icon/eye.svg';
    } else {
        passwordInput.type = 'text';
        e.src = 'images/icon/eye-closed.svg';
    }
}
