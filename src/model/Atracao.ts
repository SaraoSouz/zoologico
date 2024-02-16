import { Animal } from "./Animal";
import { Habitat } from "./Habitats";

/**
 * Representa uma atração no zoológico.
 */

export class Atracao {

     /**
     * O nome da atração.
     */

    private nome: string;

    /**
     * A lista de habitat que habitam as atrações.
     */

    private lista_de_habitat: Array <Habitat>;

    /**
     * Cria uma nova instância de Atracao.
     * 
     * @param _nome O nome da atração.
     * @param _listaHabitat A lista de habitats que habitam as atrações.
     */

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