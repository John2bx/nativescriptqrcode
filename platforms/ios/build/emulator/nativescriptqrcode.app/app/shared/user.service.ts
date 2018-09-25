import { Injectable, Testability  } from "@angular/core";

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
            .post( `https://api-gemvision.herokuapp.com/loginst`, this.body, {
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

    resetPassword(user) {
       
         return new Promise((resolve, reject) => {
        this.http
                .get(`https://api-gemvision.herokuapp.com/account/password/update/byemail/${user}`, {responseType: "text"})    
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
    getUrlForReset(user) {
        const environment: string = ''
        var company = user.company.toLowerCase();
        var email = user.email.toLowerCase();
        console.log(company, 'companyname');
        if (this.specialInstances[company]) {return `https://${this.specialInstances[company]}.herokuapp.com/account/password/update/byemail/${email}`} else {
            return `https://api-${company}.herokuapp.com/account/password/update/byemail/${email}`}
    }
    getUrlForLogin(user) {
        const environment: string = ''
        var company = user.company.toLowerCase();
        console.log(company, 'companyname');
        if (this.specialInstances[company]) {return `https://${this.specialInstances[company]}.herokuapp.com/loginst`} else {
            return `https://api-${company}.herokuapp.com/loginst`}
    }
    public specialInstances = {
        development: 'development-api',
        demo: 'api-demo1',
        staging: 'api-staging1',
        skb: 'api-skb-prod',
        skbtest: 'api-skb',
        dev: 'development-api',
    }
}
