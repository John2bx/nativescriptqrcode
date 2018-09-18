import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { LoginComponent } from './login/login.component';
import { HomeComponent } from "~/home/home.component";
import { SplashScreenComponent } from "~/splashscreen/splashscreen.component";

const routes: Routes = [
    { path: "", redirectTo: "/splashscreen", pathMatch: "full" },
    { path: "login", component: LoginComponent },
    { path: "splashscreen", component: SplashScreenComponent },
    { path: "reset", component: LoginComponent },
    { path: "home", component: HomeComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }