const { error } = require("console");

function otherFuntion (){
     serompre();
}

function serompre (){
 return 3 + z;
}

function seRompreAsincrona(cb){
    setTimeout(function(){  
        try {
            return 3 + z;  
        } catch (err) {
            console.error('erro en mi funcion asincrona')
            cb(error)
        }
    })
}

try {
    seRompreAsincrona(function (err) {
            console.log('hay un error')
        });
    //serompre();
} catch (error) {
 console.error("vaya algo se a roto");
 console.error(error.message);   
}

console.log("esto es el final");