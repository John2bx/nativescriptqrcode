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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BsYXNoc2NyZWVuLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNwbGFzaHNjcmVlbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsNkRBQXVEO0FBQ3ZELDJEQUFpRDtBQUVqRCxzQ0FBZSxDQUFDLFlBQVksRUFBRSxjQUFNLE9BQUEsZ0NBQVUsRUFBVixDQUFVLENBQUMsQ0FBQztBQU1oRDtJQVFFO1FBUE8sU0FBSSxHQUFZLElBQUksQ0FBQztRQUVyQixhQUFRLEdBQVksSUFBSSxDQUFDO1FBTTlCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQ3hDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQsd0NBQWdCLEdBQWhCLFVBQWlCLEtBQUs7UUFDcEIsSUFBSSxDQUFDLFdBQVcsR0FBZSxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQzlDLENBQUM7SUFmVSxhQUFhO1FBSnpCLGdCQUFTLENBQUM7WUFDVCxXQUFXLEVBQUUscUJBQXFCO1lBQ2xDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDOztPQUNXLGFBQWEsQ0FnQnpCO0lBQUQsb0JBQUM7Q0FBQSxBQWhCRCxJQWdCQztBQWhCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcmVnaXN0ZXJFbGVtZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXInO1xuaW1wb3J0IHsgTG90dGllVmlldyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1sb3R0aWUnO1xuXG5yZWdpc3RlckVsZW1lbnQoJ0xvdHRpZVZpZXcnLCAoKSA9PiBMb3R0aWVWaWV3KTtcblxuQENvbXBvbmVudCh7XG4gIHRlbXBsYXRlVXJsOiAnaG9tZS5jb21wb25lbnQuaHRtbCcsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCB7XG4gIHB1YmxpYyBsb29wOiBib29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIHNyYzogc3RyaW5nO1xuICBwdWJsaWMgYXV0b1BsYXk6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMgYW5pbWF0aW9uczogQXJyYXk8c3RyaW5nPjtcblxuICBwcml2YXRlIF9sb3R0aWVWaWV3OiBMb3R0aWVWaWV3O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYW5pbWF0aW9ucyA9IFsnc3BsYXNoc2NyZWVuLmpzb24nXTtcbiAgICB0aGlzLnNyYyA9IHRoaXMuYW5pbWF0aW9uc1swXTtcbiAgfVxuXG4gIGxvdHRpZVZpZXdMb2FkZWQoZXZlbnQpIHtcbiAgICB0aGlzLl9sb3R0aWVWaWV3ID0gPExvdHRpZVZpZXc+ZXZlbnQub2JqZWN0O1xuICB9XG59Il19