var arrayInput = [];
var arrayName = [];
let sum = 0;
let total = 0;
let text = "";

function Enviar(nombre, monto) {
  arrayInput.push(monto);
  arrayName.push(nombre);

  Calcular();
  Imprimir();
}

function Borrar() {
  let name = prompt("Ingrese nombre a borrar");
  let indice = arrayName.indexOf(name);
  arrayName.splice(indice, 1);
  arrayInput.splice(indice, 1);
  inputValue = document.getElementById("gasto");
  inputName = document.getElementById("nombre");
  inputName.value = "";
  inputValue.value = 0;

  Calcular();
  Imprimir();

}

function Calcular(){
  var sum = 0;
  for(let i=0; i < arrayInput.length; i++){
      sum += parseFloat(arrayInput[i]);
  }
  console.log(sum);
  total = parseFloat(sum / arrayInput.length).toFixed(2);
  console.log(sum, arrayInput.length, total);

  document.getElementById("Total").innerHTML = "Total: $" + sum;
  document.getElementById("Division").innerHTML =
    "A cada uno le toca aportar: $" + total;



}
function Imprimir(){
    
  let nuevo = document.getElementById("Lista");
  nuevo.innerHTML = "";
  for(let i = 0; i < arrayInput.length; i++){
      nuevo.innerHTML +=`<button class="gasto-persona" onclick:"Eliminar()"> ${arrayName[i]}: $${arrayInput[i]} </button>`;
  }
}
