//remove from favorites
document.querySelectorAll('#favoriteList .basket__favourite').forEach(el => 
    el.addEventListener('click', () => {
        const itemNode = el.parentNode?.parentNode?.parentNode
        if (itemNode) {
            itemNode.classList.add('hidden')
            setTimeout(() => {
                itemNode.remove()
                //if there is no items in favorites more
                if (!document.querySelectorAll('#favoriteList .basket__item').length) {
                    document.querySelector('#favoriteList').classList.add('d-none')
                    document.querySelector('#favoriteEmpty').classList.remove('d-none')
                    setTimeout(() => {
                        document.querySelector('#favoriteEmpty').classList.add('visible')
                    }, 200);
                }
            }, 300);
        }
    })    
)