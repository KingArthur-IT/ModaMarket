//редактирование и сохранение данных имени и почты на странице моих данных
['nameInput', 'emailInput'].forEach(element => {
    document.querySelector(`#${element}Btn`).addEventListener('click', () => {
        const input = document.querySelector(`#${element}`)
        if (input.hasAttribute('readonly')) {
            input.removeAttribute('readonly')
        } else {
            input.setAttribute('readonly', true)
            const newValue = document.querySelector(`#${element}`).value
            console.log(`new Value of ${element} is `, newValue);
        }
    })
});

//открыть поле редактирования пароля
document.querySelector('#changePasswordLink').addEventListener('click', (e) => {
    e.target.classList.add('d-none')
    document.querySelector('#changePassordHero').classList.remove('d-none')
});

//кнопка сохранить пароль
document.querySelector('#changePasswordBtn').addEventListener('click', () => {
    const oldPassword = document.querySelector('#oldPassword')?.value
    const newPassword = document.querySelector('#newPassword')?.value
    const repeatNewPassword = document.querySelector('#repeatNewPassword')?.value

    const errorField = document.querySelector('#passwordError')
    errorField.classList.add('d-none')

    if (!oldPassword || !newPassword || !repeatNewPassword) {
        errorField.classList.remove('d-none')
        errorField.innerHTML = 'Заполните все поля'
        return
    } 

    if (newPassword !== repeatNewPassword) {
        errorField.classList.remove('d-none')
        errorField.innerHTML = 'Пароли не совпадают'
        return
    }
});