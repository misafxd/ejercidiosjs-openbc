let map;

let marcador1 = {lat: 19.352129, lng:-99.139879}
let marcador2 = {lat: 19.43523, lng:-99.14128}
let marcador3 = {lat: 19.225751802666043, lng:-99.02148837666381}

function initMap(){
    const posicion = {
        lat: 19.318893261603453, 
        lng: -99.18438598057344
    }

    
    map = new google.maps.Map(document.getElementById("map"), {zoom: 4, center: posicion})
    
    let marker1 = new google.maps.Marker({
        position: marcador1,
        map,
        title: "Parque Masayoshi Ohira"
    })
    let marker2 = new google.maps.Marker({
        position: marcador2,
        map,
        title: "Palacio de Bellas Artes"
    })
    let marker3 = new google.maps.Marker({
        position: marcador3,
        map,
        title: "Volcán teuhtli"
    })

   
    
}

