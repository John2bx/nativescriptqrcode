"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var page_1 = require("tns-core-modules/ui/page");
var utilityModule = require("utils/utils");
var user_service_1 = require("../shared/user.service");
var user_model_1 = require("../shared/user.model");
var page;
var label;
var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(page, router, userService) {
        this.page = page;
        this.router = router;
        this.userService = userService;
        this.isLoggingIn = true;
        this.processing = false;
        this.page.actionBarHidden = true;
        this.user = new user_model_1.User;
        // this.user.email = "foo2@foo.com";
        // this.user.password = "foo";
        // this.processing = true;
    }
    ForgotPasswordComponent.prototype.toggleForm = function () {
        utilityModule.openUrl("http://www.gemvision.io");
    };
    ForgotPasswordComponent.prototype.submit = function () {
        if (!this.user.email || !this.user.password) {
            this.alert("Please provide both an email address and password.");
            return;
        }
        this.processing = true;
        if (this.isLoggingIn) {
            this.login(this.user);
        }
    };
    ForgotPasswordComponent.prototype.login = function (user) {
    };
    ForgotPasswordComponent.prototype.focusPassword = function () {
        this.password.nativeElement.focus();
    };
    ForgotPasswordComponent.prototype.focusConfirmPassword = function () {
        if (!this.isLoggingIn) {
            this.confirmPassword.nativeElement.focus();
        }
    };
    ForgotPasswordComponent.prototype.focusCompany = function () {
        this.company.nativeElement.focus();
    };
    ForgotPasswordComponent.prototype.forgotPassword = function () {
        var _this = this;
        this.processing = true;
        console.log('aaaaaaaaaaaaaaaaaaa', this.user);
        this.userService.resetPassword(this.user)
            .then(function () {
            _this.processing = false;
            _this.alert("Your password was successfully reset. Please check your email for instructions on choosing a new password.");
        }).catch(function () {
            _this.processing = false;
            _this.alert("Unfortunately, an error occurred resetting your password.");
        });
    };
    ForgotPasswordComponent.prototype.goBack = function () {
        this.router.navigate(["/login"]);
    };
    ForgotPasswordComponent.prototype.alert = function (message) {
        return dialogs_1.alert({
            title: "GEMVISION",
            okButtonText: "OK",
            message: message
        });
    };
    __decorate([
        core_1.ViewChild("password"),
        __metadata("design:type", core_1.ElementRef)
    ], ForgotPasswordComponent.prototype, "password", void 0);
    __decorate([
        core_1.ViewChild("confirmPassword"),
        __metadata("design:type", core_1.ElementRef)
    ], ForgotPasswordComponent.prototype, "confirmPassword", void 0);
    __decorate([
        core_1.ViewChild("company"),
        __metadata("design:type", core_1.ElementRef)
    ], ForgotPasswordComponent.prototype, "company", void 0);
    ForgotPasswordComponent = __decorate([
        core_1.Component({
            selector: "app-forgotpassword",
            moduleId: module.id,
            templateUrl: "./forgotpassword.component.html",
            styleUrls: ['./forgotpassword.component.css']
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.Router, user_service_1.UserService])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());
exports.ForgotPasswordComponent = ForgotPasswordComponent;
