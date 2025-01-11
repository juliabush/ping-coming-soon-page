const form = document.querySelector('.website-email__form')
const input = document.querySelector('.email-form__input')

form.addEventListener('submit', (e) => {
    let messages = []
    if (input.value === '' || input.value == null ){
        messages.push('Email Address is required')
    }
    e.preventDefault()
})

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // A basic email regex
    return emailPattern.test(email);
}

