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