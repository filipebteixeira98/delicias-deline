const navigationMenu = document.getElementById('nav-menu'),
  navigationToggle = document.getElementById('nav-toggle'),
  navigationClose = document.getElementById('nav-close')

if (navigationToggle) {
  navigationToggle.addEventListener('click', () => {
    navigationMenu.classList.add('show-menu')
  })
}

if (navigationClose) {
  navigationClose.addEventListener('click', () => {
    navigationMenu.classList.remove('show-menu')
  })
}

const navigationLinks = document.querySelectorAll('.nav__link')

const handleLinksAction = () => {
  const navigationMenu = document.getElementById('nav-menu')

  navigationMenu.classList.remove('show-menu')
}

navigationLinks.forEach((navigationLink) => navigationLink.addEventListener('click', handleLinksAction))

const handleBlurHeader = () => {
  const header = document.getElementById('header')

  this.scrollY >= 50 ? header.classList.add('blur-header') : header.classList.remove('blur-header')
}

window.addEventListener('scroll', handleBlurHeader)

const handleScrollUp = () => {
  const scrollUp = document.getElementById('scroll-up')

  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll') : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', handleScrollUp)

const sections = document.querySelectorAll('section[id]')

const handleScrollToSection = () => {
  const scrollDown = window.scrollY

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight,
      sectionTop = section.offsetTop - 58,
      sectionId = section.getAttribute('id'),
      sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link')
    } else {
      sectionsClass.classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', handleScrollToSection)

const scrollRevealConfig = ScrollReveal({
  origin: 'top',
  distance: '40px',
  opacity: 1,
  scale: 1.1,
  duration: 2500,
  delay: 300,
})

scrollRevealConfig.reveal('.home__data, .about__img, .about__data, .visit__data')

scrollRevealConfig.reveal('.home__image, .footer__img-1, .footer__img-2', {
  rotate: {
    z: -15,
  },
})

scrollRevealConfig.reveal('.home__bread, .about__bread', {
  rotate: {
    z: 15,
  },
})

scrollRevealConfig.reveal('.home__footer', {
  scale: 1,
  origin: 'bottom',
})

scrollRevealConfig.reveal('.new__card:nth-child(1) img', {
  rotate: {
    z: -30,
  },
  distance: 0,
})

scrollRevealConfig.reveal('.new__card:nth-child(2) img', {
  rotate: {
    z: 15,
  },
  distance: 0,
  delay: 600,
})

scrollRevealConfig.reveal('.new__card:nth-child(3) img', {
  rotate: {
    z: -30,
  },
  distance: 0,
  delay: 900,
})

scrollRevealConfig.reveal('.favorite__card img', {
  interval: 100,
  rotate: {
    z: 15,
  },
  distance: 0,
})

scrollRevealConfig.reveal('.footer__container ', {
  scale: 1,
})
