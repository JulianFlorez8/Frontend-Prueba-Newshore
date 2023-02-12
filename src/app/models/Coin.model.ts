//Class CoinModel usada para estructurar las diferentes monedas usadas, se usa para conversion entre divisas
export class CoinModel {
    constructor(id: number, description: string, value: number) {
        this.id = id;
        this.description = description;
        this.value = value;
    }
    id: number = 0;
    description: string = "";
    value: number = 0
}