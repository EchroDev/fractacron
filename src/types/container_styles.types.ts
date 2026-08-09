import { BaseStyles } from "./base_styles.types.js"

export type ContainerStyles = Partial<{
    display: "flex" | "grid" | "block"
    flexDirection: "row" | "column"
    gap: number
    center: boolean
} & BaseStyles>