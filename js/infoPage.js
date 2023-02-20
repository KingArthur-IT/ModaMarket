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
    document.querySelector('#changePasswordHero').classList.remove('d-none')
    setTimeout(() => {
        document.querySelector('#changePasswordHero').classList.add('visible')
    }, 100);
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

//отменить заказ
var cancelBtn;

document.querySelectorAll('.cancel-order-btn').forEach(btn => 
    btn.addEventListener('click', () => {
        $('#cancelOrderModal').modal('show');
        cancelBtn = btn
    })    
);

document.querySelector('#cancelOrderModal .btn-outline-danger').addEventListener('click', () => {
    $('#cancelOrderModal').modal('hide');
    if (!cancelBtn) return
    const itemNode = cancelBtn?.parentNode?.parentNode?.parentNode
    if (itemNode) {
        itemNode.classList.add('hidden')
        setTimeout(() => {
            const accBody = itemNode.parentNode
            itemNode.remove()
            //если нет заказов в аккордеоне - удалить его
            if(!accBody.querySelectorAll('.order-item').length)
                accBody.parentNode.parentNode.remove()
            //совсем нет заказов
            if (!document.querySelectorAll('.accordion-item').length) {
                document.querySelector('#ordersEmpty').classList.remove('d-none')
                document.querySelector('#moreOrdersBtn').classList.add('d-none')
            }
        }, 300);
    }
    cancelBtn = ''
});