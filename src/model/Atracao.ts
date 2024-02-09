import { Animal } from "./Animal";
import { Habitat } from "./habitats";

export class Atracao {

    private nome: string;
    private lista_de_habitat: Array <Habitat>;

    constructor(_nome: string,
        _lista_de_habitat: Array <Habitat>,) {
      this.nome = _nome;
      this.lista_de_habitat = _lista_de_habitat;
    }

    /**
     * 
     * @returns o nome do habitat 
     */
    public getNome(): string {
        return this.nome
    }

    /**
     * 
     * @param nome 
     */
    public setNome(nome: string): void {
        this.nome = nome
    }

    /**
     * 
     * @returns Retorna a lista de habitats da atração
     */

    public getListaHabitat(): Array<Habitat> {
        return this.lista_de_habitat
    }

    /**
     * Define a lista de habitats da atração
     * @param _lista_de_a  lista_de_habitats A lista de habitats a ser atribuída à atração
     */
    public setListaHabitat(lista_de_habitat: Array <Habitat>): void {
        this.lista_de_habitat = lista_de_habitat
    }


}