let arr = [];

class Tarea {
  constructor(texto, fecha, fechaTer, checkeado) {
    this.texto = texto;
    this.fecha = fecha;
    this.checkeado = checkeado;
    this.fechaTer = fechaTer;
  }
}

function Agregar(e) {
  e.preventDefault();

  var texto = document.getElementById("Tarea").value;
  var fecha = new Date().toISOString();
  var checkeado = false;

  if (texto == "") {
    alert("No puede haber campos vacios :(");
  } else {
    var tarea = new Tarea(texto, fecha, null, checkeado);
    arr.push(tarea);
    document.getElementById("ESCRIBIR").innerHTML = "";
    arr.map((x, index) => {
      var Contenido = document.createElement("li");
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.checked = x.checkeado;
      checkbox.setAttribute("data-index", index);
      checkbox.setAttribute("onclick", "tareaCompletada(event)");

      Contenido.appendChild(checkbox);
      checkbox.classList.add("checkbox");
      var Parrafo = document.createElement("p")
      Parrafo.innerHTML += x.texto;
      Contenido.appendChild(Parrafo)
      document.getElementById("ESCRIBIR").appendChild(Contenido);
    });
  }
}

function tareaCompletada(e) {
  var index = e.target.getAttribute("data-index");
  var tarea = arr[index];
  tarea.checkeado = !tarea.checkeado;
  tarea.fechaTer = tarea.checkeado ? new Date().toISOString() : null;
  arr[index] = tarea;
  var Contenido = e.target.parentElement;
  if (tarea.checkeado) {
    Contenido.style.textDecoration = "line-through";
  } else {
    Contenido.style.textDecoration = "none";
  }
}

function compararDuracion() {
  var tareaMasCorta = "Ninguna ha sido terminada";
  var duracionmMenor = Infinity;
  console.log(arr);
  arr.forEach((tarea) => {
    if (tarea.checkeado && tarea.fechaTer !== null) {
      if (Date.parse(tarea.fechaTer) - Date.parse(tarea.fecha) < duracionmMenor) {
        duracionmMenor = Date.parse(tarea.fechaTer) - Date.parse(tarea.fecha);
        tareaMasCorta = tarea.texto;
      }
    }
  });
  document.getElementById("resultado").innerHTML = `La tarea realizada más rápido es: ${tareaMasCorta}`;
}

function eliminarTodo() {
  arr = [];
  document.getElementById("ESCRIBIR").innerHTML = "";
  document.getElementById("resultado").innerHTML = "";
}
