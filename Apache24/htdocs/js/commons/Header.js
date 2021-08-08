/* Header */
var docEle = document.documentElement;
var scrollY = 0;
var prevScrollY = 0;
const headerEle = document.querySelector('.header');

/* Search */
const searchInputEle = document.querySelector('.search-input');
const searchUnderlineEle = document.querySelector('.underline');

/* Dynamic Header */
document.addEventListener('scroll', () => {
    scrollY = (window.pageYOffset || docEle.scrollTop)  - (docEle.clientTop || 0);

    if (scrollY === 0) {
        headerEle.classList.remove('--up');
        headerEle.classList.remove('--down');
    } else if (scrollY < prevScrollY) {
        headerEle.classList.add('--up');
        headerEle.classList.remove('--down');
    } else if (scrollY > 160) {
        headerEle.classList.add('--down');
        headerEle.classList.remove('--up');
    }

    prevScrollY = scrollY;
});

searchInputEle.addEventListener('focus', () => {
    searchUnderlineEle.classList.add('--clicked');
});

searchInputEle.addEventListener('blur', () => {
    searchUnderlineEle.classList.remove('--clicked');
});