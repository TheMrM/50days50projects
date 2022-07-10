const toggles = document.querySelectorAll('.toggle')
const good = document.querySelector('#good')
const evil = document.querySelector('#evil')
const neutral = document.querySelector('#neutral')

toggles.forEach(toggle => toggle.addEventListener('change', (e) => doTheTrick(e.target)))

function doTheTrick(theClickedOne) {
    if(good.checked && evil.checked && neutral.checked) {
        if(good === theClickedOne) {
            good.checked = false
        }

        if(evil === theClickedOne) {
            evil.checked = false
        }

        if(neutral === theClickedOne) {
            neutral.checked = false
        }
    }
}