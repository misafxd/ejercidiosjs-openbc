const parrafos = document.querySelectorAll(".parrafo");
const secciones = document.querySelectorAll(".section");
const papelera = document.querySelector(".section-papelera");

//Para el dragging hay que tener en cuenta el inicio del drag y el final
//Se pueden agregar y quitar elementos clase de una etiqueta mientras un evento existe.

parrafos.forEach(parrafo =>{
    parrafo.addEventListener("dragstart",event => {
        console.log(`estoy arrastrando el parrafo ${parrafo.innerText}`);
        parrafo.classList.add("dragging");
        event.dataTransfer.setData("id", parrafo.id)
    })

    parrafo.addEventListener("dragend", () => {
        console.log(`Termine de arrastrar ${parrafo.innerText}`);
        parrafo.classList.remove("dragging")
    })
})

secciones.forEach(seccion => {
    //Hay que gestionar el evento de esta forma para que HTML nos deje gestionar los DROPs
    seccion.addEventListener("dragover", event => {
        event.preventDefault();
        // console.log("Drag over");
    })

    seccion.addEventListener("drop", event => {
        console.log("Drop");
        const id_parrafo = event.dataTransfer.getData("id");
        console.log("parrafo id: ",id_parrafo );
        const parrafo = document.getElementById(id_parrafo);
        seccion.appendChild(parrafo)
    })


})

papelera.addEventListener("dragover", event => {
    event.preventDefault();
})

papelera.addEventListener("drop", event=>{
    const id_parrafo = event.dataTransfer.getData("id");
    const dataParrafo = document.getElementById(id_parrafo);
    papelera.appendChild(dataParrafo);
    papelera.removeChild(dataParrafo)

})

