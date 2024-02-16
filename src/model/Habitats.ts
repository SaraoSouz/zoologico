import { Animal } from "./Animal";

/**
 * Representa um habitat no zoológico, onde os animais vivem.
 */

export class Habitat {

 /**
     * O nome do habitat.
     */
    private nome: string;

     /**
     * A lista de animais que habitam este habitat.
     */

    private lista_de_animais: Array <Animal>;


    /**
     * Cria uma nova instância de Habitat.
     * 
     * @param _nome O nome do habitat.
     * @param _listaAnimais A lista de animais que habitam o habitat.
     */
    
    constructor(_nome: string,
        _lista_de_animais: Array <Animal>,) {
      this.nome = _nome;
      this.lista_de_animais = _lista_de_animais;
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
     * @returns A lista de animais do habitat
     */

    public getListaAnimais(): Array<Animal> {
        return this.lista_de_animais
    }

    /**
     * 
     * @param _lista_de_animais A lista de animais a ser atribuida ao habitat 
     */
    public setListaAnimais(lista_de_animais: Array <Animal>): void {
        this.lista_de_animais = lista_de_animais
    }


}