let btn = document.querySelectorAll(".indicator-btn");
let slide = document.getElementById("testimonial_slider");
let distance = [0, 300, 600, 1200];

for (let i = 0; i < btn.length; i++) {

  btn[i].onclick = function() {

    for (let d = 0; d < distance.length; d++) {

      slide.style.transform = `translateX(-${distance[i]}px)`;

    }

    for (let l = 0; l < btn.length; l++) {

      btn[l].classList.remove("active");

    }

    this.classList.add('active');

  }
  
}