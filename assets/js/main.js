
/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SERVICES MODAL ===============*/

const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close');

let modal = function(modalclick){
    modalViews[modalclick].classList.add('active-modal')
}  

modalBtns.forEach((mb,i) => {
    mb.addEventListener('click',() =>{
      modal(i)  
    })
})

modalClose.forEach((mc) => {
    mc.addEventListener('click',() =>{
      modalViews.forEach((mv)=>{
          mv.classList.remove('active-modal')
      }) 
    })
})

/*=============== MIXITUP FILTER PORTFOLIO ===============*/

let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});


/* Link active work */ 

const linkWork = document.querySelectorAll('.work__items')

function activeWork(){
    linkWork.forEach(L=> L.classList.remove('active-work') )
    this.classList.add('active-work')
}

linkWork.forEach(L=> L.addEventListener('click',activeWork))


/*=============== SWIPER TESTIMONIAL ===============*/

let swiperTestimonial = new Swiper(".testimonial__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    breakpoints: {
        576: {
          slidesPerView: 2,
       
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
        1124:{
          slidesPerView: 3,
          spaceBetween: 38,
        },
      },

    // breakpoints: {
    //     640: {
    //       slidesPerView: 2,
    //       spaceBetween: 20,
    //     },
    //     768: {
    //       slidesPerView: 4,
    //       spaceBetween: 40,
    //     },
    //     1024: {
    //       slidesPerView: 5,
    //       spaceBetween: 50,
    //     },
    //   },


  });


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== LIGHT DARK THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const lightTheme = 'light-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the light-theme class
const getCurrentTheme = () => document.body.classList.contains(lightTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the light
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](lightTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(lightTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})


/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
  origin: 'top',
  distance:'60px',
  duration: 2500,
  delay: 400,
  // reser: true,
})

sr.reveal('.home__data ,.services__card,.section__title,.section__subtitle,.testimonial__container ')
sr.reveal('.home__handle', {delay:700})
sr.reveal('.home__social, .home__scroll', {delay:900, origin:'bottom'})
sr.reveal('.about__img, .fontend__skills,.contact__leftside', { origin:'left'})
sr.reveal('.about__data,.uiux__skills,.contact__rightside', { origin:'right'})
sr.reveal('.work__filters', {delay:100, origin:'left', distance:'180px' })
sr.reveal('.work__container', {delay:100, origin:'right', distance:'180px' })






/*=============== typing text ANIMATION ===============*/


var typed = new Typed(".auto-input", {
  strings: ['UI/UX Designer', 'FrontEnd Developer','Graphic Designer'],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
})


// function copyemail(){
//   const email = document.querySelector("#email_text");
//   const copyemail = document.querySelector("#copyemail_btn");
//   email.select();
//   document.execCommand("copy");
//   copyemail.textContent = "Email copied!";
//   setTimeout(() =>{
//     copyemail.textContent = "Copy email"
//   }, 5000)
// }

function copyText (htmlElement)
{
    if (!htmlElement) {
        return;
    }
    let elementText = htmlElement.innerText;
    let inputElement = document.createElement('input');
    const copyemail = document.querySelector("#copyemail_btn");
    inputElement.setAttribute('value', elementText);
    document.body.appendChild(inputElement);
    inputElement.select();
   document.execCommand ('copy');
    inputElement.parentNode.removeChild(inputElement);
    copyemail.textContent = "Email copied!";
    setTimeout(() =>{
      copyemail.textContent = "Copy email"
    }, 5000)
  }
document.querySelector('#copyemail_btn').onclick =
function ()
{
    copyText (document.querySelector('#email_text'));
    copyemail.textContent = "Email copied!";
    setTimeout(() =>{
      copyemail.textContent = "Copy email"
    }, 5000)
}