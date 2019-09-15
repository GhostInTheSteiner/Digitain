"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var RainView_1 = require("./Classes/RainView");
var View = (function () {
    function View() {
        this.rainView =
            new RainView_1.default([
                "rfeigbergbe",
                "grhrjztjtztjtzjtzjtzjtzjtzgrergse",
                "segegdgrehtrhzrjtzjztjtz",
                "ergzjtzjtzjtzjegerggrerregere",
                "grhrjztjtztjtzjtzjtzjtzjtzgrergse",
                "segegdgrehtrhzrjtzjztjtz",
                "ergzjtzjtzjtzjegerggrerregere",
                "grhrjztjtztjtzjtzjtzjtzjtzgrergse",
                "segegdgrehtrhzrjtzjztjtz",
                "ergzjtzjtzjtzjegerggrerregere",
                "grhrjztjtztjtzjtzjtzjtzjtzgrergse",
                "segegdgrehtrhzrjtzjztjtz",
                "ergzjtzjtzjtzjegerggrerregere",
                "grhrjztjtztjtzjtzjtzjtzjtzgrergse",
                "segegdgrehtrhzrjtzjztjtz",
                "ergzjtzjtzjtzjegerggrerregere",
                "grhrjztjtztjtzjtzjtzjtzjtzgrergse",
                "segegdgrehtrhzrjtzjztjtz",
                "grhrjztjtztjtzjtzjtzjtzjtzgrergse",
                "segegdgrehtrhzrjtzjztjtz",
                "ergzjtzjtzjtzjegerggrerregere",
                "grhrjztjtztjtzjtzjtzjtzjtzgrergse",
                "segegdgrehtrhzrjtzjztjtz",
                "ergzjtzjtzjtzjegerggrerregere",
                "grhrjztjtztjtzjtzjtzjtzjtzgrergse",
                "segegdgrehtrhzrjtzjztjtz",
                "ergzjtzjtzjtzjegerggrerregere",
                "grhrjztjtztjtzjtzjtzjtzjtzgrergse",
                "segegdgrehtrhzrjtzjztjtz",
                "ergzjtzjtzjtzjegerggrerregere",
                "grhrjztjtztjtzjtzjtzjtzjtzgrergse",
                "segegdgrehtrhzrjtzjztjtz",
                "ergzjtzjtzjtzjegerggrerregere",
                "grhrjztjtztjtzjtzjtzjtzjtzgrergse",
                "segegdgrehtrhzrjtzjztjtz",
                "grhrjztjtztjtzjtzjtzjtzjtzgrergse",
                "segegdgrehtrhzrjtzjztjtz",
                "ergzjtzjtzjtzjegerggrerregere",
                "grhrjztjtztjtzjtzjtzjtzjtzgrergse",
                "segegdgrehtrhzrjtzjztjtz",
                "ergzjtzjtzjtzjegerggrerregere",
                "grhrjztjtztjtzjtzjtzjtzjtzgrergse",
                "segegdgrehtrhzrjtzjztjtz",
                "ergzjtzjtzjtzjegerggrerregere",
                "grhrjztjtztjtzjtzjtzjtzjtzgrergse",
                "segegdgrehtrhzrjtzjztjtz",
                "ergzjtzjtzjtzjegerggrerregere",
                "grhrjztjtztjtzjtzjtzjtzjtzgrergse",
                "segegdgrehtrhzrjtzjztjtz",
                "ergzjtzjtzjtzjegerggrerregere",
                "grhrjztjtztjtzjtzjtzjtzjtzgrergse",
                "segegdgrehtrhzrjtzjztjtz",
                "ergzjtzjtzjtzjegerggrerregere"
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
