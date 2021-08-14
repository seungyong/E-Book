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
const searchInput = document.querySelector('.search-input');
const searchImg = document.querySelector('.search-img');

// Enter 누르면 검색
searchInput.addEventListener('keyup', (event) => {
   if (event.keyCode === 13) { search(event.target.value); }
});

// 검색 아이콘 누르면 검색
searchImg.addEventListener('click', () => {
    let keyword = searchInput.value;
    search(keyword)
});

// 검색
function search(keyword) {
    if (keyword === undefined) return;

    let duplicate = false;
    let historyList = [];
    let storageHistory = [];
    let storageSearch = window.localStorage.search;

    if (storageSearch !== undefined){
        historyList = storageSearch.split(',');
        historyList.forEach((e, i) => {
            if (e === keyword) {
                // 중복된 검색어를 찾아 맨 앞으로 보냄
                historyList.splice(historyList.indexOf(keyword), 1);
                historyList.unshift(keyword);

                window.localStorage.search = historyList;
                duplicate = true;
            }
        })
    }

    if (duplicate === true) return;

    if (historyList !== []) storageHistory = storageHistory.concat(historyList);
    storageHistory.unshift(keyword);

    window.localStorage.search = storageHistory;
}

// 검색기록을 가져와서 검색기록창에 넣어줌
function addHistory() {
    historyBoxEle.innerHTML = '';

    // Array
    let storageSearch = window.localStorage.search;

    if (storageSearch === undefined) return;

    let history = storageSearch.split(',');
    
    // 검색기록이 8개 이상이라면 자르기
    if (history.length > 8) {
        window.localStorage.storageSearch = history.splice(0,8);
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
        
        // 검색 삭제 버튼
        historyDeleteImgEle.addEventListener('click', (event) => { 
            deleteHistory(event);
        });
        historyDeleteBoxEle.appendChild(historyDeleteImgEle);

        // 검색기록 클릭 시
        historyEle.addEventListener('click', (event) => { search(event.target.innerText); })
        historyEle.appendChild(historyNameEle);
        historyEle.appendChild(historyDeleteBoxEle);

        historyBoxEle.appendChild(historyEle);
    });

    // 검색창 클릭 시 검색기록창 닫지 않기
    document.body.addEventListener('click', (event) => {
        if(event.target === historyBoxEle || event.target === searchInputEle) return;

        historyBoxEle.innerHTML = '';
        historyBoxEle.classList.add('none');
        document.body.removeEventListener('click', () => {});
    });

    historyBoxEle.classList.remove('none');
}

// 검색기록 삭제
function deleteHistory(event) {
    // event.stopPropagation() => 부모 요소한테 event를 전달하지 않음
    event.stopPropagation();

    let keyword = event.target.parentElement.parentElement.innerText;
    let historyList = window.localStorage.search.split(',');
    historyList.splice(historyList.indexOf(keyword), 1);

    window.localStorage.search = historyList;
    addHistory();
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