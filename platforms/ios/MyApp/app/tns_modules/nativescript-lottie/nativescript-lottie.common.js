"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = require("tns-core-modules/ui/core/view");
var properties_1 = require("tns-core-modules/ui/core/properties");
var LottieViewBase = (function (_super) {
    __extends(LottieViewBase, _super);
    function LottieViewBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return LottieViewBase;
}(view_1.View));
exports.LottieViewBase = LottieViewBase;
exports.srcProperty = new properties_1.Property({
    name: 'src'
});
exports.srcProperty.register(LottieViewBase);
exports.loopProperty = new properties_1.Property({
    name: 'loop',
    defaultValue: false,
    valueConverter: view_1.booleanConverter
});
exports.loopProperty.register(LottieViewBase);
exports.autoPlayProperty = new properties_1.Property({
    name: 'autoPlay',
    defaultValue: false,
    valueConverter: view_1.booleanConverter
});
exports.autoPlayProperty.register(LottieViewBase);
exports.cacheStrategyProperty = new properties_1.Property({
    name: 'cacheStrategy'
});
exports.cacheStrategyProperty.register(LottieViewBase);
exports.themeProperty = new properties_1.Property({
    name: 'theme'
});
exports.themeProperty.register(LottieViewBase);
//# sourceMappingURL=nativescript-lottie.common.js.map