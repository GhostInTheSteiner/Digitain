"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RainCharacter = (function () {
    function RainCharacter(character, lifeTimeCycles, fadeOutLevel) {
        if (lifeTimeCycles === void 0) { lifeTimeCycles = 30; }
        if (fadeOutLevel === void 0) { fadeOutLevel = 0.1; }
        this.character = character;
        this.lifeTimeCycles = lifeTimeCycles;
        this.fadeOutLevel = fadeOutLevel;
        this._visible = false;
        this._opacity = 1.0;
        this.lifeTimeCyclesRemaining = this.lifeTimeCycles;
    }
    Object.defineProperty(RainCharacter.prototype, "Visible", {
        get: function () {
            return this._visible;
        },
        set: function (v) {
            this._visible = v;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RainCharacter.prototype, "Opacity", {
        get: function () {
            return this._opacity;
        },
        set: function (v) {
            this._opacity = v;
            console.log(this._opacity);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RainCharacter.prototype, "BlurStrength", {
        get: function () {
            return this._blurStrength;
        },
        set: function (v) {
            this._blurStrength = v;
        },
        enumerable: true,
        configurable: true
    });
    RainCharacter.prototype.GetNextState = function () {
        this.updateObject();
        return this.toHtmlElement();
    };
    RainCharacter.prototype.LightUp = function () {
        this._visible = true;
        this._opacity = 1;
        this.lifeTimeCyclesRemaining = this.lifeTimeCycles;
    };
    RainCharacter.prototype.updateObject = function () {
        if (!this._visible) {
            return false;
        }
        else if (this._opacity < 0.1) {
            this._visible = false;
            return true;
        }
        else if (this.lifeTimeCyclesRemaining < 1) {
            this._opacity -= this.fadeOutLevel;
            return true;
        }
        else if (this._visible) {
            this.lifeTimeCyclesRemaining--;
            return true;
        }
    };
    RainCharacter.prototype.toHtmlElement = function () {
        var htmlSpanElement = document.createElement("span");
        htmlSpanElement.classList.add("rain-character");
        htmlSpanElement.textContent = this.character;
        htmlSpanElement.style.textShadow = "0px 0px " + this._blurStrength + "px green";
        htmlSpanElement.style.opacity = this._opacity.toString();
        htmlSpanElement.style.visibility =
            this.Visible ?
                "visible" :
                "hidden";
        return htmlSpanElement;
    };
    return RainCharacter;
}());
exports.default = RainCharacter;
