"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var login_component_1 = require("./login/login.component");
var home_component_1 = require("~/home/home.component");
var splashscreen_component_1 = require("~/splashscreen/splashscreen.component");
var routes = [
    { path: "", redirectTo: "/splashscreen", pathMatch: "full" },
    { path: "login", component: login_component_1.LoginComponent },
    { path: "splashscreen", component: splashscreen_component_1.SplashScreenComponent },
    { path: "reset", component: login_component_1.LoginComponent },
    { path: "home", component: home_component_1.HomeComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
