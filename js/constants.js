
var keys = ["bglanguage", "enlanguage"]
var values = ["bg", "en"]
const languageAbreviations = values.reduce((acc, value, i) => {
    acc[keys[i]] = value;
    return acc
}, {})

export { languageAbreviations }