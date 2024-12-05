import { Injectable } from "@angular/core";
import { Recepie } from "../shared/recepie.model";
import { Ingrident } from "../shared/ingrident.model";
import { Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class RecepieService {

    updatedRecepies = new Subject<Recepie[]>();

    // recepies: Recepie[] = [
    //     new Recepie("chicken curry", "its so delecious", "https://www.cubesnjuliennes.com/wp-content/uploads/2020/07/Instant-Pot-Chicken-Curry-Recipe.jpg",
    //         [
    //             new Ingrident("chicken", 1),
    //             new Ingrident("chicken masala", 2)
    //         ]
    //     ),
    //     new Recepie("mutton curry", "its so awesome", "https://i0.wp.com/www.bharatzkitchen.com/wp-content/uploads/2018/11/mutton-curry-thumb.jpg?fit=800%2C450&ssl=1",
    //         [
    //             new Ingrident("mutton", 1),
    //             new Ingrident("mutton masala", 2)
    //         ]
    //     )
    // ]

    recepies: Recepie[] = []

    getRecepies() {
        return this.recepies.slice();
    }
    getRecepieById(id: number) {
        let recepie = this.recepies[id];
        return recepie;
    }
    onDeleteRecepie(index: number) {
        this.recepies.splice(index, 1);
        this.updatedRecepies.next(this.recepies.slice())
    }
    onEditRecepie(id: number, newRecepie: Recepie) {
        this.recepies[id] = newRecepie;
        this.updatedRecepies.next(this.recepies.slice())
    }
    onAddRecepie(newRecepie: Recepie) {
        this.recepies.push(newRecepie);
        this.updatedRecepies.next(this.recepies.slice())
    }
    fetchedRecepies(fetchedRecepies: Recepie[]) {
        this.recepies = fetchedRecepies
        this.updatedRecepies.next(this.recepies.slice())
    }

}