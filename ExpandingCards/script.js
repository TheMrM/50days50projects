const panels = document.querySelectorAll('.panel')
// we created a event that checks the status of the pointer/mouse
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})
// we created function to remove ActiveClasses
function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}