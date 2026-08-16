import { Base, BaseType } from "../core/extends/base.js";
import { BaseContent, BaseContentType } from "../core/extends/base_content.js";
import { Value } from "../utilities/value.js";

type ButtonOptions = Partial<BaseContentType & { submit?: boolean; signals?: { onClick?: () => void } }>;
type ButtonPresetType = Partial<{
    rounded: boolean
    bordered: boolean
    size: "small" | "large"
}>

export class Button extends BaseContent {
    public submit: boolean = false;

    constructor(children: Base | Base[])
    constructor(children: Base | Base[], content: string)
    constructor(children: Base | Base[], content: string, preset: ButtonPresetType)
    constructor(children: Base | Base[], content: string, preset: ButtonPresetType, options: ButtonOptions,)

    constructor(children?: Base | Base[], content?: string, preset?: ButtonPresetType, options?: ButtonOptions,) {
        super(children || [], { ...options, content, type: "button" });
        this.submit = options?.submit ?? false;
        if (options?.signals?.onClick) this.onClick(options.signals.onClick);
        this._element.style.cursor = "pointer";
        (this._element as HTMLButtonElement).type = options?.submit ? "submit" : "button";

        this._defaultPreset();
        if (preset?.rounded) this._roundedPreset();
        if (preset?.bordered) this.borderSize = 2;

        switch (preset?.size) {
            case "small":
                this.fontSize = 18;
                this.padding = {
                    top: 5,
                    bottom: 5,
                    left: 10,
                    right: 10
                }
                break;
            case "large":
                this.fontSize = 32;
                this.padding = {
                    top: 12,
                    bottom: 12,
                    left: 24,
                    right: 24
                }
                break;
        }
    }

    onClick(callback: () => void) {
        this._element.addEventListener("click", callback);
        return this;
    }

    private _defaultPreset() {
        this.borderRadius = 10;
        this.fontSize = 24;
        this.borderSize = 0;
        this.padding = {
            top: 8,
            bottom: 8,
            left: 16,
            right: 16
        }
    }

    private _roundedPreset() {
        this._defaultPreset();
        this.borderRadius = 360;
    }
}