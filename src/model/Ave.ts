import { Animal } from "./Animal";

export class Ave extends Animal {
    private envergadura: number;
    constructor( _nome: string, _envergadura: number,  _genero: string, _idade: number,) {
        super(_nome, _idade, _genero);
        this.envergadura = _envergadura;
    }

    /**
      * Retorna a envergadura da pessoa
      *
      * @returns envergadura : envergadura da pessoa
      */
    public getEnvergadura(): number {
        return this.envergadura;
    }

    /**
     * Atribui o parâmetro à envergadura
     *
     * @param _envergadura : envergadura da pessoa
     */
    public setEnvergadura(_envergadura: number): void {
        this.envergadura = _envergadura;
    }
}