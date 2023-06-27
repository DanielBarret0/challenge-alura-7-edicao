/* Modal */

const botao = document.getElementById('botaoAbrirModal')

const modal = document.querySelector('#dialogCamiseta')

const botaoFechar = document.getElementById('botaoFechar')

botao.onclick = function () {
    modal.showModal()
}

botaoFechar.onclick = function () {
    modal.close()
}

/* Modal 2*/

const botao2 = document.getElementById('botaoAbrirModal2')

const modal2 = document.querySelector('#dialogCalca')

const botaoFechar2 = document.getElementById('botaoFechar2')

botao2.onclick = function () {
    modal2.showModal()
}

botaoFechar2.onclick = function () {
    modal2.close()
}