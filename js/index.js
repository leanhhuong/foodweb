// let sections = document.querySelectorAll("section")

// window.onscroll = () => {
//   sections.forEach(sec => {
//     let top = window.scrollY;
//     let offset = sec.offsetTop;
//     let height = sec.offsetHeight;

//     if (top >= offset && top < offset + height) {
//       sec.classList.add("show_animate")
//     } else {
//       sec.classList.remove("show_animate")
//     }
//   })
// }

let sections = document.querySelectorAll("section");

window.onscroll = () => {
  sections.forEach((section) => {
    let sectionTop = section.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;

    if (sectionTop < windowHeight * 0.7) {
      section.classList.add("show_animate");
    } else {
      section.classList.remove("show_animate");
    }
  });
}

// Gọi hàm animateOnScroll khi trang được tải và khi cuộn trang function animateOnScroll
window.addEventListener("load", window.onscroll);

