import Usuario from "./Usuario";

const niveles = ["Coordinador", "Administrador"];


class Administrador extends Usuario {

    nivel: string;


    constructor(nombre: string, apellido: string, edad: number, mail: string, nivel: string) {
        super(nombre, apellido, edad, mail);
        this.nivel = nivel;

        if (!niveles.includes(this.nivel)) {
            console.error(`Error: El nivel "${this.nivel}" no es válido. Los niveles válidos son: ${niveles.join(", ")}`);
            return;
        }
    }

    public getNivel(): string {
        return this.nivel;
    }

    public setNivel(nivel: string): void {
        if (!niveles.includes(nivel)) {
            console.error(`Error: El nivel "${nivel}" no es válido. Los niveles válidos son: ${niveles.join(", ")}`);
            return;
        }
        this.nivel = nivel;
    }

    public mostrarNivel(): void {
        console.log(`Nivel: ${this.getNivel()}`);
    }

    public mostrarInformacion(): void {
        console.log(`Nombre: ${this.getNombre()}`);
        console.log(`Edad: ${this.getEdad()}`);
        console.log(`Correo electrónico: ${this.getMail()}`);
        console.log(`Apellido: ${this.getApellido()}`);
        console.log(`Nivel: ${this.getNivel()}`);
    }
}

function nivelesValidos() {
    return niveles;
}

export default Administrador;

export { nivelesValidos };