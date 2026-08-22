export class Element<T extends HTMLElement = HTMLElement> {
    public _element: T;

    constructor(children: Element | Element[], element: T) {
        this._element = element;
        if (children instanceof Element) this._element.appendChild(children._element);
        else children.forEach((child) => this._element.appendChild(child._element));
    }

    configure(callback: (element: T) => void) {
        callback(this._element);
        return this;
    }
}

export const element = <T extends HTMLElement>(type: keyof HTMLElementTagNameMap, styles: string, config: (el: T) => void, children: HTMLElement | HTMLElement[]): T => {
    const element = document.createElement(type);
    config(element as T);
    element.className = styles || "";
    if (children instanceof HTMLElement) element.appendChild(children)
    else children.forEach((element) => element.appendChild(element));
    return element as T;
}