const crypto = require('crypto');
class userManager{
    static usuarios = [];
    static passwordUUID = {};
    
    crearusuario(usuario){
        const passwordUUIDuser = crypto.randomUUID();
        userManager.passwordUUID[usuario.password] = passwordUUIDuser;

        const newUser = {
            nombre:usuario.nombre,
            apellido:usuario.apellido,
            password:passwordUUIDuser
    }
    userManager.usuarios.push(newUser);
    }

    mostrarUsuarios(){
        //validar si hay usuarios
        userManager.usuarios.forEach((user) => {
            console.log(user);
        });
    }

    validarUsuario(nombre, password){
        const userFound = userManager.usuarios.find(user => user.nombre === nombre);
        const passwordEsperado = userManager.passwordUUID[password];

        if(!passwordEsperado) 
            console.log("Error de credenciales");

        if(passwordEsperado === userFound.password){
            return 'Logeado correctamente';
        }
    }
};

const manager = new userManager();

manager.crearusuario({
    nombre: "Agustin",
    apellido: "Juarez",
    password: "123456"
});

manager.mostrarUsuarios();