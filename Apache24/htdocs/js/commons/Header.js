/* Header */
var docEle = document.documentElement;
var scrollY = 0;
var prevScrollY = 0;
const headerEle = document.querySelector('.header');

/* Search */
const searchInputEle = document.querySelector('.search-input');
const searchUnderlineEle = document.querySelector('.underline');
const historyBoxEle = document.querySelector('.history-box');
const allDeleteEle = document.querySelector('.all-delete');

function addHistory() {
    historyBoxEle.innerHTML = '';

    // Array
    let search = window.localStorage.search;

    if (search === undefined) return;

    let history = search.split(',');
    
    if (history.length > 8) {
        window.localStorage.search = history.splice(0,8);
        history = history.splice(0,8);
    }

    history.forEach((e) => {
        let historyEle = document.createElement('div');
        let historyNameEle = document.createElement('div');
        let historyDeleteBoxEle = document.createElement('div');
        let historyDeleteImgEle = document.createElement('img');

        historyEle.className = 'history';
        historyNameEle.className = 'history-name';
        historyDeleteBoxEle.className = 'history-delete-box';
        historyDeleteImgEle.className = 'history-delete-img';
        historyDeleteImgEle.src = '../../assets/img/delete.png';

        historyNameEle.innerText = e;

        historyDeleteBoxEle.appendChild(historyDeleteImgEle);
        historyEle.appendChild(historyNameEle);
        historyEle.appendChild(historyDeleteBoxEle);

        historyBoxEle.appendChild(historyEle);
    });

    document.body.addEventListener('click', (event) => {
        if(event.target === historyBoxEle || event.target === searchInputEle) return;

        historyBoxEle.innerHTML = '';
        historyBoxEle.classList.add('none');
        document.body.removeEventListener('click', () => {});
    });

    historyBoxEle.classList.remove('none');
}

// Search All Delete
allDeleteEle.addEventListener('click', () => {
    historyBoxEle.innerHTML = '';
    window.localStorage.clear();
    historyBoxEle.classList.add('none');
});

// Dynamic Header
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

searchInputEle.addEventListener('mouseover', () => {
    searchUnderlineEle.classList.add('--hover');
});

searchInputEle.addEventListener('mouseout', () => {
    searchUnderlineEle.classList.remove('--hover');
});

searchInputEle.addEventListener('focus', () => {
    searchUnderlineEle.classList.add('--clicked');

    addHistory();
});

searchInputEle.addEventListener('blur', () => {
    searchUnderlineEle.classList.remove('--clicked');
});

// historyBoxEle.classList.add('none');