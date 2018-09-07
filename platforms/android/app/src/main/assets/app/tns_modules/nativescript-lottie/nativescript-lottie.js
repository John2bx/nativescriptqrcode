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
var nativescript_lottie_common_1 = require("./nativescript-lottie.common");
var LottieProperty = com.airbnb.lottie.LottieProperty;
var LottieHelper = com.nativescript_lottie.LottieHelper;
var LottieView = (function (_super) {
    __extends(LottieView, _super);
    function LottieView() {
        return _super.call(this) || this;
    }
    Object.defineProperty(LottieView.prototype, "android", {
        get: function () {
            return this.nativeView;
        },
        enumerable: true,
        configurable: true
    });
    LottieView.prototype.createNativeView = function () {
        var nativeView = new com.airbnb.lottie.LottieAnimationView(this._context);
        try {
            if (this.src) {
                if (this.cacheStrategy) {
                    nativeView.setAnimation(this.src, this.cacheStrategy);
                }
                else {
                    nativeView.setAnimation(this.src);
                }
            }
            if (this.loop) {
                nativeView.loop(true);
            }
            if (this.autoPlay) {
                nativeView.playAnimation();
            }
        }
        catch (error) {
            throw error;
        }
        return nativeView;
    };
    LottieView.prototype[nativescript_lottie_common_1.srcProperty.setNative] = function (src) {
        this.setSrc(src);
    };
    LottieView.prototype.setSrc = function (src) {
        if (this.cacheStrategy) {
            this.nativeView.setAnimation(src, this.cacheStrategy);
        }
        else {
            this.nativeView.setAnimation(src);
        }
        if (this.autoPlay) {
            this.playAnimation();
        }
    };
    LottieView.prototype[nativescript_lottie_common_1.loopProperty.setNative] = function (loop) {
        if (loop) {
            this.nativeView.loop(true);
        }
        else {
            this.nativeView.loop(false);
        }
    };
    LottieView.prototype[nativescript_lottie_common_1.cacheStrategyProperty.setNative] = function (cacheStrategy) {
        this.setSrc(this.src);
    };
    LottieView.prototype[nativescript_lottie_common_1.autoPlayProperty.setNative] = function (autoPlay) {
        if (autoPlay) {
            if (!this.isAnimating()) {
                this.playAnimation();
            }
        }
        else {
            if (this.isAnimating()) {
                this.cancelAnimation();
            }
        }
    };
    LottieView.prototype[nativescript_lottie_common_1.themeProperty.setNative] = function (value) {
        this.setTheme(value);
    };
    LottieView.prototype.setTheme = function (value) {
        var _this = this;
        if (!this.nativeView) {
            return;
        }
        if (value && value.length) {
            value.forEach(function (dynamicValue) {
                var callBack = LottieHelper.getIntCallback(new view_1.Color(dynamicValue.value).android);
                var keyPath = LottieHelper.keyPath(dynamicValue.keyPath);
                _this.nativeView.addValueCallback(keyPath, LottieProperty.COLOR, callBack);
            });
        }
    };
    LottieView.prototype.playAnimation = function () {
        if (this.nativeView) {
            this.nativeView.playAnimation();
        }
    };
    LottieView.prototype.isAnimating = function () {
        var isAnimating = false;
        if (this.nativeView.isAnimating()) {
            isAnimating = true;
        }
        return isAnimating;
    };
    Object.defineProperty(LottieView.prototype, "progress", {
        get: function () {
            var progress = null;
            if (this.nativeView) {
                progress = this.nativeView.getProgress();
            }
            return progress;
        },
        set: function (value) {
            if (this.nativeView && value) {
                this.nativeView.setProgress(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LottieView.prototype, "speed", {
        get: function () {
            var speed = null;
            if (this.nativeView) {
                this.nativeView.getSpeed();
            }
            return speed;
        },
        set: function (newSpeed) {
            if (this.nativeView) {
                this.nativeView.setSpeed(newSpeed);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LottieView.prototype, "duration", {
        get: function () {
            var duration = null;
            if (this.nativeView) {
                duration = this.nativeView.getDuration();
            }
            return duration;
        },
        enumerable: true,
        configurable: true
    });
    LottieView.prototype.cancelAnimation = function () {
        if (this.nativeView) {
            this.nativeView.cancelAnimation();
        }
    };
    return LottieView;
}(nativescript_lottie_common_1.LottieViewBase));
exports.LottieView = LottieView;
var CacheStrategy;
(function (CacheStrategy) {
    CacheStrategy[CacheStrategy["None"] = com.airbnb.lottie.LottieAnimationView.CacheStrategy.None] = "None";
    CacheStrategy[CacheStrategy["Weak"] = com.airbnb.lottie.LottieAnimationView.CacheStrategy.Weak] = "Weak";
    CacheStrategy[CacheStrategy["Strong"] = com.airbnb.lottie.LottieAnimationView.CacheStrategy.Strong] = "Strong";
})(CacheStrategy = exports.CacheStrategy || (exports.CacheStrategy = {}));
//# sourceMappingURL=nativescript-lottie.js.map