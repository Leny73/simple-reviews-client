import defaultTheme from "./default.theme"
import clone from "clone"

const theme = clone(defaultTheme)

theme.palette.primary[0] = "#2732ff"
theme.palette.secondary[0] = "#2732ff"
theme.palette.secondary[1] = "rgb(241, 243, 246)"

export default theme
