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
        console.log(this.getCompanyName(user));
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
                .post(_this.getCompanyName(user), _this.body, {
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
    UserService.prototype.getCompanyName = function (user) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXdEO0FBR3hELDZDQUE2RTtBQU03RTtJQUNJLHFCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBNkQ3QixxQkFBZ0IsR0FBRztZQUN0QixXQUFXLEVBQUUsaUJBQWlCO1lBQzlCLElBQUksRUFBRSxXQUFXO1lBQ2pCLE9BQU8sRUFBRSxjQUFjO1lBQ3ZCLEdBQUcsRUFBRSxjQUFjO1lBQ25CLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLEdBQUcsRUFBRSxpQkFBaUI7U0FDekIsQ0FBQTtJQXBFd0MsQ0FBQztJQUkxQyw2QkFBTyxHQUFQO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUE7SUFDcEIsQ0FBQztJQUdELDhCQUFRLEdBQVIsVUFBUyxJQUFVO1FBQW5CLGlCQXVCQztRQXRCRyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQTtRQUN0QyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtZQUNoQixLQUFJLENBQUMsSUFBSSxHQUFHO2dCQUNSLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2dCQUN2QixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsVUFBVSxFQUFFLElBQUk7YUFDbkIsQ0FBQztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxJQUFJO2lCQUNKLElBQUksQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ3hDLFlBQVksRUFBRSxNQUFNO2FBQ3ZCLENBQUM7aUJBQ0QsU0FBUyxDQUFDLFVBQUMsUUFBUTtnQkFDaEIsS0FBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7Z0JBQ3JCLE9BQU8sRUFBRSxDQUFBO1lBQ2IsQ0FBQyxFQUFFLFVBQUMsS0FBSztnQkFDTCxNQUFNLEVBQUUsQ0FBQztZQUNiLENBQUMsQ0FDQSxDQUFBO1FBQ0QsQ0FBQyxDQUFDLENBQUE7SUFDZCxDQUFDO0lBRUQsbUNBQWEsR0FBYixVQUFjLEtBQUs7UUFBbkIsaUJBY0M7UUFiRyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUNuQyxLQUFJLENBQUMsSUFBSTtpQkFDQSxHQUFHLENBQUMsMkVBQXlFLEtBQU8sRUFBRSxFQUFDLFlBQVksRUFBRSxNQUFNLEVBQUMsQ0FBQztpQkFDN0csU0FBUyxDQUFDLFVBQUMsUUFBUTtnQkFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtnQkFDckIsS0FBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7Z0JBQ3JCLE9BQU8sRUFBRSxDQUFBO1lBQ2IsQ0FBQyxFQUFFLFVBQUMsS0FBSztnQkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO2dCQUNsQixNQUFNLEVBQUUsQ0FBQztZQUNiLENBQUMsQ0FDQSxDQUFBO1FBQ0QsQ0FBQyxDQUFDLENBQUE7SUFDZCxDQUFDO0lBR0Qsa0NBQVksR0FBWixVQUFhLEtBQUs7UUFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0Qsb0NBQWMsR0FBZCxVQUFlLElBQUk7UUFDZixJQUFNLFdBQVcsR0FBVyxFQUFFLENBQUE7UUFDOUIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUMsQ0FBQztRQUNwQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQUEsTUFBTSxDQUFDLGFBQVcsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQywyQkFBd0IsQ0FBQTtRQUFBLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNqSCxNQUFNLENBQUMsaUJBQWUsT0FBTywyQkFBd0IsQ0FBQTtRQUFBLENBQUM7SUFDOUQsQ0FBQztJQTdEUSxXQUFXO1FBRHZCLGlCQUFVLEVBQUU7eUNBRWlCLGlCQUFVO09BRDNCLFdBQVcsQ0FzRXZCO0lBQUQsa0JBQUM7Q0FBQSxBQXRFRCxJQXNFQztBQXRFWSxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFRlc3RhYmlsaXR5IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3VzZXIubW9kZWxcIjtcbmltcG9ydCB7IEh0dHBDbGllbnQsIEh0dHBIZWFkZXJzLCBIdHRwUmVzcG9uc2UgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcblxuXG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJTZXJ2aWNlIHtcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsKSB7IH1cbiAgICBwdWJsaWMgZGF0YVxuICAgIHB1YmxpYyB1c2VyXG4gICAgcHVibGljIGJvZHlcbiAgICBnZXREYXRhKCl7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFcbiAgICB9XG5cbiAgICBcbiAgICBsb2dpbm5ldyh1c2VyOiBVc2VyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuZ2V0Q29tcGFueU5hbWUodXNlcikpXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVzZXIgPSB1c2VyXG4gICAgICAgICAgICB0aGlzLmJvZHkgPSB7XG4gICAgICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHVzZXIucGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgcm9sZTogJ2VuZ2luZWVyJyxcbiAgICAgICAgICAgICAgICByZW1lbWJlck1lOiB0cnVlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5ib2R5KTtcbiAgICAgICAgICAgIHRoaXMuaHR0cFxuICAgICAgICAgICAgICAgIC5wb3N0KHRoaXMuZ2V0Q29tcGFueU5hbWUodXNlciksIHRoaXMuYm9keSwge1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU6ICd0ZXh0J1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgfVxuXG4gICAgcmVzZXRQYXNzd29yZChlbWFpbCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICB0aGlzLmh0dHBcbiAgICAgICAgICAgICAgICAuZ2V0KGBodHRwczovL2RldmVsb3BtZW50LWFwaS5oZXJva3VhcHAuY29tL2FjY291bnQvcGFzc3dvcmQvdXBkYXRlL2J5ZW1haWwvJHtlbWFpbH1gLCB7cmVzcG9uc2VUeXBlOiBcInRleHRcIn0pICAgIFxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGEgPSByZXNwb25zZTtcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpXG4gICAgICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKVxuICAgICAgICAgICAgICAgICAgICByZWplY3QoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgfVxuICAgIFxuXG4gICAgaGFuZGxlRXJyb3JzKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICAgIGdldENvbXBhbnlOYW1lKHVzZXIpIHtcbiAgICAgICAgY29uc3QgZW52aXJvbm1lbnQ6IHN0cmluZyA9ICcnXG4gICAgICAgIHZhciBjb21wYW55ID0gdXNlci5jb21wYW55LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGNvbXBhbnksICdjb21wYW55bmFtZScpO1xuICAgICAgICBpZiAodGhpcy5zcGVjaWFsSW5zdGFuY2VzW2NvbXBhbnldKSB7cmV0dXJuIGBodHRwczovLyR7dGhpcy5zcGVjaWFsSW5zdGFuY2VzW2NvbXBhbnldfS5oZXJva3VhcHAuY29tL2xvZ2luc3RgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBgaHR0cHM6Ly9hcGktJHtjb21wYW55fS5oZXJva3VhcHAuY29tL2xvZ2luc3RgfVxuICAgIH1cbiAgICBwdWJsaWMgc3BlY2lhbEluc3RhbmNlcyA9IHtcbiAgICAgICAgZGV2ZWxvcG1lbnQ6ICdkZXZlbG9wbWVudC1hcGknLFxuICAgICAgICBkZW1vOiAnYXBpLWRlbW8xJyxcbiAgICAgICAgc3RhZ2luZzogJ2FwaS1zdGFnaW5nMScsXG4gICAgICAgIHNrYjogJ2FwaS1za2ItcHJvZCcsXG4gICAgICAgIHNrYnRlc3Q6ICdhcGktc2tiJyxcbiAgICAgICAgZGV2OiAnZGV2ZWxvcG1lbnQtYXBpJyxcbiAgICB9XG59XG5cbiJdfQ==