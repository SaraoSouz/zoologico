import { Animal } from "./Animal";

/**
 * Representa um animal do zoologico.
 */
export class Ave extends Animal {
    private envergadura: number;
    constructor( _nome: string, _envergadura: number,  _genero: string, _idade: number,) {
        super(_nome, _idade, _genero);
        this.envergadura = _envergadura;
    }

    /**
      * Retorna a envergadura do animal
      *
      * @returns envergadura : envergadura do animal
      */
    public getEnvergadura(): number {
        return this.envergadura;
    }

    /**
     * Atribui o parâmetro à envergadura
     *
     * @param _envergadura : envergadura do animal
     */
    public setEnvergadura(_envergadura: number): void {
        this.envergadura = _envergadura;
    }
}