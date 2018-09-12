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
var platform_1 = require("tns-core-modules/platform");
var LottieView = (function (_super) {
    __extends(LottieView, _super);
    function LottieView() {
        var _this = _super.call(this) || this;
        _this.nativeView = UIView.new();
        return _this;
    }
    Object.defineProperty(LottieView.prototype, "ios", {
        get: function () {
            return this.nativeView;
        },
        enumerable: true,
        configurable: true
    });
    LottieView.prototype[nativescript_lottie_common_1.srcProperty.setNative] = function (src) {
        if (this._animationView) {
            this._animationView.removeFromSuperview();
            this._animationView = null;
        }
        this.createAnimationView(src);
    };
    LottieView.prototype.createAnimationView = function (src) {
        var _this = this;
        if (!this.getMeasuredHeight()) {
            setTimeout(function () { return _this.createAnimationView(src); }, 50);
            return;
        }
        this._animationView = LOTAnimationView.animationNamed(src);
        this.contentModeDefault();
        this.ios.addSubview(this._animationView);
        var scale = platform_1.screen.mainScreen.scale;
        var newFrameHeight = this.getMeasuredHeight() / scale;
        var newFrameWidth = this.getMeasuredWidth() / scale;
        var newFrame = CGRectMake(0, 0, newFrameWidth, newFrameHeight);
        this._animationView.frame = newFrame;
        if (this.loop) {
            this.setLoopAnimation(this.loop);
        }
        if (this.autoPlay) {
            this.playAnimation().then(function (finished) {
            }, function (err) {
            });
        }
    };
    LottieView.prototype[nativescript_lottie_common_1.loopProperty.setNative] = function (loop) {
        this.setLoopAnimation(this.loop);
    };
    LottieView.prototype.setLoopAnimation = function (loop) {
        if (this._animationView) {
            this._animationView.loopAnimation = loop;
        }
    };
    LottieView.prototype[nativescript_lottie_common_1.autoPlayProperty.setNative] = function (autoPlay) {
        if (autoPlay) {
            this.setLoopAnimation(this.loop);
            this.contentModeDefault();
            if (!this.isAnimating()) {
                this.playAnimation().then(function (finished) {
                }, function (err) {
                });
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
        if (!this._animationView) {
            setTimeout(function () { return _this.setTheme(value); }, 50);
            return;
        }
        if (value && value.length) {
            value.forEach(function (dynamicValue) {
                var callBack = LOTColorValueCallback.withCGColor(new view_1.Color(dynamicValue.value).ios.CGColor);
                dynamicValue.keyPath.push('Color');
                var keyPath = LOTKeypath.keypathWithString(dynamicValue.keyPath.join('.'));
                _this._animationView.setValueDelegateForKeypath(callBack, keyPath);
            });
        }
    };
    LottieView.prototype.onLoaded = function () {
        _super.prototype.onLoaded.call(this);
    };
    LottieView.prototype.onMeasure = function (widthMeasureSpec, heightMeasureSpec) {
        _super.prototype.onMeasure.call(this, widthMeasureSpec, heightMeasureSpec);
        var nativeView = this.nativeView;
        if (nativeView) {
            var measuredWidth = view_1.layout.getMeasureSpecSize(widthMeasureSpec);
            var measuredHeight = view_1.layout.getMeasureSpecSize(heightMeasureSpec);
            var scale = platform_1.screen.mainScreen.scale;
            var width = typeof this.width === 'number' ? this.width : measuredWidth / scale;
            var height = typeof this.height === 'number' ? this.height : measuredHeight / scale;
            this.setMeasuredDimension(measuredWidth, measuredHeight);
            if (this._animationView) {
                var newFrame = CGRectMake(0, 0, width, height);
                this._animationView.frame = newFrame;
            }
        }
    };
    LottieView.prototype.playAnimation = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this._animationView) {
                _this._animationView.playWithCompletion(function (animationFinished) {
                    resolve(animationFinished);
                });
            }
            else {
                reject(new Error("The iOS lottie view isn't loaded yet."));
            }
        });
    };
    LottieView.prototype.cancelAnimation = function () {
        if (this._animationView) {
            this._animationView.pause();
        }
    };
    LottieView.prototype.isAnimating = function () {
        var result = false;
        if (this._animationView) {
            result = this._animationView.isAnimationPlaying;
        }
        return result;
    };
    Object.defineProperty(LottieView.prototype, "progress", {
        get: function () {
            var progress = null;
            if (this._animationView) {
                progress = this._animationView.animationProgress;
            }
            return progress;
        },
        set: function (value) {
            if (typeof value !== 'undefined' && this._animationView) {
                this._animationView.animationProgress = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LottieView.prototype, "speed", {
        get: function () {
            var speed = null;
            if (this._animationView) {
                speed = this._animationView.animationSpeed;
            }
            return speed;
        },
        set: function (value) {
            if (typeof value !== 'undefined' && this._animationView) {
                this._animationView.animationSpeed = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LottieView.prototype, "duration", {
        get: function () {
            var duration = null;
            if (this._animationView) {
                duration = this._animationView.animationDuration;
            }
            return duration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LottieView.prototype, "contentMode", {
        set: function (mode) {
            this._contentMode = mode;
            if (this._animationView) {
                this._animationView.contentMode = mode;
            }
        },
        enumerable: true,
        configurable: true
    });
    LottieView.prototype.contentModeDefault = function () {
        if (this._animationView) {
            if (this._contentMode) {
                this._animationView.contentMode = this._contentMode;
            }
            else {
                this._animationView.contentMode = UIViewContentMode.ScaleAspectFit;
            }
        }
    };
    return LottieView;
}(nativescript_lottie_common_1.LottieViewBase));
exports.LottieView = LottieView;
//# sourceMappingURL=nativescript-lottie.js.map