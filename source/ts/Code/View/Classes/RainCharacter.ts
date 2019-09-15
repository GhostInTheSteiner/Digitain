export default class RainCharacter implements IUpdatableHtmlElement
{
    private _visible: boolean;
    private _opacity: number;
    private _blurStrength: Number;


    constructor(
        private character: string,
        private lifeTimeCycles: number = 30,
        private fadeOutLevel: number = 0.1
    )
    {
        this._visible = false;
        this._opacity = 1.0
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
        console.log(this._opacity)
    }

    public get BlurStrength(): Number
    {
        return this._blurStrength;
    }

    public set BlurStrength(v: Number)
    {
        this._blurStrength = v;
    }

    public GetNextState(): HTMLSpanElement
    {
        this.updateObject();

        return this.toHtmlElement();
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
        else if (this.lifeTimeCycles < 1)
        {
            //2) Entered after no lifetime left
            this._opacity -= this.fadeOutLevel;
            return true
        }
        else if (this._visible)
        {
            //1) Entered after set to visible
            this.lifeTimeCycles--;
            return true
        }
    }

    private toHtmlElement(): HTMLSpanElement
    {
        let htmlSpanElement: HTMLSpanElement = document.createElement("span");

        htmlSpanElement.classList.add("rain-character")
        htmlSpanElement.textContent = this.character

        htmlSpanElement.style.textShadow = "0px 0px " + this._blurStrength + "px green"
        htmlSpanElement.style.opacity = this._opacity.toString();
        htmlSpanElement.style.visibility =
            this.Visible ?
                "visible" :
                "hidden"

        return htmlSpanElement;
    }
}