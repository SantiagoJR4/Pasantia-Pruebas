export interface Datos {
    id:       number;
    nombre:   string;
    apellido: string;
    celular:  number;
    empleo:   Empleo;
}
export interface Empleo {
    id:      number;
    cargo:   string;
    salario: string;
}
export interface DatosPersona{
    nombre:   string;
    apellido: string;
    celular:  number;
    empleo: number;
}
