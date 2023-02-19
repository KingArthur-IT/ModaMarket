//--------------------------------------------
//Панель с раскрывающимся контентом в header-е
const navItems = document.querySelectorAll('.head-nav__item')
const navContent = document.querySelector('.head-nav__content')
const navHero = document.querySelectorAll('.head-nav__hero')

//add header nav
navItems.forEach(item => item.addEventListener('mouseover', () => {
    navHero.forEach(el => el.classList.remove('active'))
    navContent.classList.add('active')
    const attr = item?.getAttribute('data-nav-item')
    if (attr)
        document.querySelector(`.head-nav__hero[data-nav-content='${attr}']`)?.classList.add('active')
}));

//leave header nav
navContent.addEventListener('mouseleave', () => navContent.classList.remove('active'));

document.querySelector('.header__hero').addEventListener('mouseover', () => navContent.classList.remove('active'))

//--------------------------------------------
// Модалка выбора города
document.querySelectorAll('.city-item').forEach((el) => {
    el.addEventListener('click', () => {
        document.getElementById('myCity').innerHTML = el.innerHTML
        $('#selectCityModal').modal('hide');
    })
});

document.querySelector('#selectedCity').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        document.getElementById('myCity').innerHTML = 'г. ' + e.target.value
        $('#selectCityModal').modal('hide');
    }
});

//--------------------------------------------
//login
const emailInput = document.querySelector('#emailLogin')
const passwordInput = document.querySelector('#passwordLogin')
const errorField = document.querySelector('#loginError')
const emailValidator = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

document.querySelector('#loginBtn').addEventListener('click', () => {
    errorField.classList.add('d-none')

    if (!emailValidator.test(emailInput.value)) {
        errorField.classList.remove('d-none')
        errorField.innerHTML = 'Не верный email'
        return
    }
    if (!passwordInput.value) {
        errorField.classList.remove('d-none')
        errorField.innerHTML = 'Не верный пароль'
        return
    }

    //убрать кнопку войти и показать иконку профиля
    loginVisibleEvent()

    //hide modal
    $('#loginModal').modal('hide');

    //set user data
    // document.querySelector('#usernameData').innerHTML = 'User name'
    // document.querySelector('#useremailData').innerHTML = 'User email'
});

//проверить залогиненый ли пользователь уже
if (localStorage.getItem('isLogin') === 'true') {
    document.querySelector('.header__login-btn').classList.remove('visible')
    document.querySelector('.header__login-btn').classList.add('d-none')
    document.querySelector('.profile').classList.remove('d-none')
    document.querySelector('.profile').classList.add('visible')
}

//--------------------------------------------
//register
const nameRegInput = document.querySelector('#nameRegister')
const emailRegInput = document.querySelector('#emailRegister')
const passwordRegInput = document.querySelector('#passwordRegister')
const repeatPasswordRegInput = document.querySelector('#repeatPasswordRegister')
const errorFieldReg = document.querySelector('#registerError')

document.querySelector('#registerBtn').addEventListener('click', () => {
    errorFieldReg.classList.add('d-none')

    if (nameRegInput.value.length < 4) {
        errorFieldReg.classList.remove('d-none')
        errorFieldReg.innerHTML = 'Имя должно быть не короче 4 символов'
        return
    }
    if (!emailValidator.test(emailRegInput.value)) {
        errorFieldReg.classList.remove('d-none')
        errorFieldReg.innerHTML = 'Не верный email'
        return
    }
    if (passwordRegInput.value.length < 6) {
        errorFieldReg.classList.remove('d-none')
        errorFieldReg.innerHTML = 'Пароль не должен быть короче 6 символов'
        return
    }
    if (passwordRegInput.value !== repeatPasswordRegInput.value) {
        errorFieldReg.classList.remove('d-none')
        errorFieldReg.innerHTML = 'Пароли не совпадают'
        return
    }

    //убрать кнопку войти и показать иконку профиля
    loginVisibleEvent()
    //hide modal
    $('#registerModal').modal('hide');

    //set user data
    // document.querySelector('#usernameData').innerHTML = 'User name'
    // document.querySelector('#useremailData').innerHTML = 'User email'
});

document.querySelector('#openLoginModal').addEventListener('click', () => {
    $('#registerModal').modal('hide');
    $('#loginModal').modal('show');
});

document.querySelector('#openRegisterModal').addEventListener('click', () => {
    $('#loginModal').modal('hide');
    $('#registerModal').modal('show');
});

document.querySelector('#openForgotModal').addEventListener('click', () => {
    $('#loginModal').modal('hide');
    $('#forgotPasswordModal').modal('show');
});

//--------------------------------------------
//forgot password
const emailForgotInput = document.querySelector('#emailForgotPass')
const errorForgotField = document.querySelector('#forgotError')

document.querySelector('#forgotBtn').addEventListener('click', () => {
    errorForgotField.classList.add('d-none')

    if (!emailValidator.test(emailForgotInput.value)) {
        errorForgotField.classList.remove('d-none')
        errorForgotField.innerHTML = 'Не верный email'
        return
    }

    //hide modal
    $('#forgotPasswordModal').modal('hide');
    $('#resetPasswordModal').modal('show');
});

//--------------------------------------------
//logout
document.querySelector('#logout').addEventListener('click', logoutVisibleEvent);

//--------------------------------------------
//search in header
document.querySelector('#headerSearchToggle').addEventListener('click', () => {
    document.querySelector('.header__search').classList.toggle('active')
})

//--------------------------------------------
function loginVisibleEvent() {
    document.querySelector('.header__login-btn').classList.remove('visible')
    setTimeout(() => {
        document.querySelector('.header__login-btn').classList.add('d-none')
        document.querySelector('.profile').classList.remove('d-none')
        setTimeout(() => {
            document.querySelector('.profile').classList.add('visible')
        }, 200);
    }, 300);
    localStorage.setItem('isLogin', true)
}

function logoutVisibleEvent() {
    document.querySelector('.profile').classList.remove('visible')
    setTimeout(() => {
        document.querySelector('.profile').classList.add('d-none')
        document.querySelector('.header__login-btn').classList.remove('d-none')
        setTimeout(() => {
            document.querySelector('.header__login-btn').classList.add('visible')
        }, 200);
    }, 300);
    localStorage.setItem('isLogin', false)
}