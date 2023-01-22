var botaoCriptografa = document.querySelector("button#botao__criptografar");
var botaoDescriptografa = document.querySelector("button#botao__descriptografar");
var botaoCopia = document.getElementById("button#botao__copiar");
var entradaTexto = document.querySelector("textarea#input__entrada");
var saidaTexto = document.querySelector("textarea#input__saida");
var entradaTexto = document.querySelector("textarea#input__entrada");
var saidaTexto = document.querySelector("textarea#input__saida");
var botaoDescriptografa = document.getElementById("button#botao__descriptografar");
var entradaTexto = document.querySelector("textarea#input__entrada");
var saidaTexto = document.querySelector("textarea#input__saida");
var entradaTexto = document.querySelector("textarea#input__entrada");
var saidaTexto = document.querySelector("textarea#input__saida");


function criptografaTexto() {
  let text = entradaTexto.value;
  if (/[A-Z-À-Ú-à-ù]/.test(text)) {
    saidaTexto.innerHTML = 'Não é possível copiar palavras com acentuação.'
  } else if (/[0-9]/.test(text)) {
    saidaTexto.innerHTML = 'Números não são permitidos.'
  } else if (entradaTexto.value === '') {
    saidaTexto.innerHTML = 'Campo vazio.'
  } else {
    var txt = text.replace(/e/g, "enter");
    var txt = txt.replace(/i/g, "imes");
    var txt = txt.replace(/a/g, "ai");
    var txt = txt.replace(/o/g, "ober");
    var txt = txt.replace(/u/g, "ufat");

    saidaTexto.innerHTML = `${txt}`;
  }
}

function descriptografaTexto() {
  var text = entradaTexto.value;
  if (/[A-Z-À-Ú-à-ù]/.test(text)) {
    saidaTexto.innerHTML = 'Não é possível copiar palavras com acentuação.'
  } else if (/[0-9]/.test(text)) {
    saidaTexto.innerHTML = 'Números não são permitidos.'
  } else if (entradaTexto.value === '') {
    saidaTexto.innerHTML = 'O campo está vazio.'
  } else {
    var txt = text.replace(/enter/g, "e");
    var txt = txt.replace(/imes/g, "i");
    var txt = txt.replace(/ai/g, "a");
    var txt = txt.replace(/ober/g, "o");
    var txt = txt.replace(/ufat/g, "u");

    saidaTexto.innerHTML = `${txt}`;
  }
}

function limpaCampos() {
  if (entradaTexto.value.length === 0) {
    saidaTexto.innerHTML = "Digite para poder apagar!";
  } else {
    entradaTexto.value = "";
    saidaTexto.innerHTML = " ";
  }
}

function copiaTexto() {
  let text = entradaTexto.value;
  if (/[A-Z-À-Ú-à-ù]/.test(text)) {
      saidaTexto.innerHTML = 'Não é possível copiar palavras com acentuação.'
  } else if (entradaTexto.value.length === 0) {
      saidaTexto.innerHTML = "Digite para poder copiar!";
  } else {
      var copyText = saidaTexto.innerHTML;
      navigator.clipboard.writeText(copyText).then(() => {
          saidaTexto.innerHTML = "Copiado";
      });
  }
}