var lista = window.document.getElementsByClassName('box-model')
lista[0].addEventListener('mouseover', entrou)
lista[0].addEventListener('mouseout', saiu)
lista[1].addEventListener('mouseover', entrou)
lista[1].addEventListener('mouseout', saiu)
lista[2].addEventListener('mouseover', entrou)
lista[2].addEventListener('mouseout', saiu)
function entrou(){
    lista[0].style.transition = '1s'
    lista[0].style.bottom = '20px'
    lista[0].style.right = '20px'
}

function saiu(){
    lista[0].style.bottom = '0px';
    lista[0].style.right = '0px';
}