"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RainString_1 = require("./RainString");
var RainView = (function () {
    function RainView(stringTextArray, characterBlurredCount, characterBlurredStrength, characterFadeCount, characterFadeBegin, stringDelayStartVariation, stringDelayUpdate, stringDelayUpdateDynamic) {
        if (characterBlurredCount === void 0) { characterBlurredCount = 1; }
        if (characterBlurredStrength === void 0) { characterBlurredStrength = 5; }
        if (characterFadeCount === void 0) { characterFadeCount = 40; }
        if (characterFadeBegin === void 0) { characterFadeBegin = 10; }
        if (stringDelayStartVariation === void 0) { stringDelayStartVariation = 10000; }
        if (stringDelayUpdate === void 0) { stringDelayUpdate = 100; }
        if (stringDelayUpdateDynamic === void 0) { stringDelayUpdateDynamic = true; }
        this.stringTextArray = stringTextArray;
        this.characterBlurredCount = characterBlurredCount;
        this.characterBlurredStrength = characterBlurredStrength;
        this.characterFadeCount = characterFadeCount;
        this.characterFadeBegin = characterFadeBegin;
        this.stringDelayStartVariation = stringDelayStartVariation;
        this.stringDelayUpdate = stringDelayUpdate;
        this.stringDelayUpdateDynamic = stringDelayUpdateDynamic;
        this.rainStringArray = new Array();
        this.fillView();
    }
    RainView.prototype.AddStringArray = function (textArray) {
    };
    RainView.prototype.AddString = function (text) {
    };
    RainView.prototype.GetNextState = function () {
        return this.toHtmlElement();
    };
    RainView.prototype.toHtmlElement = function () {
        var htmlDivElement = document.createElement("div");
        htmlDivElement.classList.add("rain-view");
        this.rainStringArray.forEach(function (rainString) {
            htmlDivElement.appendChild(rainString.GetNextState());
        });
        return htmlDivElement;
    };
    RainView.prototype.fillView = function () {
        var _this = this;
        this.stringTextArray.forEach(function (stringText) {
            _this.rainStringArray.push(new RainString_1.default(stringText, Math.random() * _this.stringDelayStartVariation, _this.stringDelayUpdate * (Math.random() + 1.0), _this.stringDelayUpdateDynamic, _this.characterBlurredCount, _this.characterBlurredStrength, _this.characterFadeCount, _this.characterFadeBegin));
        });
    };
    return RainView;
}());
exports.default = RainView;
