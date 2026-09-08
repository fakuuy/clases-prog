
function indexarPorNombre(usuarios: any[]): Map<string, any> {
    const mapaUsuarios = new Map<string, any>();

    for (const usuario of usuarios) {
        mapaUsuarios.set(usuario.getNombre(), usuario);
    }

    return mapaUsuarios;
}

export { indexarPorNombre };

function indexarPorApellido(usuarios: any[]): Map<string, any> {
    const mapaUsuarios = new Map<string, any>();

    for (const usuario of usuarios) {
        mapaUsuarios.set(usuario.getApellido(), usuario);
    }

    return mapaUsuarios;
}

export { indexarPorApellido };

function indexarPorMail(usuarios: any[]): Map<string, any> {
    const mapaUsuarios = new Map<string, any>();

    for (const usuario of usuarios) {
        mapaUsuarios.set(usuario.getMail(), usuario);
    }

    return mapaUsuarios;
}

export { indexarPorMail };

function indexarPorNombreApellido(usuarios: any[]): Map<string, any> {
    const mapaUsuarios = new Map<string, any>();

    for (const usuario of usuarios) {
        const clave = `${usuario.getNombre()} ${usuario.getApellido()}`;
        mapaUsuarios.set(clave, usuario);
    }

    return mapaUsuarios;
}

export { indexarPorNombreApellido };