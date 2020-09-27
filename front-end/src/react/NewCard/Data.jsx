
export const DEFAULT_DESIGNS = [
    "CLASSIC",
    "VINTAGE",
    "FUTURISTIC",
    "BLUE",
    "RED",
    "PURPLE",
    "PINK",
    "TURQUOISE"
].map((item, i) => Object.assign({}, {id: i, text: item}))

export const DEFAULT_OCCASIONS = [
    "Birthday",
    "Anniversary",
    "Moved house",
    "Graduated",
    "Christmas",
    "Promotion"
].map((item, i) => Object.assign({}, {text: item}, {id: i}))
