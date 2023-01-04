let textoUsuario = document.getElementById("textoUsuario");
let codificar = document.getElementById("btnCodificar");
let descodificar = document.getElementById("btnDescodificar");
let resultado = document.getElementById("respUsuario");
let botaoCopia = document.getElementById("copiar");

function criptografa() {
  let textoCriptografado = textoUsuario.value;
  let resultadoTexto = textoCriptografado
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");
  resultado.value = resultadoTexto;

  document.getElementById("ativo").style.display = "none";
  document.getElementById("texto1").style.display = "none";
  document.getElementById("texto2").style.display = "none";
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";
  document.getElementById("respUsuario").style.display = "show";
  document.getElementById("respUsuario").style.display = "inherit";
}

codificar.onclick = criptografa;

function descriptografa() {
  let textoDescriptografado = textoUsuario.value;
  let resultadoTexto = textoDescriptografado
    .replace(/ufat/g, "u")
    .replace(/ober/g, "o")
    .replace(/ai/g, "a")
    .replace(/imes/g, "i")
    .replace(/enter/g, "e");
  resultado.value = resultadoTexto;

  document.getElementById("ativo").style.display = "none";
  document.getElementById("texto1").style.display = "none";
  document.getElementById("texto2").style.display = "none";
  document.getElementById("copiar").style.display = "show";
  document.getElementById("copiar").style.display = "inherit";
  document.getElementById("respUsuario").style.display = "show";
  document.getElementById("respUsuario").style.display = "inherit";
}

descodificar.onclick = descriptografa;

function copy() {
  if (resultado.value !== "") {
    resultado.select();
    resultado.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(resultado.value);

    alert(resultado.value + " foi copiado!");
  }
}

botaoCopia.onclick = copy;