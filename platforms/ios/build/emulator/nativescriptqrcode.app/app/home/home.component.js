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
                _this.generate();
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
                _this.generate();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCw4REFBMEQ7QUFDMUQsaURBQWdEO0FBQ2hELDZCQUFvRDtBQUVwRCwwQ0FBeUM7QUFDekMsNkNBQTZFO0FBYTdFO0lBdUJJLHVCQUFvQixXQUF3QixFQUFTLElBQVUsRUFBVSxNQUFjLEVBQVUsSUFBZ0I7UUFBakgsaUJBTUM7UUFObUIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLFNBQUksR0FBSixJQUFJLENBQVk7UUF0QmpILFlBQU8sR0FBRyxRQUFRLENBQUM7UUFDWixXQUFNLEdBQUcsWUFBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUd0QyxXQUFXO1FBQ0osY0FBUyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUEsR0FBRztZQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2hCLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLEVBQUUsR0FBQyxHQUFHLENBQUM7WUFDL0IsRUFBRSxDQUFDLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0IsS0FBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBR3BCLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQTtRQUVRLGFBQVEsR0FBRTtZQUNiLE9BQU8sRUFBRSxFQUFFO1lBQ1gsS0FBSyxFQUFFLElBQUk7WUFDWCxRQUFRLEVBQUUsZ0VBQWdFLEdBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJO1lBQ2pHLFVBQVUsRUFBRSw4RUFBMkUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLFNBQUs7U0FDcEgsQ0FBQztRQUdHLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBSTdDLENBQUM7SUFDTSxnQ0FBUSxHQUFmO1FBQUEsaUJBMEJLO1FBekJELElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUE7UUFDNUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLEdBQUc7WUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNoQixLQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxFQUFFLEdBQUMsR0FBRyxDQUFDO1lBQy9CLEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRTdCLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQTtZQUduQixDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUE7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQzthQUMzQyxJQUFJLENBQUM7WUFDRCxLQUFJLENBQUMsUUFBUSxHQUFFO2dCQUNaLE9BQU8sRUFBRSxFQUFFO2dCQUNYLEtBQUssRUFBRSxJQUFJO2dCQUNYLFFBQVEsRUFBRSxnRUFBZ0UsR0FBRSxLQUFJLENBQUMsV0FBVyxDQUFDLElBQUk7Z0JBQ2pHLFVBQVUsRUFBRSw4RUFBMkUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLFNBQUs7YUFDcEgsQ0FBQztZQUVGLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUE7UUFDNUIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDO1FBRVAsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBT0UsOEJBQU0sR0FBYjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBakVRLGFBQWE7UUFOekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1lBQ3BDLFNBQVMsRUFBRSxDQUFDLHNCQUFzQixDQUFDO1NBQ3RDLENBQUM7eUNBd0JtQywwQkFBVyxFQUFlLFdBQUksRUFBa0IsZUFBTSxFQUFnQixpQkFBVTtPQXZCeEcsYUFBYSxDQW9FekI7SUFBRCxvQkFBQztDQUFBLEFBcEVELElBb0VDO0FBcEVZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7VXNlclNlcnZpY2V9IGZyb20gJy4uLy4uL2FwcC9zaGFyZWQvdXNlci5zZXJ2aWNlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQgeyB0aW1lciwgT2JzZXJ2YWJsZSwgaW50ZXJ2YWwgIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycywgSHR0cFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2NvbW1vbi9odHRwXCI7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ltYWdlXCI7XG5pbXBvcnQgeyBMYWJlbCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xhYmVsXCI7XG5pbXBvcnQgeyBTdGFja0xheW91dCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2xheW91dHMvc3RhY2stbGF5b3V0XCI7XG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSBmcm9tICcuLi9sb2dpbi9sb2dpbi5jb21wb25lbnQnXG5cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiYXBwLWhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogWycuL2hvbWUuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge1xuICAgIG1lc3NhZ2UgPSBgIGhlbGxvYDtcbiAgICBwdWJsaWMgc291cmNlID0gdGltZXIoMTAwMCwgMTAwMCk7XG5cblxuLy9vdXRwdXQ6IDBcbnB1YmxpYyBzdWJzY3JpYmUgPSB0aGlzLnNvdXJjZS5zdWJzY3JpYmUodmFsID0+e1xuICAgIGNvbnNvbGUubG9nKHZhbClcbiAgICB0aGlzLmJpbmRpbmdzLnNlY29uZHMgPSA2MC12YWw7XG4gICAgaWYgKHRoaXMuYmluZGluZ3Muc2Vjb25kcyA8PSAwKSB7XG4gICAgICAgIHRoaXMuZ2VuZXJhdGUoKTtcblxuXG4gICAgfVxufSlcbiAgICBcbiAgIHB1YmxpYyBiaW5kaW5ncz0ge1xuICAgICAgIHNlY29uZHM6IDYwLFxuICAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgIGltYWdlVXJpOiBgaHR0cHM6Ly9hcGkucXJzZXJ2ZXIuY29tL3YxL2NyZWF0ZS1xci1jb2RlLz9zaXplPTE1MHgxNTAmZGF0YT1gKyB0aGlzLnVzZXJTZXJ2aWNlLmRhdGEsXG4gICAgICAgaHRtbFN0cmluZzogYDxpbWcgc3JjPVwiaHR0cHM6Ly9hcGkucXJzZXJ2ZXIuY29tL3YxL2NyZWF0ZS1xci1jb2RlLz9zaXplPTE1MHgxNTAmZGF0YT0ke3RoaXMudXNlclNlcnZpY2UuZGF0YX1cIi8+YCBcbiAgIH07XG4gICBcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwpIHtcbiAgICAgICAgdGhpcy5wYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgICAgIHRoaXMucGFnZS5iaW5kaW5nQ29udGV4dCA9IHRoaXMuYmluZGluZ3M7XG4gICAgICAgIFxuICAgICAgXG4gICAgICAgXG4gICAgfVxuICAgIHB1YmxpYyBnZW5lcmF0ZSgpIHtcbiAgICAgICAgdGhpcy5zdWJzY3JpYmUudW5zdWJzY3JpYmUoKVxuICAgICAgICB0aGlzLnN1YnNjcmliZSA9IHRoaXMuc291cmNlLnN1YnNjcmliZSh2YWwgPT57XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2YWwpXG4gICAgICAgICAgICB0aGlzLmJpbmRpbmdzLnNlY29uZHMgPSA2MC12YWw7XG4gICAgICAgICAgICBpZiAodGhpcy5iaW5kaW5ncy5zZWNvbmRzIDw9IDApIHtcblxuICAgICAgICAgICAgICAgIHRoaXMuZ2VuZXJhdGUoKVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLnVzZXJTZXJ2aWNlLmxvZ2lubmV3KHRoaXMudXNlclNlcnZpY2UudXNlcilcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICB0aGlzLmJpbmRpbmdzPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWNvbmRzOiA2MCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2VVcmk6IGBodHRwczovL2FwaS5xcnNlcnZlci5jb20vdjEvY3JlYXRlLXFyLWNvZGUvP3NpemU9MTUweDE1MCZkYXRhPWArIHRoaXMudXNlclNlcnZpY2UuZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0bWxTdHJpbmc6IGA8aW1nIHNyYz1cImh0dHBzOi8vYXBpLnFyc2VydmVyLmNvbS92MS9jcmVhdGUtcXItY29kZS8/c2l6ZT0xNTB4MTUwJmRhdGE9JHt0aGlzLnVzZXJTZXJ2aWNlLmRhdGF9XCIvPmAgXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5jYXRjaCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICBcbiAgICBwdWJsaWMgbG9nb2ZmKCkge1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbG9naW5cIl0pO1xuICAgIH1cbiAgIFxuICAgXG59XG4iXX0=