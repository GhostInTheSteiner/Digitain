import RainCharacter from "./RainCharacter";

export default class RainString implements IUpdatableHtmlElement
{
    private rainCharacterArray: Array<RainCharacter>;
    private currentCharacterIndex: number
    private timeUpdateLast: number;
    private timeInit: number;


    constructor(
        private stringText: string,
        private stringDelayStart: number,
        private stringDelayUpdate: number,
        private stringDelayUpdateDynamic: boolean, //Adjust updateDelay to text length
        private characterBlurredCount: number,
        private characterBlurredStrength: number,
        private characterFadeCount: number,
        private characterFadeBegin: number
    )
    {
        this.rainCharacterArray = new Array<RainCharacter>();
        this.currentCharacterIndex = 0;
        this.timeUpdateLast = new Date().getTime();
        this.timeInit = this.timeUpdateLast;

        this.fillString();
    }


    public GetNextState(): HTMLDivElement
    {
        let timeCurrent = new Date().getTime();

        if (timeCurrent - this.timeInit < this.stringDelayStart)
        {
            //Entered during delayStart time
            //pass => shouldn't start yet
        }
        else if (timeCurrent - this.timeUpdateLast < this.stringDelayUpdate)
        {
            //Entered as long as updateDelay not yet reached
            //pass => shouldn't update yet
        }
        else if (!this.updateObject())
        {
            //Entered in case all of RainString's characters are shown

            //console.log("INFO:\n\nCode: 'Fall finished.'\nDescription: 'No more characters to show for RainString:'\n");
            //console.log(this);
        }
        else
        {
            //Entered after successfull render (rarely)

            let htmlDivElement: HTMLDivElement = this.toHtmlDivElement();

            if (!htmlDivElement.hasChildNodes())
            {
              //  console.log("WARN:\n\nCode: 'No drop.'\nDescription: 'No RainCharacter in RainString:'\n");
                //console.log(this);
            }

            this.timeUpdateLast = timeCurrent;

            return htmlDivElement;
        }

        //Returned whenever no render took place (almost always)
        return this.toHtmlDivElement()
    }

    private updateObject(): boolean
    {
        this.blurDrop();

        return this.showNextCharacter();
    }

    private toHtmlDivElement(): HTMLDivElement
    {
        let htmlDivElement: HTMLDivElement = document.createElement("div");

        htmlDivElement.classList.add("rain-string")

        this.rainCharacterArray.forEach(rainCharacter =>
        {
            htmlDivElement.appendChild(
                rainCharacter.GetNextState()
            )
        })

        return htmlDivElement;
    }

    private fillString(): void
    {
        Array
            .from(this.stringText)
            .forEach(stringChar =>
            {
                this.rainCharacterArray.push(new RainCharacter(stringChar));
            });
    }

    private showNextCharacter(): boolean
    {
        if (this.rainCharacterArray.length > this.currentCharacterIndex)
        {
            //There still are more characters
            this.rainCharacterArray[this.currentCharacterIndex].Visible = true;

            this.currentCharacterIndex++;

            return true;
        }
        else
        {
            //No more characters
            return false;
        }
    }

    private blurDrop(): void
    {
        let level: number =
            this.characterBlurredStrength / this.characterBlurredCount;

        let sliceStartIndex: number =
            this.currentCharacterIndex - this.characterBlurredCount > -1 ?
                this.currentCharacterIndex - this.characterBlurredCount :
                0


        this.rainCharacterArray
            .slice(
                sliceStartIndex,
                this.currentCharacterIndex
            )
            .reverse()
            .forEach(
                (rainCharacter, index) =>
                {
                    rainCharacter.BlurStrength =
                        level * (this.characterBlurredCount - index);
                }
            )
    }
}