import View from "./View/View";
import Model from "./Model";

class Controller
{
    private view: View

    constructor(
        //private model: Model
    )
    {
        this.view = new View();
        this.view.StartAnimation();
    }
}

export default Controller