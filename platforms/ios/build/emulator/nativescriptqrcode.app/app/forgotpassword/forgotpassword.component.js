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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9yZ290cGFzc3dvcmQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZm9yZ290cGFzc3dvcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWlFO0FBQ2pFLDBDQUF5QztBQUN6Qyx1REFBNEQ7QUFDNUQsaURBQWdEO0FBQ2hELElBQU0sYUFBYSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUM3Qyx1REFBcUQ7QUFDckQsbURBQTRDO0FBUTVDLElBQUksSUFBZ0IsQ0FBQztBQUNyQixJQUFJLEtBQXdCLENBQUM7QUFVN0I7SUFRSSxpQ0FBb0IsSUFBVSxFQUFTLE1BQWMsRUFBVSxXQUF3QjtRQUFuRSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBUHZGLGdCQUFXLEdBQUcsSUFBSSxDQUFDO1FBRW5CLGVBQVUsR0FBRyxLQUFLLENBQUM7UUFNZixJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLGlCQUFJLENBQUE7UUFFcEIsb0NBQW9DO1FBQ3BDLDhCQUE4QjtRQUM5QiwwQkFBMEI7SUFDOUIsQ0FBQztJQUVELDRDQUFVLEdBQVY7UUFDSSxhQUFhLENBQUMsT0FBTyxDQUFDLHlCQUF5QixDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVELHdDQUFNLEdBQU47UUFDSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQzFDLElBQUksQ0FBQyxLQUFLLENBQUMsb0RBQW9ELENBQUMsQ0FBQztZQUNqRSxNQUFNLENBQUM7UUFDWCxDQUFDO1FBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDdkIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDbkIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDMUIsQ0FBQztJQUNMLENBQUM7SUFFRCx1Q0FBSyxHQUFMLFVBQU0sSUFBSTtJQUVWLENBQUM7SUFJRCwrQ0FBYSxHQUFiO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUNELHNEQUFvQixHQUFwQjtRQUNJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDL0MsQ0FBQztJQUNMLENBQUM7SUFDRCw4Q0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUNELGdEQUFjLEdBQWQ7UUFBQSxpQkFZQztRQVhHLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFBO1FBQ2xCLE9BQU8sQ0FBQyxHQUFHLENBQUMscUJBQXFCLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQzdDLElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDeEMsSUFBSSxDQUFDO1lBQ0wsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUE7WUFDdkIsS0FBSSxDQUFDLEtBQUssQ0FBQyw0R0FBNEcsQ0FBQyxDQUFDO1FBQzdILENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUNMLEtBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFBO1lBQ3ZCLEtBQUksQ0FBQyxLQUFLLENBQUMsMkRBQTJELENBQUMsQ0FBQztRQUM1RSxDQUFDLENBQUMsQ0FBQztJQUVQLENBQUM7SUFDRCx3Q0FBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFBO0lBQ3BDLENBQUM7SUFFRCx1Q0FBSyxHQUFMLFVBQU0sT0FBZTtRQUNqQixNQUFNLENBQUMsZUFBSyxDQUFDO1lBQ1QsS0FBSyxFQUFFLFdBQVc7WUFDbEIsWUFBWSxFQUFFLElBQUk7WUFDbEIsT0FBTyxFQUFFLE9BQU87U0FDbkIsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQXJFc0I7UUFBdEIsZ0JBQVMsQ0FBQyxVQUFVLENBQUM7a0NBQVcsaUJBQVU7NkRBQUM7SUFDZDtRQUE3QixnQkFBUyxDQUFDLGlCQUFpQixDQUFDO2tDQUFrQixpQkFBVTtvRUFBQztJQUNwQztRQUFyQixnQkFBUyxDQUFDLFNBQVMsQ0FBQztrQ0FBVSxpQkFBVTs0REFBQztJQU5qQyx1QkFBdUI7UUFObkMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxvQkFBb0I7WUFDOUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxpQ0FBaUM7WUFDOUMsU0FBUyxFQUFFLENBQUMsZ0NBQWdDLENBQUM7U0FDaEQsQ0FBQzt5Q0FTNEIsV0FBSSxFQUFpQixlQUFNLEVBQXVCLDBCQUFXO09BUjlFLHVCQUF1QixDQTBFbkM7SUFBRCw4QkFBQztDQUFBLEFBMUVELElBMEVDO0FBMUVZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IGFsZXJ0LCBwcm9tcHQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuY29uc3QgdXRpbGl0eU1vZHVsZSA9IHJlcXVpcmUoXCJ1dGlscy91dGlsc1wiKTtcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC91c2VyLnNlcnZpY2VcIjtcbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vc2hhcmVkL3VzZXIubW9kZWxcIjtcblxuXG5pbXBvcnQgKiBhcyBkaWFsb2dzIGZyb20gJ3VpL2RpYWxvZ3MnXG5pbXBvcnQgcGFnZXMgPSByZXF1aXJlKFwidWkvcGFnZVwiKTtcbmltcG9ydCBsYWJlbE1vZHVsZSA9IHJlcXVpcmUoXCJ1aS9sYWJlbFwiKTtcbmltcG9ydCBvYnNlcnZhYmxlID0gcmVxdWlyZShcImRhdGEvb2JzZXJ2YWJsZVwiKTtcblxudmFyIHBhZ2U6IHBhZ2VzLlBhZ2U7XG52YXIgbGFiZWw6IGxhYmVsTW9kdWxlLkxhYmVsO1xuXG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiYXBwLWZvcmdvdHBhc3N3b3JkXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2ZvcmdvdHBhc3N3b3JkLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJy4vZm9yZ290cGFzc3dvcmQuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEZvcmdvdFBhc3N3b3JkQ29tcG9uZW50IHtcbiAgICBpc0xvZ2dpbmdJbiA9IHRydWU7XG4gICAgdXNlclxuICAgIHByb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICBAVmlld0NoaWxkKFwicGFzc3dvcmRcIikgcGFzc3dvcmQ6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZChcImNvbmZpcm1QYXNzd29yZFwiKSBjb25maXJtUGFzc3dvcmQ6IEVsZW1lbnRSZWY7XG4gICAgQFZpZXdDaGlsZChcImNvbXBhbnlcIikgY29tcGFueTogRWxlbWVudFJlZjtcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSxwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXJcbiAgICAgICAgXG4gICAgICAgIC8vIHRoaXMudXNlci5lbWFpbCA9IFwiZm9vMkBmb28uY29tXCI7XG4gICAgICAgIC8vIHRoaXMudXNlci5wYXNzd29yZCA9IFwiZm9vXCI7XG4gICAgICAgIC8vIHRoaXMucHJvY2Vzc2luZyA9IHRydWU7XG4gICAgfVxuXG4gICAgdG9nZ2xlRm9ybSgpIHtcbiAgICAgICAgdXRpbGl0eU1vZHVsZS5vcGVuVXJsKFwiaHR0cDovL3d3dy5nZW12aXNpb24uaW9cIik7XG4gICAgfVxuXG4gICAgc3VibWl0KCkge1xuICAgICAgICBpZiAoIXRoaXMudXNlci5lbWFpbCB8fCAhdGhpcy51c2VyLnBhc3N3b3JkKSB7XG4gICAgICAgICAgICB0aGlzLmFsZXJ0KFwiUGxlYXNlIHByb3ZpZGUgYm90aCBhbiBlbWFpbCBhZGRyZXNzIGFuZCBwYXNzd29yZC5cIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5pc0xvZ2dpbmdJbikge1xuICAgICAgICAgICAgdGhpcy5sb2dpbih0aGlzLnVzZXIpO1xuICAgICAgICB9IFxuICAgIH1cblxuICAgIGxvZ2luKHVzZXIpIHtcbiAgICAgICBcbiAgICB9XG5cbiAgIFxuXG4gICAgZm9jdXNQYXNzd29yZCgpIHtcbiAgICAgICAgdGhpcy5wYXNzd29yZC5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICAgIGZvY3VzQ29uZmlybVBhc3N3b3JkKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNMb2dnaW5nSW4pIHtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybVBhc3N3b3JkLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb2N1c0NvbXBhbnkoKSB7XG4gICAgICAgIHRoaXMuY29tcGFueS5uYXRpdmVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICAgIGZvcmdvdFBhc3N3b3JkKCkge1xuICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSB0cnVlXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYWFhYWFhYWFhYWFhYWFhYWFhYScsdGhpcy51c2VyKVxuICAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlc2V0UGFzc3dvcmQodGhpcy51c2VyKVxuICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NpbmcgPSBmYWxzZVxuICAgICAgICAgICAgdGhpcy5hbGVydChcIllvdXIgcGFzc3dvcmQgd2FzIHN1Y2Nlc3NmdWxseSByZXNldC4gUGxlYXNlIGNoZWNrIHlvdXIgZW1haWwgZm9yIGluc3RydWN0aW9ucyBvbiBjaG9vc2luZyBhIG5ldyBwYXNzd29yZC5cIik7XG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc2luZyA9IGZhbHNlXG4gICAgICAgICAgICB0aGlzLmFsZXJ0KFwiVW5mb3J0dW5hdGVseSwgYW4gZXJyb3Igb2NjdXJyZWQgcmVzZXR0aW5nIHlvdXIgcGFzc3dvcmQuXCIpO1xuICAgICAgICB9KTtcblxuICAgIH1cbiAgICBnb0JhY2soKSB7XG4gICAgICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9sb2dpblwiXSlcbiAgICB9XG5cbiAgICBhbGVydChtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuIGFsZXJ0KHtcbiAgICAgICAgICAgIHRpdGxlOiBcIkdFTVZJU0lPTlwiLFxuICAgICAgICAgICAgb2tCdXR0b25UZXh0OiBcIk9LXCIsXG4gICAgICAgICAgICBtZXNzYWdlOiBtZXNzYWdlXG4gICAgICAgIH0pO1xuICAgIH1cbn0iXX0=