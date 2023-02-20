const sortDropdown = document.querySelector('.catalog__sort-dropdown')

sortDropdown.querySelectorAll('.dropdown-item').forEach(el => 
    el.addEventListener('click', () => {
        sortDropdown.querySelector('button').innerHTML = el.innerHTML
    })    
)