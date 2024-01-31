class Ave extends Animal{
    private envergadura: float;
    constructor(_envergadura: string, _nome: string, _idade: number, _genero: string ){
        super(_nome, _idade, _genero);
        this.envergadura = _envergadura
    }

    /**
     * Retorna a raça do animal
     *
     * @returns raca : raça do animal
     */
    public getEnvergadura(): void {
        return this.envergadura;
    }

    /**
     * Atribui o parâmetro ao atributo animal
     *
     * @param _envergadura : raça do animal
     */
    public setEnvergadura(_envergadura: float): void {
        this.envergadura = _envergadura;
    }
}