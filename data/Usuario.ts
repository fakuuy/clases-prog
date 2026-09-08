class Usuario {
    nombre: string;
    edad: number;
    mail: string;
    apellido: string;

    constructor(nombre: string, apellido: string, edad: number, mail: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.mail = mail;


        if (this.edad < 18) {
            throw new Error("El usuario debe ser mayor de edad.");
        }

        if (!this.mail.includes("@")) {
            throw new Error("El correo electrónico no es válido.");
        }

        if (this.apellido.length < 0) {
            throw new Error("El apellido no puede estar vacío.");
        }

        if (this.nombre.length < 0) {
            throw new Error("El nombre no puede estar vacío.");
        }

    }

    public getNombre(): string {
        return this.nombre;
    }

    public getEdad(): number {
        return this.edad;
    }

    public getMail(): string {
        return this.mail;
    }

    public getApellido(): string {
        return this.apellido;
    }

    public setNombre(nombre: string): void {
        if (nombre.length < 0) {
            throw new Error("El nombre no puede estar vacío.");
        }
        this.nombre = nombre;
    }

    public setEdad(edad: number): void {
        if (edad < 18) {
            throw new Error("El usuario debe ser mayor de edad.");
        }
        this.edad = edad;
    }

    public setMail(mail: string): void {
        if (!mail.includes("@")) {
            throw new Error("El correo electrónico no es válido.");
        }
        this.mail = mail;
    }

    public setApellido(apellido: string): void {
        if (apellido.length < 0) {
            throw new Error("El apellido no puede estar vacío.");
        }
        this.apellido = apellido;
    }

    public mostrarInformacion(): void {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Edad: ${this.edad}`);
        console.log(`Correo electrónico: ${this.mail}`);
        console.log(`Apellido: ${this.apellido}`);
    }

}

export default Usuario;