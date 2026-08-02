import { Color } from "./color.js"
import { DirectionsStyles } from "./directions_styles.types.js"

export type BaseStyles = Partial<{
    backgroundColor: Color
    color: Color
    opacity: number
    border: {
        radius: number
        size: DirectionsStyles | number
        color: Color
    }
    padding: DirectionsStyles
    margin: DirectionsStyles
}>