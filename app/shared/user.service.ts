import { Injectable } from "@angular/core";

import { User } from "./user.model";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";




@Injectable()
export class UserService {
    constructor(private http: HttpClient,) { }
    public data
    public user
    public body
    getData(){
        return this.data
    }

    
    loginnew(user: User) {
        return new Promise((resolve, reject) => {
            this.user = user
            this.body = {
                email: user.email,
                password: user.password,
                role: 'engineer',
                rememberMe: true
            };
            console.log(this.body);
            this.http
                .post('https://development-api.herokuapp.com/loginst', this.body, {
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

    resetPassword(email) {
        return new Promise((resolve, reject) => {
        this.http
                .get(`https://development-api.herokuapp.com/account/password/update/byemail/${email}`, {responseType: "text"})    
                .subscribe((response) => {
                    console.log(response)
                    this.data = response;
                    resolve()
                }, (error) => {
                    console.log(error)
                    reject();
                }
                )
                })
    }
    

    handleErrors(error) {
        console.error(error.message);
    }
}
