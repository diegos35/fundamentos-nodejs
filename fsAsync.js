const fs = require('fs');

const readFile = async () => {
    const file = await fs.readFileSync('./archivo.txt', {encoding: 'utf8'});
    console.log(file);
}

readFile();