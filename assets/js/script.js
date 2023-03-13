$(document).on('scroll', function() {
    if($(this).scrollTop() > 50) {
      $('.navbar').addClass('navbar-scrolled');
    } else {
      $('.navbar').removeClass('navbar-scrolled');
    }
  });

 
    


  var pages = document.getElementsByClassName('page');
  for(var i = 0; i < pages.length; i++) {
    var page = pages[i];
    if (i % 2 === 0) {
      page.style.zIndex = (pages.length - i);
    }
  }
  
  
  document.addEventListener('DOMContentLoaded', function(){
    for(var i = 0; i < pages.length; i++) {
      pages[i].pageNum = i + 1;
      pages[i].onclick=function() {
        if (this.classList.contains('flipped')) {
          this.classList.remove('flipped');
          this.nextElementSibling.classList.remove('flipped');
        } else {
          this.classList.add('flipped');
          this.previousElementSibling.classList.add('flipped');
        }
      }
    }
  });

  const books = document.querySelectorAll('.book');

books.forEach(book => {
  book.addEventListener('mouseover', () => {
    book.querySelector('.cover').style.transform = 'rotateY(-180deg)';
    book.querySelector('.pages').style.transform = 'rotateY(-180deg)';
  });

  book.addEventListener('mouseout', () => {
    book.querySelector('.cover').style.transform = 'rotateY(0deg)';
    book.querySelector('.pages').style.transform = 'rotateY(0deg)';
  });
});

