/* Botão de voltar ao topo */

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("btnVoltarAoTopo").style.display = "block";
    } else {
        document.getElementById("btnVoltarAoTopo").style.display = "none";
    }
}

function voltarAoTopo() {
    document.body.scrollTop = 0; // Para navegadores Safari
    document.documentElement.scrollTop = 0; // Para outros navegadores
}

/* Efeito fade no texto */

window.addEventListener('scroll', revelartexto);

function revelartexto() {
  var textElements = document.querySelectorAll('.revelar-texto p');
  
  for (var i = 0; i < textElements.length; i++) {
    var element = textElements[i];
    var elementTop = element.getBoundingClientRect().top;
    var elementBottom = element.getBoundingClientRect().bottom;
    var isVisible = elementTop < window.innerHeight && elementBottom >= 0;
    
    if (isVisible) {
      element.classList.add('show');
    }
  }
}
