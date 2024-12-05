import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Recepie } from "./recepie.model";
import { RecepieService } from "../recepies/recepie.service";
import { RecepieStorageService } from "./recepieStorage.service";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ResolverService implements Resolve<Recepie[]> {

    constructor(private recepieService: RecepieService, private recepieStorageService: RecepieStorageService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        let recepies = this.recepieService.getRecepies()
        if (recepies.length === 0) {
            return this.recepieStorageService.onFetch()
        } else {
            return recepies
        }
    }
}