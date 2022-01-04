const form = document.getElementById('validate_form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmedPassword = document.getElementById('password2');

// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Check email is valid
function checkEmail(input) {
    // eslint-disable-next-line operator-linebreak
    const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input);
    } else {
        showError(input, 'Email is not valid');
    }
}

/// /// get fieldName
function getFieldName(input) {
    if (input === confirmedPassword) {
        return input.id.charAt(0).toUpperCase() + input.id.slice(1, -1);
    }
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Check required fields
function checkRequired(inputArr) {
    inputArr.forEach((input) => {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

// Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    } else {
        showSuccess(input);
    }
}

// Check passwords match
function checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}

// Get fieldname

// Event listeners
form.addEventListener('submit', (e) => {
    e.preventDefault();

    checkRequired([username, email, password, confirmedPassword]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordsMatch(password, confirmedPassword);
});

username.addEventListener('blur', (e) => {
    e.preventDefault();
    checkLength(username, 3, 15);
});

email.addEventListener('blur', (e) => {
    e.preventDefault();
    checkEmail(email);
});

password.addEventListener('blur', (e) => {
    e.preventDefault();
    checkLength(password, 6, 25);
});

confirmedPassword.addEventListener('blur', (e) => {
    e.preventDefault();
    checkLength(confirmedPassword, 6, 25);
});
