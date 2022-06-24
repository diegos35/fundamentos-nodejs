/*  function soyAsincrona (micallback) {
    //console.log("Hello soy una funcion async!");
    setTimeout(function () {
        console.log("estoy siendo asincrono");    
        micallback(); //lama al console termionando proceso
    }, 1000);
}

console.log("iniciando proceso");  

soyAsincrona(function(){
    console.log("terminando proceso")
}); */
 


//console.log("Terminando proceso!"); 

//2 ejemplo callbacks

function hola (nombre, micallback) {
    //console.log("Hello soy una funcion async!");
    setTimeout(function () {
        console.log("hola, "+ nombre);    
        micallback(nombre); //lama al console termionando proceso
    }, 1000);
}



function adios(nombre, otroCallback){
    setTimeout(function(){
        console.log('Adios ' + nombre);
        otroCallback();
    }, 1000);
}


console.log("iniciando proceso");  
hola('carlos',function(nombre){
    adios(nombre, function(){
        console.log("Terminando proceso");
    });
});