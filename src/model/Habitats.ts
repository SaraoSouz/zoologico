import { Animal } from "./Animal";

export class Habitat {

    private nome: string;
    private lista_de_animais: Array <Animal>;

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