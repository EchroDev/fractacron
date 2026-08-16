import { Color } from "./color.js"
import { DirectionsStyles } from "./directions_styles.types.js"

export type BaseStyles = Partial<{
    bgColor: Color
    color: Color
    opacity: number
    borderRadius: number
    borderSize: DirectionsStyles | number
    borderColor: Color
    padding: DirectionsStyles | number
    margin: DirectionsStyles | number
    position: "absolute" | "relative" | "fixed"
    directions: DirectionsStyles
    width: number
    height: number
    fontSize: number
    display: "flex" | "grid" | "block"
    flexDirection: "column" | "row"
    gap: number
    alignItems: "start" | "end" | "center"
    justifyContent: "start" | "end" | "center"
}>