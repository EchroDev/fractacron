import { Color } from "./color.js"
import { DirectionsStyles } from "./directions_styles.types.js"

export type BaseStyles = Partial<{
    backgroundColor: Color
    color: Color
    opacity: number
    border: Partial<{
        radius: number
        size: DirectionsStyles | number
        color: Color
    }>
    padding: DirectionsStyles | number
    margin: DirectionsStyles | number
    position: "absolute" | "relative" | "fixed"
    directions: DirectionsStyles
    width: number
    height: number
    fontSize: number
    layout: Partial<{
        display: "flex" | "grid" | "block"
        flexDirection: "column" | "row"
        gap: number
        alignItems: "start" | "end" | "center"
        justifyContent: "start" | "end" | "center"
    }>
}>