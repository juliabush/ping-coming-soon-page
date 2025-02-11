const form = document.querySelector('.website__email-form');
const button = document.querySelector('.website__submit-button');
const msg = 'Please provide a valid email address';

const error = document.createElement('p');
error.classList.add('error_text');
error.textContent = msg;

function checkEmail (e) {
    e.preventDefault();
    const email = e.target.querySelector('.email-form__input').value;
    if(!validateEmail(email)) {
        form.classList.add('error');
        form.insertBefore(error, button);
    } else {
        form.classList.remove('error');
        form.removeChild(error);
    }
    console.log(email);
}

function validateEmail (email) {
	const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
form.addEventListener('submit', checkEmail);
