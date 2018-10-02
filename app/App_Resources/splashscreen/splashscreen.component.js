"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var nativescript_lottie_1 = require("nativescript-lottie");
nativescript_angular_1.registerElement('LottieView', function () { return nativescript_lottie_1.LottieView; });
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.loop = true;
        this.autoPlay = true;
        this.animations = ['splashscreen.json'];
        this.src = this.animations[0];
    }
    HomeComponent.prototype.lottieViewLoaded = function (event) {
        this._lottieView = event.object;
    };
    HomeComponent = __decorate([
        core_1.Component({
            templateUrl: 'home.component.html',
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
