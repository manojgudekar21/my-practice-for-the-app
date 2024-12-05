import { Ingrident } from "./ingrident.model";

export class Recepie {
    constructor(public recepie: string, public discription: string, public imagePath: string, public ingridents: Ingrident[]) { }
}