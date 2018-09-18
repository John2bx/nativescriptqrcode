"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var nativescript_lottie_1 = require("nativescript-lottie");
var rxjs_1 = require("rxjs");
var router_1 = require("@angular/router");
var page_1 = require("tns-core-modules/ui/page");
nativescript_angular_1.registerElement('LottieView', function () { return nativescript_lottie_1.LottieView; });
var SplashScreenComponent = /** @class */ (function () {
    function SplashScreenComponent(router, page) {
        var _this = this;
        this.router = router;
        this.page = page;
        this.loop = true;
        this.autoPlay = true;
        this.source = rxjs_1.timer(1000, 1000);
        //output: 0
        this.subscribe = this.source.subscribe(function (val) {
            console.log(val);
            if (val === 4) {
                _this.logoff();
            }
        });
        this.animations = ['splashscreen.json'];
        this.src = this.animations[0];
        this.page.actionBarHidden = true;
    }
    SplashScreenComponent.prototype.logoff = function () {
        console.log('im logging off');
        this.router.navigate(["/login"]);
    };
    SplashScreenComponent = __decorate([
        core_1.Component({
            templateUrl: 'splashscreen.component.xml',
            styleUrls: ['splashscreen.component.css'],
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [router_1.Router, page_1.Page])
    ], SplashScreenComponent);
    return SplashScreenComponent;
}());
exports.SplashScreenComponent = SplashScreenComponent;
