// Generador de medio Titulo

//Diccionarios
let inicio = ["Setena y dos", "La isla", "Cuarenta", "La historia secreta", "Bailando en", "Inglaterra", "El último", "Robando", "La montaña", "Los que caminan", "Noche de", "El cementerio", "Crota", "Ultimo", "Muro", "Vivir", "El Bueno", "Cuando te importa", "Condenación", "Una rosa para", "Lineas de", "Envianos", "Araña", "Viernes", "Extraño", "Cósmico", "Camino fantasma", "Madre de", "Cuatro", "Dia del juicio final", "Patinando sobre", "Escalofrios", "El cementerio", "El trono", "El dia antes", "Se cayó en", "Ciudad", "Acto", "Retratos de", "El Baile", "Bailar", "Mi alma", "Fantasma", "Muro", "Menos que", "Exquisito", "La forma debajo", "Extraños", "El Poder de", "Con heridas", "Septimo viaje", "Necesitar", "El sauce", "En la noche", "Ondas de", "El territorio",  "Magia", "Los lobos", "Jaulas", "Rehacer", "Renacer", "Pasajeros", "Codigo", "El codigo", "Doce de la noche", "Todos morimos", "Verano de", "Escalofrios", "La tierra", "Callejón", "Luz de", "El santuario"]

let final = ["Cosas", "Herirte", "Beso", "La palabra", "Cabezas", "Vida", "Trabajar", "La sabana", "Selva", "Viene", "Enredaderas", "Energia", "Cena", "Renacer", "Escondite", "El santuario", "Tribus", "Historia", "Novia", "A tiempo", "Fantasma", "Otros dias", "La noche", "Intersección", "Ardiendo", "Los muertos", "En  sangre", "Ausencia", "De rosas", "Un eco", "Cada año", "Marcas", "Ojos", "De edad", "Oficial", "Gente", "Conectado", "Caras", "Maleficios",  "Desconocido", "Inclinación", "Espectaculo", "Difuso", "La luz", "Elector", "Vidrio", "Universidad", "Museo", "Desglose", "Manchado", "Caminar", "Mantener", "Tradición", "Niños", "Cambio", "De la vision", "Participe", "Mago"]


//Cambiar los Inicios
function cambiar () { document.getElementById ("cb1").innerHTML = inicio[ Math.ceil(Math.random()*71) ]; }
function cambiar2 () { document.getElementById ("cb2").innerHTML = inicio[ Math.ceil(Math.random()*71) ]; }
function cambiar3 () { document.getElementById ("cb3").innerHTML = inicio[ Math.ceil(Math.random()*71) ]; }
function cambiar4 () { document.getElementById ("cb4").innerHTML = inicio[ Math.ceil(Math.random()*71) ]; }
function cambiar5 () { document.getElementById ("cb5").innerHTML = inicio[ Math.ceil(Math.random()*71) ]; }
function cambiar6 () { document.getElementById ("cb6").innerHTML = inicio[ Math.ceil(Math.random()*71) ]; }

cambiar (), cambiar2 (), cambiar3 (), cambiar4 (), cambiar5 (), cambiar6 ()

document.getElementById("boton-inicios").onclick = function cambio() { cambiar(), cambiar2(), cambiar3(), cambiar4(), cambiar5(), cambiar6() };


//Cambiar los Finales
function cambiar7 () { document.getElementById ("cb7").innerHTML = final[ Math.ceil(Math.random()*57) ]; }
function cambiar8 () { document.getElementById ("cb8").innerHTML = final[ Math.ceil(Math.random()*57) ]; }
function cambiar9 () { document.getElementById ("cb9").innerHTML = final[ Math.ceil(Math.random()*57) ]; }
function cambiar10 () { document.getElementById ("cb10").innerHTML = final[ Math.ceil(Math.random()*57) ]; }
function cambiar11 () { document.getElementById ("cb11").innerHTML = final[ Math.ceil(Math.random()*57) ]; }
function cambiar12 () { document.getElementById ("cb12").innerHTML = final[ Math.ceil(Math.random()*57) ]; }

cambiar7 (), cambiar8 (), cambiar9 (), cambiar10 (), cambiar11 (), cambiar12 ()

document.getElementById("boton-finales").onclick = function cambio2() { cambiar7(), cambiar8(), cambiar9(), cambiar10(), cambiar11(), cambiar12() };


