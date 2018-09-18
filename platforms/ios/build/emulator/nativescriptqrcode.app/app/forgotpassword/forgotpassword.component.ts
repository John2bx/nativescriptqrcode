import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";
const utilityModule = require("utils/utils");
import { UserService } from "../shared/user.service";
import { User } from "../shared/user.model";


import * as dialogs from 'ui/dialogs'
import pages = require("ui/page");
import labelModule = require("ui/label");
import observable = require("data/observable");

var page: pages.Page;
var label: labelModule.Label;



@Component({
    selector: "app-forgotpassword",
    moduleId: module.id,
    templateUrl: "./forgotpassword.component.html",
    styleUrls: ['./forgotpassword.component.css']
})
export class ForgotPasswordComponent {
    isLoggingIn = true;
    user
    processing = false;
    @ViewChild("password") password: ElementRef;
    @ViewChild("confirmPassword") confirmPassword: ElementRef;
    @ViewChild("company") company: ElementRef;

    constructor(private page: Page,private router: Router, private userService: UserService) {
        this.page.actionBarHidden = true;
        this.user = new User
        
        // this.user.email = "foo2@foo.com";
        // this.user.password = "foo";
        // this.processing = true;
    }

    toggleForm() {
        utilityModule.openUrl("http://www.gemvision.io");
    }

    submit() {
        if (!this.user.email || !this.user.password) {
            this.alert("Please provide both an email address and password.");
            return;
        }

        this.processing = true;
        if (this.isLoggingIn) {
            this.login(this.user);
        } 
    }

    login(user) {
       
    }

   

    focusPassword() {
        this.password.nativeElement.focus();
    }
    focusConfirmPassword() {
        if (!this.isLoggingIn) {
            this.confirmPassword.nativeElement.focus();
        }
    }
    focusCompany() {
        this.company.nativeElement.focus();
    }
    forgotPassword() {
        this.processing = true
            console.log('aaaaaaaaaaaaaaaaaaa',this.user)
           this.userService.resetPassword(this.user)
           .then(() => {
            this.processing = false
            this.alert("Your password was successfully reset. Please check your email for instructions on choosing a new password.");
        }).catch(() => {
            this.processing = false
            this.alert("Unfortunately, an error occurred resetting your password.");
        });

    }
    goBack() {
        this.router.navigate(["/login"])
    }

    alert(message: string) {
        return alert({
            title: "GEMVISION",
            okButtonText: "OK",
            message: message
        });
    }
}