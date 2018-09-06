import { Component, OnInit, Input } from "@angular/core";
import {UserService} from '../../app/shared/user.service'

@Component({
    selector: "app-home",
    moduleId: module.id,
    templateUrl: "./home.component.html",
})
export class HomeComponent {
    message = ` hello`;
    imageUri = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${this.userService.data}`;
   
    constructor(private userService: UserService,) {
       
    }
    
   
}
