var lista = window.document.getElementsByClassName('box-model')
lista[0].addEventListener('mouseover', entrou)
lista[0].addEventListener('mouseout', saiu)
lista[1].addEventListener('mouseover', entrouDois)
lista[1].addEventListener('mouseout', saiuDois)
lista[2].addEventListener('mouseover', entrouTres)
lista[2].addEventListener('mouseout', saiuTres)
function entrou(){
    lista[0].style.transition = '1s'
    lista[0].style.top = '60px'
    lista[0].style.right = '20px'
}

function saiu(){
    lista[0].style.top = '80px';
    lista[0].style.right = '0px';
}

function entrouDois(){
    lista[1].style.transition = '1s'
    lista[1].style.top = '60px'
    lista[1].style.right = '20px'
}

function saiuDois(){
    lista[1].style.top = '80px';
    lista[1].style.right = '0px';
}

function entrouTres(){
    lista[2].style.transition = '1s'
    lista[2].style.top = '60px'
    lista[2].style.right = '20px'
}

function saiuTres(){
    lista[2].style.top = '80px';
    lista[2].style.right = '0px';
}