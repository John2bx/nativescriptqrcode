"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.specialInstances = {
            development: 'development-api',
            demo: 'api-demo1',
            staging: 'api-staging1',
            skb: 'api-skb-prod',
            skbtest: 'api-skb',
            dev: 'development-api',
        };
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
                .post("https://api-gemvision.herokuapp.com/loginst", _this.body, {
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
    UserService.prototype.resetPassword = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http
                .get("https://api-gemvision.herokuapp.com/account/password/update/byemail/" + user, { responseType: "text" })
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
    UserService.prototype.getUrlForReset = function (user) {
        var environment = '';
        var company = user.company.toLowerCase();
        var email = user.email.toLowerCase();
        console.log(company, 'companyname');
        if (this.specialInstances[company]) {
            return "https://" + this.specialInstances[company] + ".herokuapp.com/account/password/update/byemail/" + email;
        }
        else {
            return "https://api-" + company + ".herokuapp.com/account/password/update/byemail/" + email;
        }
    };
    UserService.prototype.getUrlForLogin = function (user) {
        var environment = '';
        var company = user.company.toLowerCase();
        console.log(company, 'companyname');
        if (this.specialInstances[company]) {
            return "https://" + this.specialInstances[company] + ".herokuapp.com/loginst";
        }
        else {
            return "https://api-" + company + ".herokuapp.com/loginst";
        }
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBR3pELDZDQUE2RTtBQU03RTtJQUNJLHFCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBcUU3QixxQkFBZ0IsR0FBRztZQUN0QixXQUFXLEVBQUUsaUJBQWlCO1lBQzlCLElBQUksRUFBRSxXQUFXO1lBQ2pCLE9BQU8sRUFBRSxjQUFjO1lBQ3ZCLEdBQUcsRUFBRSxjQUFjO1lBQ25CLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLEdBQUcsRUFBRSxpQkFBaUI7U0FDekIsQ0FBQTtJQTVFd0MsQ0FBQztJQUkxQyw2QkFBTyxHQUFQO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUE7SUFDcEIsQ0FBQztJQUdELDhCQUFRLEdBQVIsVUFBUyxJQUFVO1FBQW5CLGlCQXNCQztRQXJCRyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtZQUNoQixLQUFJLENBQUMsSUFBSSxHQUFHO2dCQUNSLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2dCQUN2QixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsVUFBVSxFQUFFLElBQUk7YUFDbkIsQ0FBQztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxJQUFJO2lCQUNSLElBQUksQ0FBRSw2Q0FBNkMsRUFBRSxLQUFJLENBQUMsSUFBSSxFQUFFO2dCQUN6RCxZQUFZLEVBQUUsTUFBTTthQUN2QixDQUFDO2lCQUNELFNBQVMsQ0FBQyxVQUFDLFFBQVE7Z0JBQ2hCLEtBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO2dCQUNyQixPQUFPLEVBQUUsQ0FBQTtZQUNiLENBQUMsRUFBRSxVQUFDLEtBQUs7Z0JBQ0wsTUFBTSxFQUFFLENBQUM7WUFDYixDQUFDLENBQ0EsQ0FBQTtRQUNELENBQUMsQ0FBQyxDQUFBO0lBQ2QsQ0FBQztJQUVELG1DQUFhLEdBQWIsVUFBYyxJQUFJO1FBQWxCLGlCQWVDO1FBYkksTUFBTSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQUMsT0FBTyxFQUFFLE1BQU07WUFDcEMsS0FBSSxDQUFDLElBQUk7aUJBQ0EsR0FBRyxDQUFDLHlFQUF1RSxJQUFNLEVBQUUsRUFBQyxZQUFZLEVBQUUsTUFBTSxFQUFDLENBQUM7aUJBQzFHLFNBQVMsQ0FBQyxVQUFDLFFBQVE7Z0JBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7Z0JBQ3JCLEtBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO2dCQUNyQixPQUFPLEVBQUUsQ0FBQTtZQUNiLENBQUMsRUFBRSxVQUFDLEtBQUs7Z0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtnQkFDbEIsTUFBTSxFQUFFLENBQUM7WUFDYixDQUFDLENBQ0EsQ0FBQTtRQUNELENBQUMsQ0FBQyxDQUFBO0lBQ2QsQ0FBQztJQUdELGtDQUFZLEdBQVosVUFBYSxLQUFLO1FBQ2QsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUNELG9DQUFjLEdBQWQsVUFBZSxJQUFJO1FBQ2YsSUFBTSxXQUFXLEdBQVcsRUFBRSxDQUFBO1FBQzlCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDekMsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQztRQUNwQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQUEsTUFBTSxDQUFDLGFBQVcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyx1REFBa0QsS0FBTyxDQUFBO1FBQUEsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2xKLE1BQU0sQ0FBQyxpQkFBZSxPQUFPLHVEQUFrRCxLQUFPLENBQUE7UUFBQSxDQUFDO0lBQy9GLENBQUM7SUFDRCxvQ0FBYyxHQUFkLFVBQWUsSUFBSTtRQUNmLElBQU0sV0FBVyxHQUFXLEVBQUUsQ0FBQTtRQUM5QixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ3BDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFBQSxNQUFNLENBQUMsYUFBVyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLDJCQUF3QixDQUFBO1FBQUEsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2pILE1BQU0sQ0FBQyxpQkFBZSxPQUFPLDJCQUF3QixDQUFBO1FBQUEsQ0FBQztJQUM5RCxDQUFDO0lBckVRLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FFaUIsaUJBQVU7T0FEM0IsV0FBVyxDQThFdkI7SUFBRCxrQkFBQztDQUFBLEFBOUVELElBOEVDO0FBOUVZLGtDQUFXIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVGVzdGFiaWxpdHkgIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3VzZXIubW9kZWxcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcblxuXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsKSB7IH1cbiAgICBwdWJsaWMgZGF0YVxuICAgIHB1YmxpYyB1c2VyXG4gICAgcHVibGljIGJvZHlcbiAgICBnZXREYXRhKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFcbiAgICB9XG5cbiAgICBcbiAgICBsb2dpbm5ldyh1c2VyOiBVc2VyKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVzZXIgPSB1c2VyXG4gICAgICAgICAgICB0aGlzLmJvZHkgPSB7XG4gICAgICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgcm9sZTogJ2VuZ2luZWVyJyxcbiAgICAgICAgICAgICAgICByZW1lbWJlck1lOiB0cnVlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5ib2R5KTtcbiAgICAgICAgICAgIHRoaXMuaHR0cFxuICAgICAgICAgICAgLnBvc3QoIGBodHRwczovL2FwaS1nZW12aXNpb24uaGVyb2t1YXBwLmNvbS9sb2dpbnN0YCwgdGhpcy5ib2R5LCB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogJ3RleHQnXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSlcbiAgICB9XG5cbiAgICByZXNldFBhc3N3b3JkKHVzZXIpIHtcbiAgICAgICBcbiAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHRoaXMuaHR0cFxuICAgICAgICAgICAgICAgIC5nZXQoYGh0dHBzOi8vYXBpLWdlbXZpc2lvbi5oZXJva3VhcHAuY29tL2FjY291bnQvcGFzc3dvcmQvdXBkYXRlL2J5ZW1haWwvJHt1c2VyfWAsIHtyZXNwb25zZVR5cGU6IFwidGV4dFwifSkgICAgXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKClcbiAgICAgICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSkgXG4gICAgfVxuICAgIFxuXG4gICAgaGFuZGxlRXJyb3JzKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICAgIGdldFVybEZvclJlc2V0KHVzZXIpIHtcbiAgICAgICAgY29uc3QgZW52aXJvbm1lbnQ6IHN0cmluZyA9ICcnXG4gICAgICAgIHZhciBjb21wYW55ID0gdXNlci5jb21wYW55LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHZhciBlbWFpbCA9IHVzZXIuZW1haWwudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgY29uc29sZS5sb2coY29tcGFueSwgJ2NvbXBhbnluYW1lJyk7XG4gICAgICAgIGlmICh0aGlzLnNwZWNpYWxJbnN0YW5jZXNbY29tcGFueV0pIHtyZXR1cm4gYGh0dHBzOi8vJHt0aGlzLnNwZWNpYWxJbnN0YW5jZXNbY29tcGFueV19Lmhlcm9rdWFwcC5jb20vYWNjb3VudC9wYXNzd29yZC91cGRhdGUvYnllbWFpbC8ke2VtYWlsfWB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGBodHRwczovL2FwaS0ke2NvbXBhbnl9Lmhlcm9rdWFwcC5jb20vYWNjb3VudC9wYXNzd29yZC91cGRhdGUvYnllbWFpbC8ke2VtYWlsfWB9XG4gICAgfVxuICAgIGdldFVybEZvckxvZ2luKHVzZXIpIHtcbiAgICAgICAgY29uc3QgZW52aXJvbm1lbnQ6IHN0cmluZyA9ICcnXG4gICAgICAgIHZhciBjb21wYW55ID0gdXNlci5jb21wYW55LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGNvbXBhbnksICdjb21wYW55bmFtZScpO1xuICAgICAgICBpZiAodGhpcy5zcGVjaWFsSW5zdGFuY2VzW2NvbXBhbnldKSB7cmV0dXJuIGBodHRwczovLyR7dGhpcy5zcGVjaWFsSW5zdGFuY2VzW2NvbXBhbnldfS5oZXJva3VhcHAuY29tL2xvZ2luc3RgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBgaHR0cHM6Ly9hcGktJHtjb21wYW55fS5oZXJva3VhcHAuY29tL2xvZ2luc3RgfVxuICAgIH1cbiAgICBwdWJsaWMgc3BlY2lhbEluc3RhbmNlcyA9IHtcbiAgICAgICAgZGV2ZWxvcG1lbnQ6ICdkZXZlbG9wbWVudC1hcGknLFxuICAgICAgICBkZW1vOiAnYXBpLWRlbW8xJyxcbiAgICAgICAgc3RhZ2luZzogJ2FwaS1zdGFnaW5nMScsXG4gICAgICAgIHNrYjogJ2FwaS1za2ItcHJvZCcsXG4gICAgICAgIHNrYnRlc3Q6ICdhcGktc2tiJyxcbiAgICAgICAgZGV2OiAnZGV2ZWxvcG1lbnQtYXBpJyxcbiAgICB9XG59XG4iXX0=