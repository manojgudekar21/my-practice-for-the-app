import { Injectable } from "@angular/core";
import { Ingrident } from "../shared/ingrident.model";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ShoppingListService {

    updatedIngrident = new Subject<Ingrident[]>();
    index = new Subject<number>();

    ingridents: Ingrident[] = [
        new Ingrident("apple", 5),
        new Ingrident("annar", 4)
    ]

    getIngridents() {
        return this.ingridents.slice()
    }
    addIngrident(ingrident: Ingrident) {
        this.ingridents.push(ingrident)
        this.updatedIngrident.next(this.ingridents.slice())
    }
    getIngridentAccToIndex(id: number) {
        let ingrident = this.ingridents[id];
        return ingrident;
    }
    onRemoveIngrident(index: number) {
        this.ingridents.splice(index, 1);
        this.updatedIngrident.next(this.ingridents.slice())
    }
    addIngridentsFromSl(ingrident: Ingrident[]) {
        this.ingridents.push(...ingrident)
    }

}