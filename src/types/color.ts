export type Color =
    | "black"
    | "white"
    | "red"
    | "green"
    | "blue"
    | "gray"
    | string

export const colorToHex = (color: Color) => {
    switch (color) {
        case "black": return "#000";
        case "white": return "#fff";
        case "red": return "#ff0000";
        case "green": return "#00ff00";
        case "blue": return "#0000ff";
        case "gray": return "#424242";
        default: return color;
    }
}