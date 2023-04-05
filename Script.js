

let arr = [];

function Agregar(e){
    e.preventDefault();
    
    var Tarea = document.getElementById("Tarea").value;
     if (document.getElementById("Tarea").value == "") 
    {
        alert("No puede haber campos vacios :(");
    }
    else 
    {
   arr.push(Tarea);
   document.getElementById("ESCRIBIR").innerHTML = "";
   arr.map((x)=>{
    var Contenido = document.createElement("li");
    var checkbox = document.createElement("input")
        checkbox.type="checkbox"
    Contenido.appendChild(checkbox)
    checkbox.classList.add("checkbox")
    Contenido.innerHTML += x;
    document.getElementById("ESCRIBIR").appendChild(Contenido);
    checkbox.onclick= function()
    {}
})
}
}

function tachar (e)
{
var checkbox= document.getElementsByClassName("checkbox")
for(i=0; i< checkbox.length; i++)
{
    if(onclick[1].checked)
    {
        Contenido.innerHTML += "<del>" + x.texto + "</del>";
        checkbox.checked = true;
    }
    else
    {
        Contenido.innerHTML += x.texto;
        checkbox.checked = false;
    }
}


}


