$(document).ready(function(){
  AOS.init({
  duration: 600,
  easing: 'ease-out',
  once: true,           // aos 한 번만 실행
  mirror: false,        // 스크롤 역방향에도 다시 실행 안함
});

$(".eyes .hide").hide();

$(".eyes .show").click(function(){
  $(".eyes .show").hide();
  $(".eyes .hide").show();
});

$(".eyes .hide").click(function(){
  $(".eyes .hide").hide();
  $(".eyes .show").show();
});

//스크롤효과
const lenis = new Lenis({

  duration: 2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);



});


//자동 슬라이드 구현
  document.addEventListener("DOMContentLoaded", function () {
  const slideContainer = document.querySelector(".auto-slide");
  const slideItems = slideContainer.querySelectorAll("li");

  let scrollAmount = 0;
  const speed = 1; 

  slideItems.forEach((item) => {
    const clone = item.cloneNode(true);
    slideContainer.appendChild(clone);
  });

  function animate() {
    scrollAmount -= speed;
    if (Math.abs(scrollAmount) >= slideContainer.scrollWidth / 2) {
      scrollAmount = 0;
    }
    slideContainer.style.transform = `translateX(${scrollAmount}px)`;
    requestAnimationFrame(animate);
  }

  animate();
});

//모바일일땐 aos동작 X
document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth > 1200) {
    AOS.init({
      duration: 600,
      once: true
    });
  } else {

    document.querySelectorAll("[data-aos]").forEach(el => {
      el.removeAttribute("data-aos");
      el.classList.remove("aos-animate");
    });
  }
});

//스크롤시 function들 색상 자동생성
document.addEventListener("DOMContentLoaded", function () {
  const section09 = document.querySelector('.section09');
  const functionItems = document.querySelectorAll('.section09 .function li');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        functionItems.forEach(item => {
          item.classList.add('active');
        });
        observer.unobserve(section09); 
      }
    });
  }, {
    threshold: 0.7 
  });

  observer.observe(section09);
});




