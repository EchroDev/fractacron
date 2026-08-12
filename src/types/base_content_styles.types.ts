import { BaseStyles } from "./base_styles.types";
import { Color } from "./color";

export type BaseContentStyles = Partial<{
    font: Partial<{
        size: number
        color: Color
    }>
} & BaseStyles>