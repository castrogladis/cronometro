const btnInicioPausa = document.getElementById("boton-inicio-pausa")
const btnReiniciar = document.getElementById("boton-reiniciar")
const cronometro = document.getElementById("cronometro");

let [horas, minutos, segundos] = [0, 0, 0];

let intervaloDeTiempo;
let estadoCronometro = "pausado";

function actualizarCronometro() {
  segundos++;

  if (segundos / 60 === 1){
    segundos = 0;
    minutos++;

    if (minutos / 60 === 1){
      minutos = 0;
      horas++;
    }
  } 

  const horasConFormato = asignarFormato(horas);  
  const minutosConFormato = asignarFormato(minutos);
  const segundosConFormato = asignarFormato(segundos);
  

  cronometro.innerText = `${horasConFormato}:${minutosConFormato}:${segundosConFormato}`;
 }

function asignarFormato(unidadDeTiempo) {
  return unidadDeTiempo < 10 ? "0" + unidadDeTiempo : unidadDeTiempo;
}

btnInicioPausa.addEventListener("click", function () {
  if(estadoCronometro === "pausado"){
    intervaloDeTiempo = window.setInterval(actualizarCronometro, 1000);
    btnInicioPausa.innerHTML = '<i class="bi bi-pause-fill"></i>';
    btnInicioPausa.classList.remove("iniciar");
    btnInicioPausa.classList.add("pausar");
    estadoCronometro = "andando";
  } else {
    window.clearInterval(intervaloDeTiempo);
    btnInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>';
    btnInicioPausa.classList.remove("pausar");
    btnInicioPausa.classList.add("iniciar");
    estadoCronometro = "pausado";
  }
});

btnReiniciar.addEventListener("click", function () {
  window.clearInterval(intervaloDeTiempo);

  horas = 0;
  minutos = 0;
  segundos = 0;

  cronometro.innerText = "00:00:00";

  btnInicioPausa.innerHTML = '<i class="bi bi-play-fill"></i>';
  btnInicioPausa.classList.remove("pausar");
  btnInicioPausa.classList.add("iniciar");

estadoCronometro = "pausado";

});