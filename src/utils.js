export class ScrollOptions {
    behavior;
    block;
    constructor() {
        this.behavior = "auto";
        this.block = "start";
    }
} 

//behaviour: //auto or smooth
//block: //start, center,end or nearest
export function scrollToElement(elementId, behavior= "auto", block= "start") {
    var element = document.getElementById(elementId);
    console.log(elementId);
    if (element) {
        const scrollOptions = new ScrollOptions();
        scrollOptions.behavior = behavior;
        scrollOptions.block = block;

        var optJson = {};
        Object.assign(optJson, scrollOptions);
        element.scrollIntoView(optJson);
    }
}