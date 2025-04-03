const lugares = [
    {id:1, nombre:"Termales en Choachi", img:"css/Images/Choachi.jpg", categoria:"Cundinamarca", titulo:"TERMALES SANTA MÓNICA", descripcion:"Hotel, SPA y Restaurante en Choachí.", info:"Un encuentro con el placer. Emplazado en las laderas de la Cordillera Oriental de los Andes colombianos, este paraíso natural cuenta con aguas termales medicinales que proveen a piscinas, jacuzzi, salas de sauna y turco. Termales Santa Mónica es el lugar indicado para quienes aprecian la vida en todas su dimensiones."},
    {id:2, nombre:"Ciudad Amurallada en Cartagena", img:"css/Images/CiudadAmurallada.jpg", categoria:"Costa"},
    {id:3, nombre:"La Guajira", img:"css/Images/Guajira.jpg", categoria:"Costa"},
    {id:4, nombre:"Río Guatapuri", img:"css/Images/Guatapuri.jpg", categoria:"Costa"},
    {id:5, nombre:"Jardin Botánico Quindío", img:"css/Images/jardinbotanico.jpg", categoria:"Eje Cafetero"},
    {id:6, nombre:"Minas de Sal de Zipaquirá", img:"css/Images/MinasSalZipaquira.jpg", categoria:"Cundinamarca"},
    {id:7, nombre:"Santa Cruz de Mompox", img:"css/Images/Mompox.jpg", categoria:"Costa"},
    {id:8, nombre:"Monserrate", img:"css/Images/Monserrate.jpg", categoria:"Cundinamarca"},
    {id:9, nombre:"Museo del Oro", img:"css/Images/Museo del Oro.jpg", categoria:"Cundinamarca"},   
    {id:10, nombre:"Panaca", img:"css/Images/Panaca.jpg", categoria:"Eje Cafetero"},
    {id:11, nombre:"Parque Nacional del Cafe", img:"css/Images/ParqueNacionaldelCafe.jpg", categoria:"Eje Cafetero"},
    {id:12, nombre:"Parque Nacional Los Nevados", img:"css/Images/ParqueNalLosNevados.jpg", categoria:"Eje Cafetero"},
    {id:13, nombre:"Playa Blanca", img:"css/Images/PlayaBlanca.jpg", categoria:"Costa"},
    {id:14, nombre:"Salento - Quindío", img:"css/Images/Salento.jpg", categoria:"Eje Cafetero"},
    {id:15, nombre:"Salto del Tequendama", img:"css/Images/SaltoTequendama.jpg", categoria:"Cundinamarca"},
    {id:16, nombre:"Termales Santa Rosa", img:"css/Images/TermalesStaRosaCabal.jpg", categoria:"Eje Cafetero"},
    {id:17, nombre:"Villa de Leyva", img:"css/Images/VilladeLeyva.jpg", categoria:"Cundinamarca"},
    {id:18, nombre:"Monumento Zapatos Viejos", img:"css/Images/ZapatosViejos.jpg", categoria:"Costa"},
]

const gallery = document.getElementById("gallery")


 /*MOSTRAR GALERIA*/
const displayLugares = (LugaresAMostrar) => {
    
    gallery.innerHTML=""
    LugaresAMostrar.forEach(lugar => {
        const div = document.createElement("div")
        div.innerHTML = `
            <img id="img_${lugar.id}" src="${lugar.img}">
            <h6>${lugar.nombre}</h6>
        `
        gallery.append(div)
    })
}

displayLugares(lugares)


/*FILTROS POR CATEGORIA*/
const filterLugares = (categoria) => {
    const LugaresAMostrar = lugares.filter(lugar=> lugar.categoria === categoria)
    displayLugares(LugaresAMostrar)
}

const EjeCafeteroBtn = document.getElementById('EjeCafeteroBtn');
const CundinamarcaBtn = document.getElementById('CundinamarcaBtn');
const CostaBtn = document.getElementById('CostaBtn');

EjeCafeteroBtn.addEventListener('click', () => {
    filterLugares('Eje Cafetero');
});

CundinamarcaBtn.addEventListener('click', () => {
    filterLugares('Cundinamarca');
});

CostaBtn.addEventListener('click', () => {
    filterLugares('Costa');
});

TodosBtn.addEventListener('click', () => {
    displayLugares(lugares);
});


const img_id = document.querySelectorAll('img');
const modal = document.querySelector('.modal')
const img_modal = document.querySelector('.img_modal')

img_id.forEach (img => {
    img.addEventListener("click", () => {
        modal.style.display="block"
        img_modal.src=img.src
        
    } ) 
})

const Cerrar = () => {
    modal.style.display="none";
}