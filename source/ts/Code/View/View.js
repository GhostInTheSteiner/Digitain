"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RainView_1 = require("./Classes/RainView");
var View = (function () {
    function View() {
        this.rainView =
            new RainView_1.default([
                "Striking sucks balls",
                "Oh god, just HOW MUCH I hate STRINKING!",
                "The incarnation of all evil out there...",
                "Why can't we have nice things? Just why!!??",
                "I blame half my mistakes on strinking's 'review'",
                "Just what the hell - this dev...",
                "Can't we please have peace and ban that strike-guy lol",
                "plsdontbanmeplsdontbanmeplsdontbanmeplsdontbanme",
                "Striking sucks balls",
                "Oh god, just HOW MUCH I hate STRINKING!",
                "The incarnation of all evil out there...",
                "Why can't we have nice things? Just why!!??",
                "I blame half my mistakes on strinking's 'review'",
                "Just what the hell - this dev...",
                "Can't we please have peace and ban that strike-guy lol",
                "plsdontbanmeplsdontbanmeplsdontbanmeplsdontbanme",
                "Striking sucks balls",
                "Oh god, just HOW MUCH I hate STRINKING!",
                "The incarnation of all evil out there...",
                "Why can't we have nice things? Just why!!??",
                "I blame half my mistakes on strinking's 'review'",
                "Just what the hell - this dev...",
                "Can't we please have peace and ban that strike-guy lol",
                "plsdontbanmeplsdontbanmeplsdontbanmeplsdontbanme",
                "Striking sucks balls",
                "Oh god, just HOW MUCH I hate STRINKING!",
                "The incarnation of all evil out there...",
                "Why can't we have nice things? Just why!!??",
                "I blame half my mistakes on strinking's 'review'",
                "Just what the hell - this dev...",
                "Can't we please have peace and ban that strike-guy lol",
                "plsdontbanmeplsdontbanmeplsdontbanmeplsdontbanme",
                "Striking sucks balls",
                "Oh god, just HOW MUCH I hate STRINKING!",
                "The incarnation of all evil out there...",
                "Why can't we have nice things? Just why!!??",
                "I blame half my mistakes on strinking's 'review'",
                "Just what the hell - this dev..."
            ]);
    }
    View.prototype.StartAnimation = function () {
        setInterval(this.updateAnimation.bind(this));
    };
    View.prototype.updateAnimation = function () {
        var rainViewDiv = document.getElementById("rain-view");
        rainViewDiv.innerHTML = "";
        rainViewDiv.appendChild(this.rainView.GetNextState());
    };
    return View;
}());
exports.default = View;
