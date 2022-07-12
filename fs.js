const fs = require('fs');
const { arch } = require('os');

function read(path, cb){
    fs.readFile(path, (error, data) => {
        cb(data.toString());
     })
}


function write(path, content, cb){
    fs.writeFile(path, content, function(err){  
        if(err){    
            cb('i could not write', err);
        }else{
            cb('has been written successfully');
        }
    });
}

function deleteFile(path,cb){
    fs.unlink(path, cb)
}

deleteFile(__dirname + '/archivo1.txt', console.log);

//write(__dirname + '/archivo1.txt', 'i am a file new', console.log);

read(__dirname + '/archivo.txt', console.log);

