let nombre = "Juan Carlos";
let apellido = "Fernández";

const dev = {
    nombre: "Juan Carlos",
    apellido: "Fernández"
}

localStorage.setItem("nombre", JSON.stringify(dev));
sessionStorage.setItem("dev", JSON.stringify(dev));

fecha = new Date();
fecha2 = fecha.setMinutes(fecha.getMinutes() + 2);

document.cookie = `nombreCookie=JuanCarlos;
expires= + ${fecha2}`;


