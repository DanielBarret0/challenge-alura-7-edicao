
function criarModal(botaoAbrirId, dialogId, botaoFecharId) {
    const botao = document.getElementById(botaoAbrirId);
    const modal = document.querySelector(dialogId);
    const botaoFechar = document.getElementById(botaoFecharId);

    botao.onclick = function () {
        modal.showModal();
    };

    botaoFechar.onclick = function () {
        modal.close();
    };
}

// Modais de cada card
criarModal('botaoAbrirModal', '#dialogCamiseta', 'botaoFechar');
criarModal('botaoAbrirModal2', '#dialogCalca', 'botaoFechar2');
criarModal('botaoAbrirModal3', '#dialogTenis', 'botaoFechar3');
criarModal('botaoAbrirModal4', '#dialogCasaco', 'botaoFechar4');
criarModal('botaoAbrirModal5', '#dialogOculos', 'botaoFechar5');
criarModal('botaoAbrirModal6', '#dialogBolsa', 'botaoFechar6');
criarModal('botaoAbrirModal7', '#dialogNovidades', 'botaoFechar7');