//Almacenar los inicios
var inicios = []

var checkbox = document.getElementById('cbox1');
checkbox.addEventListener("change", validaCheckbox, false);
function validaCheckbox() {
    var checked = checkbox.checked;
    if(checked) {
        alert ("está chequeado");
        inicios.push(document.getElementById("cb1").innerHTML);
    };
};

var checkbox2 = document.getElementById('cbox2');
checkbox2.addEventListener("change", validaCheckbox2, false);
function validaCheckbox2() {
    var checked = checkbox2.checked;
    if(checked) {
        alert ("está chequeado 2");
        inicios.push(document.getElementById("cb2").innerHTML);
    };
};

var checkbox3 = document.getElementById('cbox3');
checkbox3.addEventListener("change", validaCheckbox3, false);
function validaCheckbox3() {
    var checked = checkbox3.checked;
    if(checked) {
        alert ("está chequeado 3");
        inicios.push(document.getElementById("cb3").innerHTML);
    };
};

var checkbox4 = document.getElementById('cbox4');
checkbox4.addEventListener("change", validaCheckbox4, false);
function validaCheckbox4() {
    var checked = checkbox4.checked;
    if(checked) {
        alert ("está chequeado 4");
        inicios.push(document.getElementById("cb4").innerHTML);
    };
};

var checkbox5 = document.getElementById('cbox5');
checkbox5.addEventListener("change", validaCheckbox5, false);
function validaCheckbox5() {
    var checked = checkbox5.checked;
    if(checked) {
        alert ("está chequeado 5");
        inicios.push(document.getElementById("cb5").innerHTML);
    };
};

var checkbox6 = document.getElementById('cbox6');
checkbox6.addEventListener("change", validaCheckbox6, false);
function validaCheckbox6() {
    var checked = checkbox6.checked;
    if(checked) {
        alert ("está chequeado 6");
        inicios.push(document.getElementById("cb6").innerHTML);
    };
};


//Almacenar los finales
var finales = []

var checkbox7 = document.getElementById('cbox7');
checkbox7.addEventListener("change", validaCheckbox7, false);
function validaCheckbox7() {
    var checked = checkbox7.checked;
    if(checked) {
        alert ("está chequeado 7");
        finales.push(document.getElementById("cb7").innerHTML);
    };
};

var checkbox8 = document.getElementById('cbox8');
checkbox8.addEventListener("change", validaCheckbox8, false);
function validaCheckbox8() {
    var checked = checkbox8.checked;
    if(checked) {
        alert ("está chequeado 8");
        finales.push(document.getElementById("cb8").innerHTML);
    };
};

var checkbox9 = document.getElementById('cbox9');
checkbox9.addEventListener("change", validaCheckbox9, false);
function validaCheckbox9() {
    var checked = checkbox9.checked;
    if(checked) {
        alert ("está chequeado 9");
        finales.push(document.getElementById("cb9").innerHTML);
    };
};

var checkbox10 = document.getElementById('cbox10');
checkbox10.addEventListener("change", validaCheckbox10, false);
function validaCheckbox10() {
    var checked = checkbox10.checked;
    if(checked) {
        alert ("está chequeado 10");
        finales.push(document.getElementById("cb10").innerHTML);
    };
};

var checkbox11 = document.getElementById('cbox11');
checkbox11.addEventListener("change", validaCheckbox11, false);
function validaCheckbox11() {
    var checked = checkbox11.checked;
    if(checked) {
        alert ("está chequeado 11");
        finales.push(document.getElementById("cb11").innerHTML);
    };
};

var checkbox12 = document.getElementById('cbox12');
checkbox12.addEventListener("change", validaCheckbox12, false);
function validaCheckbox12() {
    var checked = checkbox12.checked;
    if(checked) {
        alert ("está chequeado 12");
        finales.push(document.getElementById("cb12").innerHTML);
    };
};


//Generar los titulos

document.getElementById("boton-titulos").onclick = function crear() {
    for (let i = 0; i < inicios.length; i++) {
        var element = inicios[i];
        for (let i2 = 0; i2 < finales.length; i2++) {
            var element2 = finales[i2];
            // swal("Estos son tus titulos", element + " " + element2)
            alert (element + " " + element2)
        };
    };
};