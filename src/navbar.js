/* global $ */

const navbarHeight = $('.navbar').height()
const headerTitleOffsetTop = $('.header-title').offset().top

const getQuienSoyOffset = () => $('#quien-soy').offset().top
const isNavbarInMain = () => (window.pageYOffset >= (getQuienSoyOffset() - navbarHeight))
const shouldNavbarTurnBlack = () => isNavbarInMain()
const turnNavBarBlack = () => $('.navbar').css('background-color', 'rgba(0, 0, 0, .8)')
const turnNavBarWhite = () => $('.navbar').css('background-color', 'transparent')
const didHeaderTitleTouchNavbar = () => (headerTitleOffsetTop < $(window).scrollTop())
const moveHeaderTitleToNavbar = () => $('.header-title').addClass('title-in-navbar')
const hideHeaderTitleFromNavbar = () => $('.header-title').removeClass('title-in-navbar')
const releaseLock = () => setTimeout(() => { checkScrollForNavbarLock = false; handleScrollEvent() }, 2000)
const isToggleNavVisible = () => ($('.toggle-navigation').css('display') !== 'none')
const handleToggleNavigationClick = event => toggleNavbar()
const isNavBarOpen = () => ($('.navbar ul').css('visibility') === 'visible')

const handleTitleInNavbar = () => {
  if (didHeaderTitleTouchNavbar()) {
    moveHeaderTitleToNavbar()
  } else {
    hideHeaderTitleFromNavbar()
  }
}

let checkScrollForNavbarLock = false
let navbarIsBlack = false
const handleScrollEvent = () => {
  handleTitleInNavbar()

  if (checkScrollForNavbarLock) return
  const shouldTurnBlack = shouldNavbarTurnBlack()
  if (!navbarIsBlack && shouldTurnBlack) {
    turnNavBarBlack()
    navbarIsBlack = true
    checkScrollForNavbarLock = true
  } else if (navbarIsBlack && !shouldTurnBlack) {
    turnNavBarWhite()
    navbarIsBlack = false
    checkScrollForNavbarLock = true
  }
  releaseLock()
}

const scrollPage = offset => {
  $('body, html').animate({
    scrollTop: offset
  }, 400)
}

const animateSectionTitle = (section) => {
  const color = $(`#${section} > .section-title`).parent().is('section:odd') ? 'white' : 'black'
  $(`#${section} > .section-title`).css('transition', 'none')
  $(`#${section} > .section-title`).css('color', 'orangered')
  setTimeout(() => {
    $(`#${section} > .section-title`).css('transition', 'color 1s ease')
    $(`#${section} > .section-title`).css('color', color)
  }, 1000)
}

const hideNavbar = () => {
  $('.navbar ul').css('visibility', 'hidden')
  $('.toggle-navigation').removeClass('open')
}

const showNavbar = () => {
  $('.navbar ul').css('visibility', 'visible')
  $('.toggle-navigation').addClass('open')
}

const hideNavbarIfToggleIsVisible = () => {
  if (isToggleNavVisible()) {
    hideNavbar()
  }
}

const toggleNavbar = () => {
  if (isNavBarOpen()) {
    hideNavbar()
  } else {
    showNavbar()
  }
}

const handleSectionClick = event => {
  event.preventDefault()
  let sectionToGo = event.target.href.split('#').pop()
  if (sectionToGo) {
    scrollPage($(`#${sectionToGo}`).offset().top - navbarHeight)
    animateSectionTitle(sectionToGo)
  } else {
    scrollPage(0)
  }
  handleScrollEvent()
  hideNavbarIfToggleIsVisible()
}

const handleWindowResize = event => {
  if (!isToggleNavVisible()) {
    showNavbar()
  } else {
    hideNavbar()
  }
}

$(document).scroll(handleScrollEvent)
$(window).resize(handleWindowResize)
$('.navbar a').click(handleSectionClick)
$('.toggle-navigation').click(handleToggleNavigationClick)
$('.title-in-navbar').click(handleToggleNavigationClick)
