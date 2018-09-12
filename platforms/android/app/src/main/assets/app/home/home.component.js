"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../../app/shared/user.service");
var page_1 = require("tns-core-modules/ui/page");
var rxjs_1 = require("rxjs");
var router_1 = require("@angular/router");
var http_1 = require("@angular/common/http");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(userService, page, router, http) {
        var _this = this;
        this.userService = userService;
        this.page = page;
        this.router = router;
        this.http = http;
        this.message = " hello";
        this.source = rxjs_1.timer(1000, 1000);
        //output: 0
        this.subscribe = this.source.subscribe(function (val) {
            console.log(val);
            _this.bindings.seconds = 60 - val;
            if (_this.bindings.seconds <= 0) {
                _this.bindings.valid = false;
            }
        });
        this.bindings = {
            seconds: 60,
            valid: true,
            imageUri: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + this.userService.data,
            htmlString: "<img src=\"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + this.userService.data + "\"/>"
        };
        this.page.actionBarHidden = true;
        this.page.bindingContext = this.bindings;
    }
    HomeComponent.prototype.generate = function () {
        var _this = this;
        this.subscribe.unsubscribe();
        this.subscribe = this.source.subscribe(function (val) {
            console.log(val);
            _this.bindings.seconds = 60 - val;
            if (_this.bindings.seconds <= 0) {
                _this.bindings.valid = false;
            }
        });
        this.userService.loginnew(this.userService.user)
            .then(function () {
            _this.bindings = {
                seconds: 60,
                valid: true,
                imageUri: "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + _this.userService.data,
                htmlString: "<img src=\"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + _this.userService.data + "\"/>"
            };
            window.location.reload();
        })
            .catch(function () {
        });
    };
    HomeComponent.prototype.logoff = function () {
        this.router.navigate(["/login"]);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "app-home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
            styleUrls: ['./home.component.css']
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, page_1.Page, router_1.Router, http_1.HttpClient])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
