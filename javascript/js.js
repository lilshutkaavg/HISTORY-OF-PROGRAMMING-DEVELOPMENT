var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1
  }

  if (n < 1) {
    slideIndex = slides.length
  }
  
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[slideIndex-1].style.display = "block";

  dots[slideIndex-1].className += " active";
}


document.querySelector('.dropdown > a').addEventListener('click', function(e) {
  e.preventDefault();
  const menu = this.nextElementSibling;
  menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});

document.addEventListener('DOMContentLoaded', function() {
  const menuToggle = document.createElement('div');
  menuToggle.className = 'menu-toggle';
  menuToggle.innerHTML = '<span></span><span></span><span></span>';
  
  const header = document.querySelector('.header');
  header.insertBefore(menuToggle, header.querySelector('.contact'));
  
  const navbar = document.querySelector('.navbar');
  
  menuToggle.addEventListener('click', function() {
    this.classList.toggle('active');
    navbar.classList.toggle('active');
  });

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function() {
      menuToggle.classList.remove('active');
      navbar.classList.remove('active');
    });
  });

 document.querySelectorAll('.dropdown > a').forEach(dropdownToggle => {
    dropdownToggle.addEventListener('click', function(e) {
      if (window.innerWidth <= 878) {
        e.preventDefault();
        const dropdown = this.parentElement;
        dropdown.classList.toggle('active');
        
        // Закрываем другие открытые dropdown
         document.querySelectorAll('.dropdown').forEach(otherDropdown => {
          if (otherDropdown !== dropdown && otherDropdown.classList.contains('active')) {
            otherDropdown.classList.remove('active');
          }
        });
      }
    });
  });

  document.addEventListener('click', function(e) {
    if (window.innerWidth <= 878) {
      if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown').forEach(dropdown => {
          dropdown.classList.remove('active');
        });
      }
    }
  });
  
  const dropdown = document.querySelector('.dropdown > a');
  if (dropdown) {
    dropdown.addEventListener('click', function(e) {
      if (window.innerWidth <= 878) {
        e.preventDefault();
        this.parentElement.classList.toggle('active');
      }
    });
  }
});

let lastScrollPosition = 0;
const header = document.querySelector('.header');
const navbar = document.querySelector('.navbar');
const SCROLL_THRESHOLD = 10; 

window.addEventListener('scroll', function() {
    const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScrollPosition > lastScrollPosition && currentScrollPosition > SCROLL_THRESHOLD) {
        header.style.transform = 'translateY(-250%)';
        header.style.transition = 'transform 0.3s ease';
    } 
    else if (currentScrollPosition < lastScrollPosition) {
        header.style.transform = 'translateY(-30%)';
        header.style.transition = 'transform 0.3s ease';
    }
    
    lastScrollPosition = currentScrollPosition;
    
    if (currentScrollPosition > 50) {
        header.style.background = 'rgba(20, 22, 25, 0.95)';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.background = 'transparent';
        header.style.boxShadow = 'none';
    }
});

window.addEventListener('scroll', function() {
    if (window.innerWidth <= 878) {
        const menuToggle = document.querySelector('.menu-toggle');
        if (menuToggle && menuToggle.classList.contains('active')) {
            menuToggle.classList.remove('active');
            navbar.classList.remove('active');
        }
    }
});


document.addEventListener("DOMContentLoaded", function () {
            const dropdowns = document.querySelectorAll('.dropdown');

            dropdowns.forEach(dropdown => {
                dropdown.querySelector('.dropbtn').addEventListener('click', function () {
                    const menu = dropdown.querySelector('.dropdown-menu');
                    if (menu.classList.contains('show')) {
                        menu.classList.remove('show'); // Закрыть меню, если оно открыто
                    } else {
                        menu.classList.add('show'); // Открыть меню, если оно закрыто
                    }
                });
            });

            // Закрытие выпадающего меню при нажатии вне его
            window.addEventListener('click', function (event) {
                dropdowns.forEach(dropdown => {
                    const menu = dropdown.querySelector('.dropdown-menu');
                    if (!dropdown.contains(event.target)) {
                        menu.classList.remove('show'); // Закрыть меню, если клик вне
                    }
                });
            });
        });









        // === Кнопка "Наверх" ===
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById('backToTop');

  // Показать/скрыть кнопку при прокрутке
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btn.style.display = 'block';
    } else {
      btn.style.display = 'none';
    }
  });

  // Плавная прокрутка наверх при клике
  btn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});