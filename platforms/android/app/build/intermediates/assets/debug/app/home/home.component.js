"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var user_service_1 = require("../../app/shared/user.service");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(userService) {
        this.userService = userService;
        this.message = " hello";
        this.imageUri = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + this.userService.data;
    }
    HomeComponent = __decorate([
        core_1.Component({
            selector: "app-home",
            moduleId: module.id,
            templateUrl: "./home.component.html",
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCw4REFBeUQ7QUFPekQ7SUFJSSx1QkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFINUMsWUFBTyxHQUFHLFFBQVEsQ0FBQztRQUNuQixhQUFRLEdBQUcsbUVBQWlFLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBTSxDQUFDO0lBSXBHLENBQUM7SUFOUSxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDO3lDQUttQywwQkFBVztPQUpuQyxhQUFhLENBU3pCO0lBQUQsb0JBQUM7Q0FBQSxBQVRELElBU0M7QUFUWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1VzZXJTZXJ2aWNlfSBmcm9tICcuLi8uLi9hcHAvc2hhcmVkL3VzZXIuc2VydmljZSdcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiYXBwLWhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHtcbiAgICBtZXNzYWdlID0gYCBoZWxsb2A7XG4gICAgaW1hZ2VVcmkgPSBgaHR0cHM6Ly9hcGkucXJzZXJ2ZXIuY29tL3YxL2NyZWF0ZS1xci1jb2RlLz9zaXplPTE1MHgxNTAmZGF0YT0ke3RoaXMudXNlclNlcnZpY2UuZGF0YX1gO1xuICAgXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsKSB7XG4gICAgICAgXG4gICAgfVxuICAgIFxuICAgXG59XG4iXX0=