import RainView from "./Classes/RainView";

export default class View
{
    private rainView: RainView;

    constructor()
    {
        this.rainView =
            new RainView(
                [
                    "Striking sucks balls"
                    , "Oh god, just HOW MUCH I hate STRINKING!"
                    , "The incarnation of all evil out there..."
                    , "Why can't we have nice things? Just why!!??"
                    , "I blame half my mistakes on strinking's 'review'"
                    , "Just what the hell - this dev..."
                    , "Can't we please have peace and ban that strike-guy lol"
                    , "plsdontbanmeplsdontbanmeplsdontbanmeplsdontbanme"
                    , "Striking sucks balls"
                    , "Oh god, just HOW MUCH I hate STRINKING!"
                    , "The incarnation of all evil out there..."
                    , "Why can't we have nice things? Just why!!??"
                    , "I blame half my mistakes on strinking's 'review'"
                    , "Just what the hell - this dev..."
                    , "Can't we please have peace and ban that strike-guy lol"
                    , "plsdontbanmeplsdontbanmeplsdontbanmeplsdontbanme"
                    , "Striking sucks balls"
                    , "Oh god, just HOW MUCH I hate STRINKING!"
                    , "The incarnation of all evil out there..."
                    , "Why can't we have nice things? Just why!!??"
                    , "I blame half my mistakes on strinking's 'review'"
                    , "Just what the hell - this dev..."
                    , "Can't we please have peace and ban that strike-guy lol"
                    , "plsdontbanmeplsdontbanmeplsdontbanmeplsdontbanme"
                    , "Striking sucks balls"
                    , "Oh god, just HOW MUCH I hate STRINKING!"
                    , "The incarnation of all evil out there..."
                    , "Why can't we have nice things? Just why!!??"
                    , "I blame half my mistakes on strinking's 'review'"
                    , "Just what the hell - this dev..."
                    , "Can't we please have peace and ban that strike-guy lol"
                    , "plsdontbanmeplsdontbanmeplsdontbanmeplsdontbanme"
                    , "Striking sucks balls"
                    , "Oh god, just HOW MUCH I hate STRINKING!"
                    , "The incarnation of all evil out there..."
                    , "Why can't we have nice things? Just why!!??"
                    , "I blame half my mistakes on strinking's 'review'"
                    , "Just what the hell - this dev..."
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