function encriptado(){
  let mensaje = document.getElementById("areaIngresar").value.toLowerCase();

  let mensajeEncriptado = mensaje
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("a", "ai")
    .replaceAll("o", "ober")
    .replaceAll("u", "ufat");

  document.getElementById("resultado").innerHTML = mensajeEncriptado;
  document.getElementById('imgMu').style.display = "none";
  document.getElementById('avisoh2').style.display = "none";
  document.getElementById('avisoh4').style.display = "none";
  document.getElementById('btn_copiar').style.display = "show";
  document.getElementById('btn_copiar').style.display = "inherit";
}

function desencriptado(){
  let mensaje2 = document.getElementById("areaIngresar").value.toLowerCase();

  let mensajeDesncriptado = mensaje2
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ai", "a")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

  document.getElementById("resultado").innerHTML = mensajeDesncriptado;
  document.getElementById('imgMu').style.display = "none";
  document.getElementById('avisoh2').style.display = "none";
  document.getElementById('avisoh4').style.display = "none";
  document.getElementById('btn_copiar').style.display = "show";
  document.getElementById('btn_copiar').style.display = "inherit";
}

function copiado(){
  let resultados = document.getElementById("resultado");
    resultados.select();
    navigator.clipboard.writeText(resultados.value);
  }

function refreshPage(){
    window.location.reload();
} 