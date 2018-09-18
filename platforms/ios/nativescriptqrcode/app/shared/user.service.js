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
                .post(_this.getUrlForLogin(user), _this.body, {
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
                .get(_this.getUrlForReset(user), { responseType: "text" })
                .subscribe(function (response) {
                console.log(response);
                _this.data = response;
                resolve();
            }, function (error) {
                console.log(error);
                reject();
            });
        });
        /*      return new Promise((resolve, reject) => {
             this.http
                     .get(`https://development-api.herokuapp.com/account/password/update/byemail/${email}`, {responseType: "text"})
                     .subscribe((response) => {
                         console.log(response)
                         this.data = response;
                         resolve()
                     }, (error) => {
                         console.log(error)
                         reject();
                     }
                     )
                     }) */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidXNlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlEO0FBR3pELDZDQUE2RTtBQU03RTtJQUNJLHFCQUFvQixJQUFnQjtRQUFoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBaUY3QixxQkFBZ0IsR0FBRztZQUN0QixXQUFXLEVBQUUsaUJBQWlCO1lBQzlCLElBQUksRUFBRSxXQUFXO1lBQ2pCLE9BQU8sRUFBRSxjQUFjO1lBQ3ZCLEdBQUcsRUFBRSxjQUFjO1lBQ25CLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLEdBQUcsRUFBRSxpQkFBaUI7U0FDekIsQ0FBQTtJQXhGd0MsQ0FBQztJQUkxQyw2QkFBTyxHQUFQO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUE7SUFDcEIsQ0FBQztJQUdELDhCQUFRLEdBQVIsVUFBUyxJQUFVO1FBQW5CLGlCQXNCQztRQXJCRyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtZQUNoQixLQUFJLENBQUMsSUFBSSxHQUFHO2dCQUNSLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztnQkFDakIsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRO2dCQUN2QixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsVUFBVSxFQUFFLElBQUk7YUFDbkIsQ0FBQztZQUNGLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxJQUFJO2lCQUNSLElBQUksQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ3BDLFlBQVksRUFBRSxNQUFNO2FBQ3ZCLENBQUM7aUJBQ0QsU0FBUyxDQUFDLFVBQUMsUUFBUTtnQkFDaEIsS0FBSSxDQUFDLElBQUksR0FBRyxRQUFRLENBQUM7Z0JBQ3JCLE9BQU8sRUFBRSxDQUFBO1lBQ2IsQ0FBQyxFQUFFLFVBQUMsS0FBSztnQkFDTCxNQUFNLEVBQUUsQ0FBQztZQUNiLENBQUMsQ0FDQSxDQUFBO1FBQ0QsQ0FBQyxDQUFDLENBQUE7SUFDZCxDQUFDO0lBRUQsbUNBQWEsR0FBYixVQUFjLElBQUk7UUFBbEIsaUJBMkJDO1FBMUJHLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9CLEtBQUksQ0FBQyxJQUFJO2lCQUNBLEdBQUcsQ0FBQyxLQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsWUFBWSxFQUFFLE1BQU0sRUFBQyxDQUFDO2lCQUN0RCxTQUFTLENBQUMsVUFBQyxRQUFRO2dCQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO2dCQUNyQixLQUFJLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQztnQkFDckIsT0FBTyxFQUFFLENBQUE7WUFDYixDQUFDLEVBQUUsVUFBQyxLQUFLO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUE7Z0JBQ2xCLE1BQU0sRUFBRSxDQUFDO1lBQ2IsQ0FBQyxDQUNBLENBQUE7UUFDRCxDQUFDLENBQUMsQ0FBQTtRQUNuQjs7Ozs7Ozs7Ozs7OzBCQVlrQjtJQUNqQixDQUFDO0lBR0Qsa0NBQVksR0FBWixVQUFhLEtBQUs7UUFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ0Qsb0NBQWMsR0FBZCxVQUFlLElBQUk7UUFDZixJQUFNLFdBQVcsR0FBVyxFQUFFLENBQUE7UUFDOUIsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN6QyxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ3BDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFBQSxNQUFNLENBQUMsYUFBVyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLHVEQUFrRCxLQUFPLENBQUE7UUFBQSxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDbEosTUFBTSxDQUFDLGlCQUFlLE9BQU8sdURBQWtELEtBQU8sQ0FBQTtRQUFBLENBQUM7SUFDL0YsQ0FBQztJQUNELG9DQUFjLEdBQWQsVUFBZSxJQUFJO1FBQ2YsSUFBTSxXQUFXLEdBQVcsRUFBRSxDQUFBO1FBQzlCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDcEMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUFBLE1BQU0sQ0FBQyxhQUFXLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsMkJBQXdCLENBQUE7UUFBQSxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDakgsTUFBTSxDQUFDLGlCQUFlLE9BQU8sMkJBQXdCLENBQUE7UUFBQSxDQUFDO0lBQzlELENBQUM7SUFqRlEsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQUVpQixpQkFBVTtPQUQzQixXQUFXLENBMEZ2QjtJQUFELGtCQUFDO0NBQUEsQUExRkQsSUEwRkM7QUExRlksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBUZXN0YWJpbGl0eSAgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBVc2VyIH0gZnJvbSBcIi4vdXNlci5tb2RlbFwiO1xuaW1wb3J0IHsgSHR0cENsaWVudCwgSHR0cEhlYWRlcnMsIEh0dHBSZXNwb25zZSB9IGZyb20gXCJAYW5ndWxhci9jb21tb24vaHR0cFwiO1xuXG5cblxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwpIHsgfVxuICAgIHB1YmxpYyBkYXRhXG4gICAgcHVibGljIHVzZXJcbiAgICBwdWJsaWMgYm9keVxuICAgIGdldERhdGEoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YVxuICAgIH1cblxuICAgIFxuICAgIGxvZ2lubmV3KHVzZXI6IFVzZXIpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXNlciA9IHVzZXJcbiAgICAgICAgICAgIHRoaXMuYm9keSA9IHtcbiAgICAgICAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogdXNlci5wYXNzd29yZCxcbiAgICAgICAgICAgICAgICByb2xlOiAnZW5naW5lZXInLFxuICAgICAgICAgICAgICAgIHJlbWVtYmVyTWU6IHRydWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmJvZHkpO1xuICAgICAgICAgICAgdGhpcy5odHRwXG4gICAgICAgICAgICAucG9zdCh0aGlzLmdldFVybEZvckxvZ2luKHVzZXIpLCB0aGlzLmJvZHksIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCdcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YSA9IHJlc3BvbnNlO1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKClcbiAgICAgICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlc2V0UGFzc3dvcmQodXNlcikge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5odHRwXG4gICAgICAgICAgICAgICAgICAgIC5nZXQodGhpcy5nZXRVcmxGb3JSZXNldCh1c2VyKSwge3Jlc3BvbnNlVHlwZTogXCJ0ZXh0XCJ9KSAgICBcbiAgICAgICAgICAgICAgICAgICAgLnN1YnNjcmliZSgocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKClcbiAgICAgICAgICAgICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgIC8qICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgdGhpcy5odHRwXG4gICAgICAgICAgICAgICAgLmdldChgaHR0cHM6Ly9kZXZlbG9wbWVudC1hcGkuaGVyb2t1YXBwLmNvbS9hY2NvdW50L3Bhc3N3b3JkL3VwZGF0ZS9ieWVtYWlsLyR7ZW1haWx9YCwge3Jlc3BvbnNlVHlwZTogXCJ0ZXh0XCJ9KSAgICBcbiAgICAgICAgICAgICAgICAuc3Vic2NyaWJlKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSlcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhID0gcmVzcG9uc2U7XG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKVxuICAgICAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KSAqL1xuICAgIH1cbiAgICBcblxuICAgIGhhbmRsZUVycm9ycyhlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgICBnZXRVcmxGb3JSZXNldCh1c2VyKSB7XG4gICAgICAgIGNvbnN0IGVudmlyb25tZW50OiBzdHJpbmcgPSAnJ1xuICAgICAgICB2YXIgY29tcGFueSA9IHVzZXIuY29tcGFueS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB2YXIgZW1haWwgPSB1c2VyLmVtYWlsLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGNvbXBhbnksICdjb21wYW55bmFtZScpO1xuICAgICAgICBpZiAodGhpcy5zcGVjaWFsSW5zdGFuY2VzW2NvbXBhbnldKSB7cmV0dXJuIGBodHRwczovLyR7dGhpcy5zcGVjaWFsSW5zdGFuY2VzW2NvbXBhbnldfS5oZXJva3VhcHAuY29tL2FjY291bnQvcGFzc3dvcmQvdXBkYXRlL2J5ZW1haWwvJHtlbWFpbH1gfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBgaHR0cHM6Ly9hcGktJHtjb21wYW55fS5oZXJva3VhcHAuY29tL2FjY291bnQvcGFzc3dvcmQvdXBkYXRlL2J5ZW1haWwvJHtlbWFpbH1gfVxuICAgIH1cbiAgICBnZXRVcmxGb3JMb2dpbih1c2VyKSB7XG4gICAgICAgIGNvbnN0IGVudmlyb25tZW50OiBzdHJpbmcgPSAnJ1xuICAgICAgICB2YXIgY29tcGFueSA9IHVzZXIuY29tcGFueS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zb2xlLmxvZyhjb21wYW55LCAnY29tcGFueW5hbWUnKTtcbiAgICAgICAgaWYgKHRoaXMuc3BlY2lhbEluc3RhbmNlc1tjb21wYW55XSkge3JldHVybiBgaHR0cHM6Ly8ke3RoaXMuc3BlY2lhbEluc3RhbmNlc1tjb21wYW55XX0uaGVyb2t1YXBwLmNvbS9sb2dpbnN0YH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYGh0dHBzOi8vYXBpLSR7Y29tcGFueX0uaGVyb2t1YXBwLmNvbS9sb2dpbnN0YH1cbiAgICB9XG4gICAgcHVibGljIHNwZWNpYWxJbnN0YW5jZXMgPSB7XG4gICAgICAgIGRldmVsb3BtZW50OiAnZGV2ZWxvcG1lbnQtYXBpJyxcbiAgICAgICAgZGVtbzogJ2FwaS1kZW1vMScsXG4gICAgICAgIHN0YWdpbmc6ICdhcGktc3RhZ2luZzEnLFxuICAgICAgICBza2I6ICdhcGktc2tiLXByb2QnLFxuICAgICAgICBza2J0ZXN0OiAnYXBpLXNrYicsXG4gICAgICAgIGRldjogJ2RldmVsb3BtZW50LWFwaScsXG4gICAgfVxufVxuIl19