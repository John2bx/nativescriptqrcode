"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var page_1 = require("tns-core-modules/ui/page");
var utilityModule = require("utils/utils");
var user_model_1 = require("../shared/user.model");
var user_service_1 = require("../shared/user.service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(page, userService, router) {
        this.page = page;
        this.userService = userService;
        this.router = router;
        this.isLoggingIn = true;
        this.processing = false;
        this.page.actionBarHidden = true;
        this.user = new user_model_1.User();
        // this.user.email = "foo2@foo.com";
        // this.user.password = "foo";
        // this.processing = true;
    }
    LoginComponent.prototype.toggleForm = function () {
        utilityModule.openUrl("http://www.gemvision.io");
    };
    LoginComponent.prototype.submit = function () {
        if (!this.user.email || !this.user.password) {
            this.alert("Please provide both an email address and password.");
            return;
        }
        this.processing = true;
        if (this.isLoggingIn) {
            this.login(this.user);
        }
    };
    LoginComponent.prototype.login = function (user) {
        var _this = this;
        this.userService.loginnew(user)
            .then(function () {
            _this.processing = false;
            _this.router.navigate(["/home"]);
        })
            .catch(function () {
            _this.processing = false;
            _this.alert("Unfortunately we could not find your account.");
        });
    };
    LoginComponent.prototype.focusPassword = function () {
        this.password.nativeElement.focus();
    };
    LoginComponent.prototype.focusConfirmPassword = function () {
        if (!this.isLoggingIn) {
            this.confirmPassword.nativeElement.focus();
        }
    };
    LoginComponent.prototype.focusCompany = function () {
        this.company.nativeElement.focus();
    };
    LoginComponent.prototype.forgotPassword = function () {
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
    };
    LoginComponent.prototype.alert = function (message) {
        return dialogs_1.alert({
            title: "GEMVISION",
            okButtonText: "OK",
            message: message
        });
    };
    __decorate([
        core_1.ViewChild("password"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "password", void 0);
    __decorate([
        core_1.ViewChild("confirmPassword"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "confirmPassword", void 0);
    __decorate([
        core_1.ViewChild("company"),
        __metadata("design:type", core_1.ElementRef)
    ], LoginComponent.prototype, "company", void 0);
    LoginComponent = __decorate([
        core_1.Component({
            selector: "app-login",
            moduleId: module.id,
            templateUrl: "./login.component.html",
            styleUrls: ['./login.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page, user_service_1.UserService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
