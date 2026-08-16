import { Base, BaseType } from "../core/extends/base.js";
import { BaseStyles } from "../types/base_styles.types.js";

type ContainerTagType = "div" | "header" | "footer" | "main" | "aside" | "section" | "nav";

type ContainerType = {
    style: BaseStyles
    type: ContainerTagType
}

type ContainerPresetType = "default" | "center" | "center-column";

export class Container extends Base {
    constructor(children: Base | Base[])
    constructor(children: Base | Base[], type: ContainerTagType)
    constructor(children: Base | Base[], type: ContainerTagType, preset: ContainerPresetType)
    constructor(children: Base | Base[], type: ContainerTagType, preset: ContainerPresetType, options: Partial<BaseType & ContainerType>)

    constructor(children?: Base | Base[], type?: ContainerTagType, preset?: ContainerPresetType, options?: Partial<BaseType & ContainerType>) {
        super(children || [], { ...options, type });

        switch (preset) {
            case "default":
                this._defaultPreset();
                break;
            case "center":
                this._centerPreset();
                break;
            case "center-column":
                this._centerPreset();
                this.flexDirection = "column"
                break;
        }
    }

    private _defaultPreset() {
        this.padding = 10;
        this.borderRadius = 20;
        this.bgColor = "#c7c7c7ff";
    }

    private _centerPreset() {
        this._defaultPreset();
        this.display = "flex";
        this.alignItems = "center";
        this.justifyContent = "center";
        this.gap = 10;
    }
}