export default class RainCharacter implements IUpdatableHtmlElement
{
    private _visible: boolean;
    private _opacity: number;
    private _blurStrength: Number;
    private _color : string;
    
    private lifeTimeCyclesRemaining: number


    constructor(
        private character: string,
        private lifeTimeCycles: number = 30,
        private fadeOutLevel: number = 0.1
    )
    {
        this._visible = false;
        this._opacity = 1.0;

        this.lifeTimeCyclesRemaining = this.lifeTimeCycles;
    }


    public get Visible(): boolean
    {
        return this._visible;
    }

    public set Visible(v: boolean)
    {
        this._visible = v;
    }

    public get Opacity(): number
    {
        return this._opacity;
    }

    public set Opacity(v: number)
    {
        this._opacity = v;
    }

    public get BlurStrength(): Number
    {
        return this._blurStrength;
    }

    public set BlurStrength(v: Number)
    {
        this._blurStrength = v;
    }

    public get Color() : string {
        return this._color;
    }
    public set Color(v : string) {
        this._color = v;
    }


    public GetNextState(): HTMLSpanElement
    {
        this.updateObject();

        return this.toHtmlElement();
    }


    public LightUp()
    {
        this._visible = true;
        this._opacity = 1;
        this.lifeTimeCyclesRemaining = this.lifeTimeCycles;
    }

    private updateObject(): boolean
    {
        if (!this._visible)
        {
            //4) Entered always after fade out complete
            return false
        }
        else if(this._opacity < 0.1)
        {
            //3) Entered once after fade out complete
            this._visible = false
            return true
        }
        else if (this.lifeTimeCyclesRemaining < 1)
        {
            //2) Entered after no lifetime left
            this._opacity -= this.fadeOutLevel;
            return true
        }
        else if (this._visible)
        {
            if (this.lifeTimeCyclesRemaining == this.lifeTimeCycles)
                this._color = "gold";
            else
                this._color = "green";

            //1) Entered after set to visible
            this.lifeTimeCyclesRemaining--;
            return true
        }
    }


    private toHtmlElement(): HTMLSpanElement
    {
        let htmlSpanElement: HTMLSpanElement = document.createElement("span");

        htmlSpanElement.classList.add("rain-character")
        htmlSpanElement.textContent = this.character

        htmlSpanElement.style.textShadow = "0px 0px " + this._blurStrength + "px green";
        htmlSpanElement.style.opacity = this._opacity.toString();
        htmlSpanElement.style.visibility =
            this.Visible ?
                "visible" :
                "hidden"

        return htmlSpanElement;
    }
}