import { Page } from "../../src";
import { Slider } from "../../src/elements/slider";

export const samplePage = new Page(
    new Slider([], "Edad", { min: 1, max: 100 })
);