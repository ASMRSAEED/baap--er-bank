// Add Click Handler with the submit Button
document.getElementById('btn-submit').addEventListener('click', function () {
    // Get the user email from the input field
    const email = document.getElementById('user-email').value

    // Get the user password from the input field
    const password = document.getElementById('user-password').value

    // Verify email and password
    if (email == 'asmrsaeed@gmail.com' && password == 12345) {
        window.location.href = 'bank.html'
    } else {
        alert('Invalid User')
    }

})