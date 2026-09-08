import Usuario from "./Usuario";

class Solicitante extends Usuario {
    
    sector: string;
    
    constructor(nombre: string, apellido: string, edad: number, mail: string, sector: string) {
        super(nombre, apellido, edad, mail);
        this.sector = sector;
    }

    public getSector(): string {
        return this.sector;
    }

    public setSector(sector: string): void {
        this.sector = sector;
    }

    public mostrarInformacion(): void {
        console.log(`Nombre: ${this.getNombre()}`);
        console.log(`Edad: ${this.getEdad()}`);
        console.log(`Correo electrónico: ${this.getMail()}`);
        console.log(`Apellido: ${this.getApellido()}`);
        console.log(`Sector: ${this.getSector()}`);
    }

    public mostrarSector(): void {
        console.log(`Sector: ${this.getSector()}`);
    }

}

export default Solicitante;