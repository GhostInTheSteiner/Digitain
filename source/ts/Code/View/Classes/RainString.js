"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RainCharacter_1 = require("./RainCharacter");
var RainString = (function () {
    function RainString(stringText, stringDelayStart, stringDelayUpdate, stringDelayUpdateDynamic, characterBlurredCount, characterBlurredStrength, characterFadeCount, characterFadeBegin) {
        this.stringText = stringText;
        this.stringDelayStart = stringDelayStart;
        this.stringDelayUpdate = stringDelayUpdate;
        this.stringDelayUpdateDynamic = stringDelayUpdateDynamic;
        this.characterBlurredCount = characterBlurredCount;
        this.characterBlurredStrength = characterBlurredStrength;
        this.characterFadeCount = characterFadeCount;
        this.characterFadeBegin = characterFadeBegin;
        this.init();
    }
    RainString.prototype.GetNextState = function () {
        var timeCurrent = new Date().getTime();
        if (timeCurrent - this.timeInit < this.stringDelayStart) {
        }
        else if (timeCurrent - this.timeUpdateLast < this.stringDelayUpdate) {
        }
        else if (!this.updateObject()) {
            this.init(true);
        }
        else {
            var htmlDivElement = this.toHtmlDivElement();
            if (!htmlDivElement.hasChildNodes()) {
            }
            this.timeUpdateLast = timeCurrent;
            return htmlDivElement;
        }
        return this.toHtmlDivElement();
    };
    RainString.prototype.init = function (reInit) {
        if (reInit === void 0) { reInit = false; }
        if (!reInit)
            this.rainCharacterArray = new Array();
        this.currentCharacterIndex = 0;
        this.timeUpdateLast = new Date().getTime();
        this.timeInit = this.timeUpdateLast;
        if (!reInit)
            this.fillString();
    };
    RainString.prototype.updateObject = function () {
        this.blurDrop();
        return this.showNextCharacter();
    };
    RainString.prototype.toHtmlDivElement = function () {
        var htmlDivElement = document.createElement("div");
        htmlDivElement.classList.add("rain-string");
        this.rainCharacterArray.forEach(function (rainCharacter) {
            htmlDivElement.appendChild(rainCharacter.GetNextState());
        });
        return htmlDivElement;
    };
    RainString.prototype.fillString = function () {
        var _this = this;
        Array
            .from(this.stringText)
            .forEach(function (stringChar) {
            _this.rainCharacterArray.push(new RainCharacter_1.default(stringChar));
        });
    };
    RainString.prototype.showNextCharacter = function () {
        if (this.rainCharacterArray.length > this.currentCharacterIndex) {
            this.rainCharacterArray[this.currentCharacterIndex].LightUp();
            this.currentCharacterIndex++;
            return true;
        }
        else {
            return false;
        }
    };
    RainString.prototype.blurDrop = function () {
        var _this = this;
        var level = this.characterBlurredStrength / this.characterBlurredCount;
        var sliceStartIndex = this.currentCharacterIndex - this.characterBlurredCount > -1 ?
            this.currentCharacterIndex - this.characterBlurredCount :
            0;
        this.rainCharacterArray
            .slice(sliceStartIndex, this.currentCharacterIndex)
            .reverse()
            .forEach(function (rainCharacter, index) {
            rainCharacter.BlurStrength =
                level * (_this.characterBlurredCount - index);
        });
    };
    return RainString;
}());
exports.default = RainString;
