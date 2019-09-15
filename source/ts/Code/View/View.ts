import RainView from "./Classes/RainView";

export default class View
{
    private rainView: RainView;

    constructor()
    {
        this.rainView =
            new RainView(
                [
                    "rfeigbergbe"
                    , "grhrjztjtztjtzjtzjtzjtzjtzgrergse"
                    , "segegdgrehtrhzrjtzjztjtz"
                    , "ergzjtzjtzjtzjegerggrerregere"
                    , "grhrjztjtztjtzjtzjtzjtzjtzgrergse"
                    , "segegdgrehtrhzrjtzjztjtz"
                    , "ergzjtzjtzjtzjegerggrerregere"
                    , "grhrjztjtztjtzjtzjtzjtzjtzgrergse"
                    , "segegdgrehtrhzrjtzjztjtz"
                    , "ergzjtzjtzjtzjegerggrerregere"
                    , "grhrjztjtztjtzjtzjtzjtzjtzgrergse"
                    , "segegdgrehtrhzrjtzjztjtz"
                    , "ergzjtzjtzjtzjegerggrerregere"
                    , "grhrjztjtztjtzjtzjtzjtzjtzgrergse"
                    , "segegdgrehtrhzrjtzjztjtz"
                    , "ergzjtzjtzjtzjegerggrerregere"
                    , "grhrjztjtztjtzjtzjtzjtzjtzgrergse"
                    , "segegdgrehtrhzrjtzjztjtz"
                    , "grhrjztjtztjtzjtzjtzjtzjtzgrergse"
                    , "segegdgrehtrhzrjtzjztjtz"
                    , "ergzjtzjtzjtzjegerggrerregere"
                    , "grhrjztjtztjtzjtzjtzjtzjtzgrergse"
                    , "segegdgrehtrhzrjtzjztjtz"
                    , "ergzjtzjtzjtzjegerggrerregere"
                    , "grhrjztjtztjtzjtzjtzjtzjtzgrergse"
                    , "segegdgrehtrhzrjtzjztjtz"
                    , "ergzjtzjtzjtzjegerggrerregere"
                    , "grhrjztjtztjtzjtzjtzjtzjtzgrergse"
                    , "segegdgrehtrhzrjtzjztjtz"
                    , "ergzjtzjtzjtzjegerggrerregere"
                    , "grhrjztjtztjtzjtzjtzjtzjtzgrergse"
                    , "segegdgrehtrhzrjtzjztjtz"
                    , "ergzjtzjtzjtzjegerggrerregere"
                    , "grhrjztjtztjtzjtzjtzjtzjtzgrergse"
                    , "segegdgrehtrhzrjtzjztjtz"
                    , "grhrjztjtztjtzjtzjtzjtzjtzgrergse"
                    , "segegdgrehtrhzrjtzjztjtz"
                    , "ergzjtzjtzjtzjegerggrerregere"
                    , "grhrjztjtztjtzjtzjtzjtzjtzgrergse"
                    , "segegdgrehtrhzrjtzjztjtz"
                    , "ergzjtzjtzjtzjegerggrerregere"
                    , "grhrjztjtztjtzjtzjtzjtzjtzgrergse"
                    , "segegdgrehtrhzrjtzjztjtz"
                    , "ergzjtzjtzjtzjegerggrerregere"
                    , "grhrjztjtztjtzjtzjtzjtzjtzgrergse"
                    , "segegdgrehtrhzrjtzjztjtz"
                    , "ergzjtzjtzjtzjegerggrerregere"
                    , "grhrjztjtztjtzjtzjtzjtzjtzgrergse"
                    , "segegdgrehtrhzrjtzjztjtz"
                    , "ergzjtzjtzjtzjegerggrerregere"
                    , "grhrjztjtztjtzjtzjtzjtzjtzgrergse"
                    , "segegdgrehtrhzrjtzjztjtz"
                    , "ergzjtzjtzjtzjegerggrerregere"
                ]
            );
    }

    public StartAnimation(): void
    {
        setInterval(
            this.updateAnimation.bind(this)
        )
    }

    private updateAnimation(): void
    {
        let rainViewDiv = document.getElementById("rain-view");

        rainViewDiv.innerHTML = "";

        rainViewDiv.appendChild(
            this.rainView.GetNextState()
        );
    }
}