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
            if (val === 5) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsYXNoc2NyZWVuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwbGFzaHNjcmVlbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsNkRBQXVEO0FBQ3ZELDJEQUFpRDtBQUNqRCw2QkFBMEI7QUFDMUIsMENBQXlDO0FBQ3pDLGlEQUFnRDtBQUVoRCxzQ0FBZSxDQUFDLFlBQVksRUFBRSxjQUFNLE9BQUEsZ0NBQVUsRUFBVixDQUFVLENBQUMsQ0FBQztBQU9oRDtJQVFFLCtCQUFvQixNQUFjLEVBQVUsSUFBVTtRQUF0RCxpQkFJQztRQUptQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBTTtRQVAvQyxTQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFVekIsV0FBTSxHQUFHLFlBQUssQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFHcEMsV0FBVztRQUNKLGNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNoQixFQUFFLENBQUEsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUEsQ0FBQztnQkFBQSxLQUFJLENBQUMsTUFBTSxFQUFFLENBQUE7WUFBQSxDQUFDO1FBRTVCLENBQUMsQ0FBQyxDQUFBO1FBWkEsSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQTtJQUNsQyxDQUFDO0lBYU0sc0NBQU0sR0FBYjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtRQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQTVCWSxxQkFBcUI7UUFMakMsZ0JBQVMsQ0FBQztZQUNULFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7WUFDekMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBUzRCLGVBQU0sRUFBZ0IsV0FBSTtPQVIzQyxxQkFBcUIsQ0E4QmpDO0lBQUQsNEJBQUM7Q0FBQSxBQTlCRCxJQThCQztBQTlCWSxzREFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyJztcbmltcG9ydCB7IExvdHRpZVZpZXcgfSBmcm9tICduYXRpdmVzY3JpcHQtbG90dGllJztcbmltcG9ydCB7dGltZXJ9IGZyb20gJ3J4anMnXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuXG5yZWdpc3RlckVsZW1lbnQoJ0xvdHRpZVZpZXcnLCAoKSA9PiBMb3R0aWVWaWV3KTtcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlVXJsOiAnc3BsYXNoc2NyZWVuLmNvbXBvbmVudC54bWwnLFxuICBzdHlsZVVybHM6IFsnc3BsYXNoc2NyZWVuLmNvbXBvbmVudC5jc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZFxufSlcbmV4cG9ydCBjbGFzcyBTcGxhc2hTY3JlZW5Db21wb25lbnQge1xuICBwdWJsaWMgbG9vcDogYm9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyBzcmM6IHN0cmluZztcbiAgcHVibGljIGF1dG9QbGF5OiBib29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIGFuaW1hdGlvbnM6IEFycmF5PHN0cmluZz47XG5cbiAgcHJpdmF0ZSBfbG90dGllVmlldzogTG90dGllVmlldztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlcjogUm91dGVyLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHtcbiAgICB0aGlzLmFuaW1hdGlvbnMgPSBbJ3NwbGFzaHNjcmVlbi5qc29uJ107XG4gICAgdGhpcy5zcmMgPSB0aGlzLmFuaW1hdGlvbnNbMF07XG4gICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWVcbiAgfVxuICBwdWJsaWMgc291cmNlID0gdGltZXIoMTAwMCwgMTAwMCk7XG5cblxuLy9vdXRwdXQ6IDBcbnB1YmxpYyBzdWJzY3JpYmUgPSB0aGlzLnNvdXJjZS5zdWJzY3JpYmUodmFsID0+e1xuICBjb25zb2xlLmxvZyh2YWwpXG4gIGlmKHZhbCA9PT0gNSl7dGhpcy5sb2dvZmYoKX1cblxuICB9KVxuICAgICAgICBcbiAgICAgICAgXG4gICAgXG4gIHB1YmxpYyBsb2dvZmYoKSB7XG4gICAgY29uc29sZS5sb2coJ2ltIGxvZ2dpbmcgb2ZmJylcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbG9naW5cIl0pO1xufVxuXG59XG4iXX0=