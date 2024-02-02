class Reptil extends Animal{
    private escama: string;
    constructor(_escama: string, _nome: string, _idade: number, _genero: string ){
        super(_nome, _idade, _genero);
        this.escama = _escama
    }

    /**
     * Retorna a raça do animal
     *
     * @returns raca : raça do animal
     */
    public getEscama(): string {
        return this.escama;
    }

    /**
     * Atribui o parâmetro ao atributo animal
     *
     * @param _escama : raça do animal
     */
    public setEscama(_escama: string): void {
        this.escama = _escama;
    }
}