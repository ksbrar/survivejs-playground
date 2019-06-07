export default (text = "Hello dude") => {
    const element = document.createElement("div");

    element.innerHTML = text;

    return element;
}