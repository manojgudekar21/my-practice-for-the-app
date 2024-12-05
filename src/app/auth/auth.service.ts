import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";


interface responseData {
    idToken: string;
    email: string;
    refreshToken: string;
    expiresIn: string;
    localId: string;
}
@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) { }

    signUp(email: string, password: string) {
        return this.http.post<responseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAztBgiv7L06pNkYbhpboxe2KY1w3O3bsM',
            {
                email: email,
                password: password,
                returnSecureToken: true
            }
        )
    }
}