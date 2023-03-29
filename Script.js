let arr = ["hacer lo de lengua", "dormir", "hacer la sopa"];
arr.map((x)=>{
    var Contenido = document.createElement("li");
    Contenido.innerHTML = x;
    document.getElementById("ESCRIBIR").appendChild(Contenido);
})


