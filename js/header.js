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