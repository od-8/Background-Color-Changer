const button1 = document.getElementById('btn');
button1.addEventListener("click", colorChange);

function generateColor () {
    const letters = "0123456789ABCDEF"
    let hash = '#';

    for (let i = 0; i < 6; i++) {
        hash += letters[Math.floor(Math.random() * 16)]
    }
    return hash
}

function colorChange () {
    const randomColor = generateColor();
    document.body.style.backgroundColor = randomColor;
    //document.button.style.backgroundColor = randomColor
    console.log(randomColor)
}