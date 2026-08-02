import { Color, colorToHex } from "../types/color.js"

export class Border {
    private _borderColor: Color = "black";

    constructor(private _element: HTMLElement) {}

    set radius(value: number) { this._element.style.borderRadius = `${value}px` }
    set size(value: number) { this._element.style.border = `${value}px solid ${colorToHex(this._borderColor)}` }
    set sizeLeft(value: number) { this._element.style.borderLeft = `${value}px solid ${colorToHex(this._borderColor)}`}
    set sizeRight(value: number) { this._element.style.borderRight = `${value}px solid ${colorToHex(this._borderColor)}`}
    set sizeTop(value: number) { this._element.style.borderTop = `${value}px solid ${colorToHex(this._borderColor)}`}
    set sizeBottom(value: number) { this._element.style.borderBottom = `${value}px solid ${colorToHex(this._borderColor)}`}
    
    set color(value: Color) {
        this._borderColor = value;
        this._element.style.border = `${value}px solid ${colorToHex(this._borderColor)}`;
    }
}