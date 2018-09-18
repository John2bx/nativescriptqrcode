import { Component, ElementRef, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { alert, prompt } from "tns-core-modules/ui/dialogs";
import { Page } from "tns-core-modules/ui/page";
const utilityModule = require("utils/utils");

import { User } from "../shared/user.model";
import { UserService } from "../shared/user.service";


@Component({
    selector: "app-login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    isLoggingIn = true;
    user: User;
    processing = false;
    @ViewChild("password") password: ElementRef;
    @ViewChild("confirmPassword") confirmPassword: ElementRef;
    @ViewChild("company") company: ElementRef;

    constructor(private page: Page, private userService: UserService, private router: Router) {
        this.page.actionBarHidden = true;
        this.user = new User();
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
        this.userService.loginnew(user)
            .then(() => {
                this.processing = false;
                this.router.navigate(["/home"]);
            })
            .catch(() => {
                this.processing = false;
                this.alert("Unfortunately we could not find your account.",);
            });
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
        this.router.navigate(["/reset"]);
       /*  prompt({
            title: "Forgot Password",
            message: "Enter the email address you used to register for GEMVISION to reset your password.",
            inputType: "email",
            defaultText: "",
            okButtonText: "Ok",
            cancelButtonText: "Cancel"
        }).then((data) => {
            if (data.result) {
                this.userService.resetPassword(data.text.trim())
                    .then(() => {
                        this.alert("Your password was successfully reset. Please check your email for instructions on choosing a new password.");
                    }).catch(() => {
                        this.alert("Unfortunately, an error occurred resetting your password.");
                    });
            }
        }); */
    }

    alert(message: string) {
        return alert({
            title: "GEMVISION",
            okButtonText: "OK",
            message: message
        });
    }
}