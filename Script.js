let arr = [];

function Agregar(e) {
  e.preventDefault();

  var Tarea = document.getElementById("Tarea").value;
  if (document.getElementById("Tarea").value == "") {
    alert("No puede haber campos vacios :(");
  } else {
    arr.push({ texto: Tarea, completada: false, fecha: new Date() });
    document.getElementById("ESCRIBIR").innerHTML = "";
    arr.map((x, index) => {
      var Contenido = document.createElement("li");
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.classList.add("checkbox");
      checkbox.onclick = function () {
        tacharTarea(index);
      };
      Contenido.appendChild(checkbox);
      if (x.completada) {
        Contenido.innerHTML += "<del>" + x.texto + "</del>";
        checkbox.checked = true;
      } else {
        Contenido.innerHTML += x.texto;
        checkbox.checked = false;
      }
      document.getElementById("ESCRIBIR").appendChild(Contenido);
    });
  }
}

function tacharTarea(tarea) {
    tarea.completada = !tarea.completada;
    document.getElementById("ESCRIBIR").innerHTML = "";
    arr.map((x, index)=>{
        var Contenido = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("checkbox");
        checkbox.onclick = function() {
            tacharTarea(x);
        }
        Contenido.appendChild(checkbox);
        if (x.completada) {
            Contenido.innerHTML += '<del>' + x.texto + '</del>';
            checkbox.checked = true;
        } else {
            Contenido.innerHTML += x.texto;
            checkbox.checked = false;
        }
        document.getElementById("ESCRIBIR").appendChild(Contenido);
    });
}

