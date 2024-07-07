document.addEventListener("DOMContentLoaded", ()=> {
    const Box = document.getElementById('Box')
    const Change = document.getElementById('Change')

    const randomColor = () => {
        const letters = "0123456789ABCDEF"
        return '#' + Array.from({length: 6}).map(() => letters[Math.floor(Math.random() * 16)
        ]).join(``)
    }
    Change.addEventListener('click', () => {
        Box.style.backgroundColor = randomColor()
    })
})