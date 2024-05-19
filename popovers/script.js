/**
 * Finds all elements in the nav that have a popover target and listens for hover and focus
 */
Array.from(document.querySelectorAll('nav [popovertarget]')).forEach(
  elem => {
    console.log('add listeners')
    //  Hover start & end
    elem.addEventListener('mouseenter', showPopover)
    elem.addEventListener('mouseleave', hidePopover)
    //  Focus start & end
    elem.addEventListener('focusin', showPopover)
    elem.addEventListener('focusout', hidePopover)
  }
)

/**
 * finds the corresponding popover element for the event's target
 * @param {*} event 
 * @returns HTMLElement
 */
function getPopover(event) {
  const elem = event.target;
  const tooltipId = elem.getAttribute('popovertarget')
  return document.getElementById(tooltipId)
}

/**
 * Show the tooltip
 * @param {*} e 
 */
function showPopover(e) {
  const popover = getPopover(e)
  if (!e) { return }
  popover.showPopover()
}

/**
 * Hide the tooltip
 * @param {*} event 
 */
function hidePopover(e) {
  const popover = getPopover(e)
  if (!e) { return }
  popover.hidePopover()
}