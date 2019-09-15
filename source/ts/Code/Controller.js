"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var View_1 = require("./View/View");
var Controller = (function () {
    function Controller() {
        this.view = new View_1.default();
        this.view.StartAnimation();
    }
    return Controller;
}());
exports.default = Controller;
