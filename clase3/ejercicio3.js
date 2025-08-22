const fs = require('fs');

// crear / leer / editar / eliminar archivos

fs.writeFile('ejemplo.txt', 'HOla mundo', (error) => {
    if(error) return console.log("error al crear");
    fs.readFile('ejemplo.txt', 'utf-8', (error, result) => {
        if (error) return console.log("error al leer");
        
        console.log(result);
        fs.appendFile(
            'ejemplo.txt', 
            '\nHola mundo desde appendFile', 
            (error) => {
                if (error) return console.log("error al editar");
                fs.readFile('ejemplo.txt', 'utf-8', (error, result) => {
                    if (error) return console.log("error al leer");
                    console.log(result);
                });
            }
        )
    });
});