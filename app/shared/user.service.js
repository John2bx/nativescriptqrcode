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
            _this.user = user;
            _this.body = {
                email: user.email,
                password: user.password,
                role: 'engineer',
                rememberMe: true
            };
            console.log(_this.body);
            _this.http
                .post('https://development-api.herokuapp.com/loginst', _this.body, {
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
    UserService.prototype.resetPassword = function (email) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http
                .get("https://development-api.herokuapp.com/account/password/update/byemail/" + email, { responseType: "text" })
                .subscribe(function (response) {
                console.log(response);
                _this.data = response;
                resolve();
            }, function (error) {
                console.log(error);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBRzNDLDZDQUE2RTtBQU03RTtJQUNJLHFCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO0lBQUssQ0FBQztJQUkxQyw2QkFBTyxHQUFQO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUE7SUFDcEIsQ0FBQztJQUdELDhCQUFRLEdBQVIsVUFBUyxJQUFVO1FBQW5CLGlCQXNCQztRQXJCRyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtZQUNoQixLQUFJLENBQUMsSUFBSSxHQUFHO2dCQUNSLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2dCQUN2QixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsVUFBVSxFQUFFLElBQUk7YUFDbkIsQ0FBQztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxJQUFJO2lCQUNKLElBQUksQ0FBQywrQ0FBK0MsRUFBRSxLQUFJLENBQUMsSUFBSSxFQUFFO2dCQUM5RCxZQUFZLEVBQUUsTUFBTTthQUN2QixDQUFDO2lCQUNELFNBQVMsQ0FBQyxVQUFDLFFBQVE7Z0JBQ2hCLEtBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO2dCQUNyQixPQUFPLEVBQUUsQ0FBQTtZQUNiLENBQUMsRUFBRSxVQUFDLEtBQUs7Z0JBQ0wsTUFBTSxFQUFFLENBQUM7WUFDYixDQUFDLENBQ0EsQ0FBQTtRQUNELENBQUMsQ0FBQyxDQUFBO0lBQ2QsQ0FBQztJQUVELG1DQUFhLEdBQWIsVUFBYyxLQUFLO1FBQW5CLGlCQWNDO1FBYkcsTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDbkMsS0FBSSxDQUFDLElBQUk7aUJBQ0EsR0FBRyxDQUFDLDJFQUF5RSxLQUFPLEVBQUUsRUFBQyxZQUFZLEVBQUUsTUFBTSxFQUFDLENBQUM7aUJBQzdHLFNBQVMsQ0FBQyxVQUFDLFFBQVE7Z0JBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7Z0JBQ3JCLEtBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO2dCQUNyQixPQUFPLEVBQUUsQ0FBQTtZQUNiLENBQUMsRUFBRSxVQUFDLEtBQUs7Z0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDbEIsTUFBTSxFQUFFLENBQUM7WUFDYixDQUFDLENBQ0EsQ0FBQTtRQUNELENBQUMsQ0FBQyxDQUFBO0lBQ2QsQ0FBQztJQUdELGtDQUFZLEdBQVosVUFBYSxLQUFLO1FBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQXJEUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBRWlCLGlCQUFVO09BRDNCLFdBQVcsQ0FzRHZCO0lBQUQsa0JBQUM7Q0FBQSxBQXRERCxJQXNEQztBQXREWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vdXNlci5tb2RlbFwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuXG5cblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwpIHsgfVxuICAgIHB1YmxpYyBkYXRhXG4gICAgcHVibGljIHVzZXJcbiAgICBwdWJsaWMgYm9keVxuICAgIGdldERhdGEoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVxuICAgIH1cblxuICAgIFxuICAgIGxvZ2lubmV3KHVzZXI6IFVzZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXNlciA9IHVzZXJcbiAgICAgICAgICAgIHRoaXMuYm9keSA9IHtcbiAgICAgICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZCxcbiAgICAgICAgICAgICAgICByb2xlOiAnZW5naW5lZXInLFxuICAgICAgICAgICAgICAgIHJlbWVtYmVyTWU6IHRydWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmJvZHkpO1xuICAgICAgICAgICAgdGhpcy5odHRwXG4gICAgICAgICAgICAgICAgLnBvc3QoJ2h0dHBzOi8vZGV2ZWxvcG1lbnQtYXBpLmhlcm9rdWFwcC5jb20vbG9naW5zdCcsIHRoaXMuYm9keSwge1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU6ICd0ZXh0J1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVzZXRQYXNzd29yZChlbWFpbCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB0aGlzLmh0dHBcbiAgICAgICAgICAgICAgICAuZ2V0KGBodHRwczovL2RldmVsb3BtZW50LWFwaS5oZXJva3VhcHAuY29tL2FjY291bnQvcGFzc3dvcmQvdXBkYXRlL2J5ZW1haWwvJHtlbWFpbH1gLCB7cmVzcG9uc2VUeXBlOiBcInRleHRcIn0pICAgIFxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgfVxuICAgIFxuXG4gICAgaGFuZGxlRXJyb3JzKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxufVxuIl19