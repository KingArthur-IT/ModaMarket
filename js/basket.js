//посчитать сумму корзины
calculateResume();

//кнопка "оформить"
document.querySelector('#preOrderBtn').addEventListener('click', () => {
    document.querySelector('#contactsDataCard').classList.remove('d-none')
    setTimeout(() => {
        document.querySelector('#contactsDataCard').classList.add('visible')
    }, 200);
});

//для карточки "заказать"
const nameInputOrder = document.querySelector('#nameOrder')
const emailInputOrder = document.querySelector('#emailOrder')
const telInputOrder = document.querySelector('#telOrder')
const adressInputOrder = document.querySelector('#adressOrder')
const commentInputOrder = document.querySelector('#commentOrder')
const errorFieldOrder = document.querySelector('#errorOrder')
const emailValidatorOrder = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

document.querySelector('#orderBtn').addEventListener('click', () => {
    errorFieldOrder.classList.add('d-none')

    if (!emailValidatorOrder.test(emailInputOrder.value)) {
        errorFieldOrder.classList.remove('d-none')
        errorFieldOrder.innerHTML = 'Не верный email'
        return
    }
    if (!nameInputOrder.value) {
        errorFieldOrder.classList.remove('d-none')
        errorFieldOrder.innerHTML = 'Введите Ваше имя'
        return
    }
    if (!telInputOrder.value) {
        errorFieldOrder.classList.remove('d-none')
        errorFieldOrder.innerHTML = 'Введите Ваш телефон'
        return
    }
    if (!adressInputOrder.value) {
        errorFieldOrder.classList.remove('d-none')
        errorFieldOrder.innerHTML = 'Введите Ваш адрес'
        return
    }

    $('#successOrderModal').modal('show');
});

//кнопки +- для каждой одежды в корзине
document.querySelectorAll('.basket__num-btn').forEach(el => {
    el.addEventListener('click', () => {
        const isIncrement = 'true' === el.getAttribute('data-increment')
        const prodId = el.getAttribute('data-prod-id')
        
        const prodCountDiv = document.querySelector(`.product__count[data-prod-id='${prodId}']`)
        const prodCount = Number(prodCountDiv.innerHTML)

        if (isIncrement)
            prodCountDiv.innerHTML = prodCount + 1
        if (!isIncrement && prodCount > 1)
            prodCountDiv.innerHTML = prodCount - 1

        calculateResume()
    })
});

//в избранное
document.querySelectorAll('.basket__favourite').forEach(el => {
    el.addEventListener('click', () => {
        el.classList.toggle('active')
    })
});

//удалить товар из корзины
document.querySelectorAll('#basketList .basket__trash').forEach(el => 
    el.addEventListener('click', () => {
        const itemNode = el.parentNode?.parentNode?.parentNode
        if (itemNode) {
            itemNode.classList.add('hidden')
            if (document.querySelectorAll('#basketList .basket__item').length === 1) 
                document.querySelectorAll('.basket__card').forEach(el => el.classList.remove('visible'))
            setTimeout(() => {
                itemNode.remove()
                //if there is no items in favorites more
                if (!document.querySelectorAll('#basketList .basket__item').length) {
                    document.querySelector('#basketList').classList.add('d-none')
                    document.querySelector('#basketEmpty').classList.remove('d-none')
                    setTimeout(() => {
                        document.querySelector('#basketEmpty').classList.add('visible')
                    }, 200);
                } else calculateResume()
            }, 300);
        }
    })    
)

//функция расчета суммы товаров в корзине
function calculateResume() {
    let oldSumm = 0,
        discountSumm = 0;
    
    document.querySelectorAll('.basket__item').forEach(item => {
        const old = Number(item.querySelector('.price__old span').innerHTML)
        const discount = Number(item.querySelector('.price__label span').innerHTML)
        const count = Number(item.querySelector('.product__count').innerHTML)
    
        oldSumm += old * count
        discountSumm += (old * discount / 100) * count
    });
    
    document.querySelector('#basket-prod-count span').innerHTML = document.querySelectorAll('.basket__item').length
    document.querySelector('#basket-prod-summ span').innerHTML = oldSumm
    document.querySelector('#basket-prod-discount span').innerHTML = discountSumm
    document.querySelector('#basket-prod-total span').innerHTML = oldSumm - discountSumm
}

