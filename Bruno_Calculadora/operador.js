const displayValorAnterior = document.getElementById("valor-anterior");
const displayValorActual = document.getElementById("valor-actual");
const botonNumero = document.querySelectorAll(".numero");
const botonOperador = document.querySelectorAll(".operador");

botonNumero.forEach(boton => {
    boton.addEventListener8('click', () => {
        display.agregarNumero(boton.innerHTML);
    })
});

botonOperador.forEach(boton => {
    boton.addEventListener('click', () => display.computar(boton.value))
})