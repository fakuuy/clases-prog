import Usuario from "./Usuario";

const usuarios_originales: Usuario[] = [];
const usuarios_modificados: Usuario[] = [];

function addOriginalUser (usuario: Usuario) {

    if(!usuarios_originales.indexOf(usuario)) {

        usuarios_originales.push(usuario);

        console.log("Usuario: " + usuario.nombre + " con mail: " + usuario.mail + " agregado.")

        return true;

    } else {
        return false;
    }

}

function addModifiedUser (usuario: Usuario) {

    if (!usuarios_modificados.indexOf(usuario)) {
        
        usuarios_modificados.push(usuario);

        console.log("Usuario: " + usuario.nombre + " con mail: " + usuario.mail + " agregado.")

        return true;

    } else {
        return false;
    }

}

function getOriginalsUsersList() {

    console.log("Usuarios orignales: ");
    usuarios_originales.forEach(usuario => {
        usuario.mostrarInformacion();
    });

}

function getOriginalUsers() {
    return usuarios_originales;
}

function getModifiedUsersList() {

    console.log("Usuarios modificados: ");
    usuarios_modificados.forEach(usuario => {
        usuario.mostrarInformacion();
    });

}

function getModifiedUsers() {
    return usuarios_modificados;
}

function removeOriginalUser(usuario: Usuario) {

    const index = usuarios_originales.indexOf(usuario);

    if (index === -1) {
        console.error("Usuario: " + usuario.nombre + " no se encuentra en la lista de originales.");
        return false;
    }

    usuarios_originales.splice(index, 1);

    console.log("Usuario: " + usuario.nombre + " con mail: " + usuario.mail + " removido de originales.");

    return true;

}

function removeModifiedUser(usuario: Usuario) {

    const index = usuarios_modificados.indexOf(usuario);

    if (index === -1) {
        console.error("Usuario: " + usuario.nombre + " no se encuentra en la lista de modificados.");
        return false;
    }

    usuarios_modificados.splice(index, 1);

    console.log("Usuario: " + usuario.nombre + " con mail: " + usuario.mail + " removido de modificados.");

    return true;

}

export { addOriginalUser, addModifiedUser, getOriginalsUsersList, getModifiedUsersList, getOriginalUsers, getModifiedUsers, removeOriginalUser, removeModifiedUser }
