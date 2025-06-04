const incrementar = document.getElementById('incrementar');
const decrementar = document.getElementById('decrementar');
const zerar = document.getElementById('zerar');
const valor = document.getElementById('valor');



let contador = 0;

function atualizarContador() {
       valor.innerHTML = contador;

    if (contador < 0) {
        valor.style.backgroundColor = "green";
    } else if (contador > 0) {
        valor.style.backgroundColor = "red";
    } else {
        valor.style.backgroundColor = "black";
    }
};
incrementar.addEventListener('click', () =>{
    contador++;
   atualizarContador();
});

decrementar.addEventListener('click', () => {
    contador--;
    atualizarContador();
});

zerar.addEventListener('click',() => {
    contador = 0;
   atualizarContador();
});