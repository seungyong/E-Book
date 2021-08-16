
// Carousel
var slideIndex = 0;
const carouselBoxEle = document.querySelector('.carousel-box');
const titleEle = document.querySelector('.explan-box__title');
const subTitleEle = document.querySelector('.explan-box__sub-title');
const explanEle = document.querySelector('.explan-box__explanation');

// Y좌표 확인
document.addEventListener('scroll', checkY);

// Book Contents
var bookList = [];
const contentsBoxEle = document.querySelector('.contents-box');

getBookList();
showSlides();
setCarouselHeight();

function getBookList() {
  bookList = [
    {
      kinds: '인기',
      books: [
        {
          bookName: '스텔라 오디세이 트릴로지',
          author: '김보영',
          thumbnail: '../assets/img/book1.png',
          explan: '아무 생각 없이 퍼왔지만 모든 더미데이터에 사용하고 있는 더미데이터! <br><br> 완전 개꿀이다!'
        },
        {
          bookName: '스텔라 오디세이 트릴로지',
          author: '김보영',
          thumbnail: '../assets/img/book1.png',
          explan: '아무 생각 없이 퍼왔지만 모든 더미데이터에 사용하고 있는 더미데이터! <br><br> 완전 개꿀이다!'
        },
        {
          bookName: '스텔라 오디세이 트릴로지',
          author: '김보영',
          thumbnail: '../assets/img/book1.png',
          explan: '아무 생각 없이 퍼왔지만 모든 더미데이터에 사용하고 있는 더미데이터! <br><br> 완전 개꿀이다!'
        },
        {
          bookName: '스텔라 오디세이 트릴로지',
          author: '김보영',
          thumbnail: '../assets/img/book1.png',
          explan: '아무 생각 없이 퍼왔지만 모든 더미데이터에 사용하고 있는 더미데이터! <br><br> 완전 개꿀이다!'
        },
        {
          bookName: '스텔라 오디세이 트릴로지',
          author: '김보영',
          thumbnail: '../assets/img/book1.png',
          explan: '아무 생각 없이 퍼왔지만 모든 더미데이터에 사용하고 있는 더미데이터! <br><br> 완전 개꿀이다!'
        },
        {
          bookName: '스텔라 오디세이 트릴로지',
          author: '김보영',
          thumbnail: '../assets/img/book1.png',
          explan: '아무 생각 없이 퍼왔지만 모든 더미데이터에 사용하고 있는 더미데이터! <br><br> 완전 개꿀이다!'
        },
      ]
    },
    {
      kinds: '신간',
      books: [
        {
          bookName: '윤성빈과 함께하는 로아',
          author: '윤성빈',
          thumbnail: '../assets/img/book1.png',
          explan: '윤성빈 결국 모든 강화에 실패하고 마는데... <br><br> 그의 도전은 여기서 끝인건가..? <br><br> 윤성빈의 로아 실패작을 담은 엄청난 베스트셀러!'
        },
        {
          bookName: '윤성빈과 함께하는 로아',
          author: '윤성빈',
          thumbnail: '../assets/img/book1.png',
          explan: '윤성빈 결국 모든 강화에 실패하고 마는데... <br><br> 그의 도전은 여기서 끝인건가..? <br><br> 윤성빈의 로아 실패작을 담은 엄청난 베스트셀러!'
        },
        {
          bookName: '윤성빈과 함께하는 로아',
          author: '윤성빈',
          thumbnail: '../assets/img/book1.png',
          explan: '윤성빈 결국 모든 강화에 실패하고 마는데... <br><br> 그의 도전은 여기서 끝인건가..? <br><br> 윤성빈의 로아 실패작을 담은 엄청난 베스트셀러!'
        },
        {
          bookName: '윤성빈과 함께하는 로아',
          author: '윤성빈',
          thumbnail: '../assets/img/book1.png',
          explan: '윤성빈 결국 모든 강화에 실패하고 마는데... <br><br> 그의 도전은 여기서 끝인건가..? <br><br> 윤성빈의 로아 실패작을 담은 엄청난 베스트셀러!'
        },
        {
          bookName: '윤성빈과 함께하는 로아',
          author: '윤성빈',
          thumbnail: '../assets/img/book1.png',
          explan: '윤성빈 결국 모든 강화에 실패하고 마는데... <br><br> 그의 도전은 여기서 끝인건가..? <br><br> 윤성빈의 로아 실패작을 담은 엄청난 베스트셀러!'
        },
        {
          bookName: '윤성빈과 함께하는 로아',
          author: '윤성빈',
          thumbnail: '../assets/img/book1.png',
          explan: '윤성빈 결국 모든 강화에 실패하고 마는데... <br><br> 그의 도전은 여기서 끝인건가..? <br><br> 윤성빈의 로아 실패작을 담은 엄청난 베스트셀러!'
        },
      ]
    },
    {
      kinds: '추천',
      books: [
        {
          bookName: '아 집가고싶다 ㅋㅋ',
          author: '김승용',
          thumbnail: '../assets/img/book1.png',
          explan: '집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘'
        },
        {
          bookName: '아 집가고싶다 ㅋㅋ',
          author: '김승용',
          thumbnail: '../assets/img/book1.png',
          explan: '집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘'
        },
        {
          bookName: '아 집가고싶다 ㅋㅋ',
          author: '김승용',
          thumbnail: '../assets/img/book1.png',
          explan: '집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘'
        },
        {
          bookName: '아 집가고싶다 ㅋㅋ',
          author: '김승용',
          thumbnail: '../assets/img/book1.png',
          explan: '집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘'
        },
        {
          bookName: '아 집가고싶다 ㅋㅋ',
          author: '김승용',
          thumbnail: '../assets/img/book1.png',
          explan: '집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘'
        },
        {
          bookName: '아 집가고싶다 ㅋㅋ',
          author: '김승용',
          thumbnail: '../assets/img/book1.png',
          explan: '집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘집보내줘'
        },
      ]
    },
  ];

  bookList.forEach((e, i) => {
    // container
    let backColorEle = document.createElement('div');
    let bookCenterEle = document.createElement('div');

    // book top
    let bookTopEle = document.createElement('div');
    let contentsTitleEle = document.createElement('div');
    let moreEle = document.createElement('div');

    // books
    let booksEle = document.createElement('div');

    bookCenterEle.className = 'book__center';
    bookTopEle.className = 'book-top';
    contentsTitleEle.className = 'contents-title';
    moreEle.className = 'more';
    booksEle.className = 'books';
    
    // 짝수면 회색배경, 홀수면 하얀 배경
    if (i === 0 || i % 2 === 0) { backColorEle.className = 'back--gray'; }
    else { backColorEle.className = 'back--white' }
    
    contentsTitleEle.innerText = e.kinds;
    moreEle.innerText = '더보기 >';

    // 책 하나당 Element 만들어서 넣기
    e.books.forEach((book) => {
      let bookEle = document.createElement('div');
      let bookImgEle = document.createElement('img');
      let bookNameEle = document.createElement('div');
      let bookAuthorEle = document.createElement('div');
      let bookImgBoxEle = document.createElement('div');
      let bookExplanBoxEle = document.createElement('div');
      let bookExplanEle = document.createElement('div');

      bookImgBoxEle.className = 'book-img-box';

      bookEle.className = 'book';
      bookImgEle.className = 'book-img';
      bookNameEle.className = 'book-name';
      bookAuthorEle.className = 'book-author';
      bookExplanBoxEle.className = 'book-explan-box';
      bookExplanEle.className = 'book-explan';

      bookNameEle.innerText = book.bookName;
      bookImgEle.src = book.thumbnail;
      bookImgEle.alt = book.bookName;
      bookAuthorEle.innerText = book.author;
      bookExplanEle.innerHTML = book.explan;
      
      bookExplanBoxEle.appendChild(bookExplanEle);
      bookImgBoxEle.appendChild(bookExplanBoxEle);
      bookImgBoxEle.appendChild(bookImgEle);
      bookEle.appendChild(bookImgBoxEle);
      bookEle.appendChild(bookNameEle);
      bookEle.appendChild(bookAuthorEle);

      booksEle.appendChild(bookEle);

      bookExplanEle.addEventListener(('mouseover'), () => {
        bookExplanEle.style.animationDuration = '0.7s';
        bookExplanEle.style.animationFillMode = 'forwards';
        bookExplanEle.style.animationTimingFunction = 'steps(29)';
        bookExplanEle.style.animationName = 'openExplan';
      });
    
      bookExplanEle.addEventListener(('mouseout'), () => {
        bookExplanEle.style.animationDuration = '0.7s';
        bookExplanEle.style.animationFillMode = 'forwards';
        bookExplanEle.style.animationTimingFunction = 'steps(29)';
        bookExplanEle.style.animationName = 'closeExplan';
      });
    });

    bookTopEle.appendChild(contentsTitleEle);
    bookTopEle.appendChild(moreEle);

    bookCenterEle.appendChild(bookTopEle);
    bookCenterEle.appendChild(booksEle);
    backColorEle.appendChild(bookCenterEle);
    contentsBoxEle.appendChild(backColorEle);
  });
}

function setCarouselHeight() {
  let windowHeight = window.innerHeight;
  let headerHeight = document.querySelector('.header').clientHeight;
  let height = windowHeight - headerHeight;

  console.log(windowHeight, headerHeight, height);

  carouselBoxEle.style.height = `${height}px`;
}

function showSlides() {
    var i;
    var slides = document.querySelectorAll('.slides');
    var dots = document.querySelectorAll('.dot');

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }

    slideIndex++;

    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" dot--active", "");
    }

    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " dot--active";
    setTimeout(showSlides, 3000);
}

function checkY() {
  let scrollY = (window.pageYOffset || docEle.scrollTop)  - (docEle.clientTop || 0);

  if (scrollY > 200) {
    titleEle.classList.add('--title-active');
    subTitleEle.classList.add('--sub-title-active');
    explanEle.classList.add('--explan-active');

    document.removeEventListener('scroll', checkY);
  }
}

// var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   var dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }