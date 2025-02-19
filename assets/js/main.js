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
