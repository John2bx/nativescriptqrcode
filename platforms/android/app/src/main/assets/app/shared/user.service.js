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
