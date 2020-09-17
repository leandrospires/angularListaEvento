export interface Endereco {
    address: string;
    city: string;
    country: string;
}
export interface Eventos {
    name: string;
    date: string | Date;
    time: string;
    location: Endereco;
}
