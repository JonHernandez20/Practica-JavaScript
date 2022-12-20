// Variables Id
const password = document.getElementById('password');
const confirm = document.getElementById('passConfirm');
const btn = document.getElementById('btnSubmit');

btn.addEventListener('click', (event) => {
    if(confirm.value != password.value) {
        event.preventDefault();
        alert('Las contraseñas no coinciden.')
    } else {
        event.defaultPrevented()
    }
})

