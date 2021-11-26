const registration = document.forms.registration
const signIn = document.forms.signIn

const patients = JSON.parse(localStorage.getItem('patients')) || []

const regForm = () => {
    const name = registration.name.value
    const surname = registration.surname.value
    const date = registration.date.value
    const age = registration.age.value
    const gender = document.querySelector('input[type="radio"]:checked').value
    const address = registration.address.value
    const phone = registration.phone.value
    const email = registration.email.value
    const password = registration.password.value
    const conditions = registration.conditions.checked

    const patient = {
        name,
        surname,
        date,
        age,
        gender,
        address,
        phone,
        email,
        password,
        conditions,
    }
    if (patients.find(item => item.email === email)) {
        alert('This name is already exist!')
        return;
    }
    if (password.length < 8) {
        alert('The password must be longer than 8 characters!')
        return;
    }
    alert('Thanks! You Registered!')

    patients.push(patient)
    localStorage.setItem('patients', JSON.stringify(patients))
    registration.reset()
}

registration.addEventListener('submit', (e) => {
    e.preventDefault()
    regForm()
})

const users = [{
    email: '001asylbek@gmail.com',
    password: '12345678',
}]

const signInForm = () => {
    const email = registration.email.value
    const password = registration.password.value

    const user = users.find(item => item.email === email)

    if (!user) {
        alert('Your Email is not correct!')
        return;
    }
    if (user.password !== password) {
        alert('Your Password is not correct!')
        return;
    }
    users.push(user)
    alert(`Welcome ${name}! You Sign In!`)
    signIn.reset()

signIn.addEventListener('submit', (e) => {
    e.preventDefault()
    signInForm()
})}

const openForm = document.querySelector('#regFormBtn')
const signInBtn = document.querySelector('#signInBtn')
const healthPic = document.querySelector('.health')

openForm.addEventListener('click', () => {
    registration.hidden = false
    signIn.hidden = true
    healthPic.hidden = true
})


signInBtn.addEventListener('click', () => {
    signIn.hidden = false
    registration.hidden = true
    healthPic.hidden = true
})

const regBtn = document.querySelector('#regBtn')
regBtn.addEventListener('click', () => {
})

const resetBtn = document.querySelector('#resetBtn')
resetBtn.addEventListener('click', () => {
    alert('Are you sure?')
})