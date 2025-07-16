$(document).ready(function(){
  AOS.init({
  duration: 600,
  easing: 'ease-out',
  once: true,           // 한 번만 실행
  mirror: false,        // 스크롤 역방향에도 다시 실행 안함
});

});//끝

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


