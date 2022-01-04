const name = document.getElementById('name');
const birthYear = document.getElementById('birthyear');
const ageButton = document.getElementById('age_button');
const ageResult = document.getElementById('age_result');

/// // function here
/* eslint-disable no-unused-vars */
/// ////////// Age status function here
const ageCalStatus = (age) => {
    if (age > 0 && age <= 10) {
        return {
            name: 'Baby',
            status: 'primary',
        };
    }
    if (age > 10 && age <= 22) {
        return {
            name: 'Jobok',
            status: 'success',
        };
    }
    if (age > 22 && age <= 35) {
        return {
            name: 'Young',
            status: 'info',
        };
    }
    if (age > 35 && age <= 60) {
        return {
            name: 'Old',
            status: 'warning',
        };
    }
    if (age > 60 && age <= 100) {
        return {
            name: 'Very-Old',
            status: 'danger',
        };
    }
    return {
        name: 'Bhoot / Jin',
        status: 'dark',
    };
};

/// /////// age cal function here
const ageCal = (nameUser, year) => {
    if (year) {
        const date = new Date();
        const age = date.getFullYear() - year;

        const statusCheck = ageCalStatus(age);
        return ` <p class = "alert-${statusCheck.status} p-4"> Hi ${nameUser} you are ${age} years Old & You are ${statusCheck.name} </p>`;
    }
    return false;
};

name.addEventListener('blur', (e) => {
    e.preventDefault();
    checkRequired([name]);
});

birthYear.addEventListener('blur', (e) => {
    e.preventDefault();
    checkRequired([birthYear]);
});

ageButton.addEventListener('click', (e) => {
    e.preventDefault();
    ageResult.innerHTML = '';
    checkRequired([name, birthYear]);
    const ageFinalResult = ageCal(name.value, birthYear.value);

    if (name.value.trim() === '' || birthYear.value.trim() === '' || !ageFinalResult) {
        return null;
    }
    ageResult.innerHTML = ageFinalResult;
});
