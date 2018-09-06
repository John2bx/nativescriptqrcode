import { Injectable } from "@angular/core";

import { User } from "./user.model";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";




@Injectable()
export class UserService {
    constructor(private http: HttpClient,) { }
    public data

    getData(){
        return this.data
    }

    
    loginnew(user: User) {
        return new Promise((resolve, reject) => {
            console.log(user.email, user.password)
            const body = {
                email: user.email,
                password: user.password,
                role: 'engineer',
                rememberMe: true
            };
            console.log(body);
            this.http
                .post('https://development-api.herokuapp.com/loginst', body, {
                    responseType: 'text'
                })
                .subscribe((response) => {
                    this.data = response;
                    resolve()
                }, (error) => {
                    reject();
                }
                )
                })
    }

   

    handleErrors(error) {
        console.error(error.message);
    }
}
