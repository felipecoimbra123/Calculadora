// Faz mudar o texto de onde mostram os cálculos e os resultados.
function adicionarCaracter (char){
    const display = document.getElementById('display')
    if (display.innerText === '0' && char !== '.') {
        display.innerText = char
    } else {
        if(!(char == '.' && display.innerText [display.innerText.length - 1] == '0'))
            display.innerText +=char
    }
}

// Faz o botão de limpar funcionar, trocando o texto que já está e voltando a ser 0
function limpar (){
    display.innerText = '0'
}

// Faz mudar o texto de onde mostra o cálculo para mostrar o resultado desse cálculo.
function mostrarResultado () {
    display.innerText = eval(display.innerText)
}
