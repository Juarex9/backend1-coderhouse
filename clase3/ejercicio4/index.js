const fs = require('fs/promises');

const generarInfoPKGJson = async () => {
    try{
        const nombreArchivo = 'package.json';
        const nombreArchivoDestino = 'info.json';

        let contenidoString = await fs.readFile(nombreArchivo, 'utf-8');
        console.log(contenidoString);

        const contenidoObj = JSON.parse(contenidoString);
        console.log(contenidoObj);
        
        const infoJSON = {
            contenidoObj,
            contenidoString,
        };
        const info = JSON.stringify(infoJSON);
        await fs.writeFile(nombreArchivoDestino, info);
    } catch(error) {
        console.error("error al crear el archivo", error);
    };
};

generarInfoPKGJson();