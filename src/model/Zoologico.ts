import { Animal } from "./Animal";
import { Atracao } from "./Atracao";

export class Zoologico {

    private nome: string;
    private lista_de_atracoes: Array<Atracao>;

    constructor(_nome: string, _lista_de_atracoes: Array<Atracao>) {
        this.nome = _nome;
        this.lista_de_atracoes = _lista_de_atracoes;
    }

    /**
     * Retorna o nome do zoológico
     * @returns O nome do zoológico
     */
    public getNome(): string {
        return this.nome;
    }

    /**
     * Define o nome do zoológico
     * @param nome O novo nome do zoológico
     */
    public setNome(nome: string): void {
        this.nome = nome;
    }

    /**
     * Retorna a lista de atrações do zoológico
     * @returns A lista de atrações do zoológico
     */
    public getListaAtracoes(): Array<Atracao> {
        return this.lista_de_atracoes;
    }

    /**
     * Define a lista de atrações do zoológico
     * @param lista_de_atracoes A nova lista de atrações do zoológico
     */
    public setListaAtracoes(lista_de_atracoes: Array<Atracao>): void {
        this.lista_de_atracoes = lista_de_atracoes;
    }
}