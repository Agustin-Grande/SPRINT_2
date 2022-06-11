var arrayInput = [];
var arrayName = [];
var modPago = [];
let sum = 0;
let total = 0;
let text = "";

function Enviar(nombre, monto) {
  arrayInput.push(monto);
  arrayName.push(nombre);
  if (document.getElementById('efectivo').checked){
    var pago = "Efectivo";
    modPago.push(pago);
  }
  else{
    pago = "No efectivo";
    modPago.push(pago);
  }
  let date = new Date();

  let output = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0') + '/' + date.getFullYear() + ' ' + date.getHours();
  console.log(date);

  Calcular();
  Imprimir();
  inputValue = document.getElementById("gasto");
  inputName = document.getElementById("nombre");
  inputName.value = "";
  inputValue.value = "";
}

function Borrar() {
  let name = prompt("Ingrese nombre a borrar");
  let indice = arrayName.indexOf(name);
  arrayName.splice(indice, 1);
  arrayInput.splice(indice, 1);
  modPago.splice(indice,1);
  inputValue = document.getElementById("gasto");
  inputName = document.getElementById("nombre");
  inputName.value = "";
  inputValue.value = "";

  Calcular();
  Imprimir();

}

function Calcular(){
  var sum = 0;
  for(let i=0; i < arrayInput.length; i++){
      sum += parseFloat(arrayInput[i]);

  }
  total = parseFloat(sum / arrayInput.length).toFixed(2);

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

function Descargar(){

  let datos = [];
  for(let i = 0; i < arrayInput.length; i++){
    datos.push({"nombre":arrayName[i], "monto":arrayInput[i], "pago":modPago[i]});
  };
  console.log(datos);
  let json = JSON.stringify(datos);
  let blob = new Blob([json], {type: "application/json"});
  let url = URL.createObjectURL(blob);
  let link = document.createElement("a");
  link.href = url;
  link.download = "datos.json";
  link.click();

}


function Leer(){
  let input = document.getElementById("info");

    fetch("datos.json")

        .then(response => response.json())

        .then(data => {

            for (let i = 0; i < data.length; i++){

                Enviar(data[i].nombre, data[i].monto);

            }

        });

}
