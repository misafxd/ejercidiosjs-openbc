const botonAlert = document.querySelector("#btn-alert");

botonAlert.addEventListener("click", () =>{
    alert("Click en el botón")
})

$(() =>{
    $("#btn-alert").click(()=>{
        console.log("Hola, estoy utilizando jQuery");
    })
})