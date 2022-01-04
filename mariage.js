const candidate = document.getElementById('candidate');
const year = document.getElementById('year');
const marriageBtn = document.getElementById('mariage_button');
const mariageResult = document.getElementById('mariage_result');

const mariageStatus = () => {
    const gender = document.querySelector('input[type="radio"]:checked');
    const userBirthYear = year.value;
    const candidateName = candidate.value;

    const date = new Date();
    const userAge = date.getFullYear() - userBirthYear;

    if (gender.value === 'male' && userAge > 0) {
        if (userAge > 0 && userAge < 21) {
            return `<p class="alert-danger">Hello!! ${candidateName}. You are ${userAge} years old. You are not eligible for mariage</p>`;
        }
        return `<p class="alert-primary">Hello!! ${candidateName}. You are ${userAge} years old. You are eligible for marriage</p>`;
    }
    if (gender.value === 'female' && userAge > 0) {
        if (userAge > 0 && userAge < 18) {
            return `<p class="alert-danger">Hello !! ${candidateName}. You are ${userAge} years old. Your are not eligible for mariage</p>`;
        }
        return `<p class="alert-primary">Hello !! ${candidateName}. You are ${userAge} years old. Your are eligible for mariage</p>`;
    }
    return '<p class="alert-warning">Please, Enter Valid Information</p>';
};

candidate.addEventListener('blur', (e) => {
    e.preventDefault();
    checkRequired([candidate]);
});
year.addEventListener('blur', (e) => {
    e.preventDefault();
    checkRequired([year]);
});
marriageBtn.addEventListener('click', (e) => {
    e.preventDefault();
    mariageResult.innerHTML = mariageStatus();
    candidate.value = '';
    year.value = '';
});
