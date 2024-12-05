import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Recepie } from "./recepie.model";
import { RecepieService } from "../recepies/recepie.service";
import { map, tap } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class RecepieStorageService {

    constructor(private http: HttpClient, private recepieService: RecepieService) { }

    onSave() {
        let recepie = this.recepieService.getRecepies()
        this.http.put("https://manoj-pract-app-default-rtdb.firebaseio.com/post.json", recepie)
            .subscribe((response: Recepie[]) => {
                console.log(response);
            })
    }

    onFetch() {
        return this.http.get<Recepie[]>("https://manoj-pract-app-default-rtdb.firebaseio.com/post.json")
            .pipe(map((recepies) => {
                return recepies.map((recepie) => {
                    return { ...recepie, ingridents: recepie.ingridents ? recepie.ingridents : [] }
                })
            }), tap((recepies) => {
                this.recepieService.fetchedRecepies(recepies)
            }))
    }

}