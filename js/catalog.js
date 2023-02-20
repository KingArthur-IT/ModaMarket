//sort dropdown
const sortDropdown = document.querySelector('.catalog__sort-dropdown')

sortDropdown.querySelectorAll('.dropdown-item').forEach(el => 
    el.addEventListener('click', () => {
        sortDropdown.querySelector('button').innerHTML = el.innerHTML
    })    
);

//mobile filters modal
document.querySelector('.catalog__mob-filters').addEventListener('click', () => {
    $('#filtersModal').modal('show');
});