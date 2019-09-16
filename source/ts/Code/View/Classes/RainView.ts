import RainString from "./RainString";

export default class RainView implements IUpdatableHtmlElement
{
    private rainStringArray: Array<RainString>;


    constructor(
        private stringTextArray: Array<string>,
        private characterBlurredCount: number = 1,
        private characterBlurredStrength: number = 5,
        private characterFadeCount: number = 40,
        private characterFadeBegin: number = 10,
        private stringDelayStartVariation: number = 10000,
        private stringDelayUpdate: number = 100,
        private stringDelayUpdateDynamic: boolean = true
    )
    {
        this.rainStringArray = new Array<RainString>();

        this.fillView();
    }
    

    public AddStringArray(textArray: Array<string>)
    {
        //dynamically add string array
    }

    public AddString(text: string)
    {
        //dynamically add string
    }

    public GetNextState(): HTMLDivElement
    {
        return this.toHtmlElement()
    }

    private toHtmlElement(): HTMLDivElement
    {
        let htmlDivElement: HTMLDivElement = document.createElement("div");

        htmlDivElement.classList.add("rain-view")

        this.rainStringArray.forEach(rainString =>
        {
            htmlDivElement.appendChild(
                rainString.GetNextState()
            )
        })

        return htmlDivElement;
    }

    private fillView(): void
    {
        this.stringTextArray.forEach(stringText =>
        {
            this.rainStringArray.push(
                new RainString(
                    stringText,
                    Math.random() * this.stringDelayStartVariation,
                    this.stringDelayUpdate * (Math.random() + 1.0),
                    this.stringDelayUpdateDynamic,
                    this.characterBlurredCount,
                    this.characterBlurredStrength,
                    this.characterFadeCount,
                    this.characterFadeBegin
                )
            )
        });
    }
}