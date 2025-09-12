const navToggle = document.getElementById('nav');   
const linknav = document.querySelector('.mobilelink'); 


navToggle.addEventListener('click', (e) => {
  e.stopPropagation(); 
  linknav.style.display = (linknav.style.display === "flex") ? "none" : "flex";
});


document.addEventListener('click', (e) => {
  if (!linknav.contains(e.target) && !navToggle.contains(e.target)) {
    linknav.style.display = "none";
  }
});



const texts = ["Frontend Developer", "WordPress Developer", "Mentor", "Tech Enthusiast"];
let count = 0;
let index = 0;
let currentText = "";
let isDeleting = false;

function type() {
    currentText = texts[count];
    
    if (isDeleting) {
        // remove characters
        index--;
    } else {
        // add characters
        index++;
    }

    document.getElementById("textDY").textContent = currentText.slice(0, index);

    if (!isDeleting && index === currentText.length) {
        // pause before deleting
        isDeleting = true;
        setTimeout(type, 1000);
    } else if (isDeleting && index === 0) {
        // move to next text
        isDeleting = false;
        count = (count + 1) % texts.length;
        setTimeout(type, 1000);
    } else {
        // typing or deleting speed
        setTimeout(type, isDeleting ? 100 : 100);
    }
}

type();




const card = document.getElementById('cardFt');
const card2 = document.getElementById('cardSD');
const card3 = document.getElementById('cardth');
card.addEventListener('mouseover', ()=>{
    const projectContent = document.querySelector('.projectContent');
    projectContent.style.display = "flex"

   
});
card.addEventListener('mouseout', ()=>{
    const projectContent = document.querySelector('.projectContent');
    projectContent.style.display = "none"


});


card2.addEventListener('mouseover', ()=>{
 const details = document.getElementById('details2');
    details.style.display = "flex"

   
});
card2.addEventListener('mouseout', ()=>{
    const details = document.getElementById('details2');
    details.style.display = "none"

});

card3.addEventListener('mouseover', ()=>{
   const details = document.getElementById('details3');
    details.style.display = "flex"
   
});
card3.addEventListener('mouseout', ()=>{
   const details = document.getElementById('details3');
    details.style.display = "none"


});




// ----------------------------AOS------------------------------
const boxes = document.querySelectorAll('.bar');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
});

boxes.forEach(box => {
  observer.observe(box);
});




// -----------------------------------------------------------------------//


// -----------------------------------form submit--------------------------//

const form = document.querySelector("form");
const status = document.getElementById("status");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  let data = new FormData(form);
  let response = await fetch(form.action, {
    method: form.method,
    body: data,
    headers: { 'Accept': 'application/json' }
  });

  if (response.ok) {
    status.innerText = "Thanks for your submission!";
    form.reset();
  } else {
    status.innerText = "Oops! There was a problem.";
  }
});


document.getElementById('email').addEventListener('keydown', (e)=>{
    if(e === 'Enter'){
        form.submit()
    }
});






let lastScrollTop = 0; // store last scroll position

window.addEventListener('scroll', () => {
  const speedUP = document.querySelector('.speedUP');
  let currentScroll = window.scrollY || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // scrolling down
    speedUP.style.display = 'flex';
  } else {
    // scrolling up
    speedUP.style.display = 'none';
  }

  lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // avoid negative
});
