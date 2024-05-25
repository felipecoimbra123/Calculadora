

function adicionarCaracter (char){
    const display = document.getElementById('display')
    if (display.innerText === '0' && char !== '.') {
        display.innerText = char
    } else {
        if(!(char == '.' && display.innerText [display.innerText.length - 1] == '0'))
            display.innerText +=char
    }
}

function limpar (){
    display.innerText = '0'
}

function mostrarResultado () {
    display.innerText = eval(display.innerText)
}