import { Autor } from './autor';

export class Livro {
    public id:number;
    public nome:string;
    public anoDePublicacao:number;
    public autor:Autor;
    public descricao:string;
}
