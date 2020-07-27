//synchronizing keyboard keys with piano keys

const WHITE_KEYS = ['z','x','c','v','b','n','m']//these arrays contains all keyboard keys
const BLACK_KEYS = ['s','d','g','h','j']

const whiteKeys = document.querySelectorAll('.key.white')//these arrays contains all piano keys
const blackKeys = document.querySelectorAll('.key.black')

document.addEventListener('keydown',e => {
    if(e.repeat) return
    const key = e.key //this code of line tell us that which actual key is pressed
    const whitekeyindex = WHITE_KEYS.indexOf(key)
    const blackkeyindex = BLACK_KEYS.indexOf(key)

    if(whitekeyindex > -1) playNote(whiteKeys[whitekeyindex])
    if(blackkeyindex > -1) playNote(blackKeys[blackkeyindex])
})


const keys = document.querySelectorAll('.key')

keys.forEach(key => {
    key.addEventListener('click',() => playNote(key))
})

function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()
    key.classList.add('action')
    noteAudio.addEventListener('ended',()=> {
        key.classList.remove('action')
    })
}