"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getData = function () {
        return this.data;
    };
    UserService.prototype.loginnew = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            console.log(user.email, user.password);
            var body = {
                email: user.email,
                password: user.password,
                role: 'engineer',
                rememberMe: true
            };
            console.log(body);
            _this.http
                .post('https://development-api.herokuapp.com/loginst', body, {
                responseType: 'text'
            })
                .subscribe(function (response) {
                _this.data = response;
                resolve();
            }, function (error) {
                reject();
            });
        });
    };
    UserService.prototype.handleErrors = function (error) {
        console.error(error.message);
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRzNDLDZDQUE2RTtBQU03RTtJQUNJLHFCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUssQ0FBQztJQUcxQyw2QkFBTyxHQUFQO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUE7SUFDcEIsQ0FBQztJQUdELDhCQUFRLEdBQVIsVUFBUyxJQUFVO1FBQW5CLGlCQXNCQztRQXJCRyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFBO1lBQ3RDLElBQU0sSUFBSSxHQUFHO2dCQUNULEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2dCQUN2QixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsVUFBVSxFQUFFLElBQUk7YUFDbkIsQ0FBQztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEIsS0FBSSxDQUFDLElBQUk7aUJBQ0osSUFBSSxDQUFDLCtDQUErQyxFQUFFLElBQUksRUFBRTtnQkFDekQsWUFBWSxFQUFFLE1BQU07YUFDdkIsQ0FBQztpQkFDRCxTQUFTLENBQUMsVUFBQyxRQUFRO2dCQUNoQixLQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztnQkFDckIsT0FBTyxFQUFFLENBQUE7WUFDYixDQUFDLEVBQUUsVUFBQyxLQUFLO2dCQUNMLE1BQU0sRUFBRSxDQUFDO1lBQ2IsQ0FBQyxDQUNBLENBQUE7UUFDRCxDQUFDLENBQUMsQ0FBQTtJQUNkLENBQUM7SUFJRCxrQ0FBWSxHQUFaLFVBQWEsS0FBSztRQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFyQ1EsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQUVpQixpQkFBVTtPQUQzQixXQUFXLENBc0N2QjtJQUFELGtCQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7QUF0Q1ksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3VzZXIubW9kZWxcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcblxuXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsKSB7IH1cbiAgICBwdWJsaWMgZGF0YVxuXG4gICAgZ2V0RGF0YSgpe1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhXG4gICAgfVxuXG4gICAgXG4gICAgbG9naW5uZXcodXNlcjogVXNlcikge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2codXNlci5lbWFpbCwgdXNlci5wYXNzd29yZClcbiAgICAgICAgICAgIGNvbnN0IGJvZHkgPSB7XG4gICAgICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgcm9sZTogJ2VuZ2luZWVyJyxcbiAgICAgICAgICAgICAgICByZW1lbWJlck1lOiB0cnVlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc29sZS5sb2coYm9keSk7XG4gICAgICAgICAgICB0aGlzLmh0dHBcbiAgICAgICAgICAgICAgICAucG9zdCgnaHR0cHM6Ly9kZXZlbG9wbWVudC1hcGkuaGVyb2t1YXBwLmNvbS9sb2dpbnN0JywgYm9keSwge1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU6ICd0ZXh0J1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICBcblxuICAgIGhhbmRsZUVycm9ycyhlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbn1cbiJdfQ==