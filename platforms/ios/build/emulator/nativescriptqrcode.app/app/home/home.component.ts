import { Component, OnInit, Input } from "@angular/core";
import {UserService} from '../../app/shared/user.service';
import { Page } from "tns-core-modules/ui/page";
import { timer, Observable, interval  } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router } from "@angular/router";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Image } from "tns-core-modules/ui/image";
import { Label } from "tns-core-modules/ui/label";
import { StackLayout } from "tns-core-modules/ui/layouts/stack-layout";
import {LoginComponent} from '../login/login.component'


@Component({
    selector: "app-home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    message = ` hello`;
    public source = timer(1000, 1000);


//output: 0
public subscribe = this.source.subscribe(val =>{
    console.log(val)
    this.bindings.seconds = 60-val;
    if (this.bindings.seconds <= 0) {
        this.generate();


    }
})
    
   public bindings= {
       seconds: 60,
       valid: true,
       imageUri: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=`+ this.userService.data,
       htmlString: `<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${this.userService.data}"/>` 
   };
   
    constructor(private userService: UserService,private page: Page, private router: Router, private http: HttpClient,) {
        this.page.actionBarHidden = true;
        this.page.bindingContext = this.bindings;
        
      
       
    }
    public generate() {
        this.subscribe.unsubscribe()
        this.subscribe = this.source.subscribe(val =>{
            console.log(val)
            this.bindings.seconds = 60-val;
            if (this.bindings.seconds <= 0) {

                this.generate()
        
        
            }
        })
            this.userService.loginnew(this.userService.user)
                .then(() => {
                     this.bindings= {
                        seconds: 60,
                        valid: true,
                        imageUri: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=`+ this.userService.data,
                        htmlString: `<img src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${this.userService.data}"/>` 
                    };
                    
                    window.location.reload()
                })
                .catch(() => {
                    
                });
        }

    
        
        
        
    
    public logoff() {
        this.router.navigate(["/login"]);
    }
   
   
}
