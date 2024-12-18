import cottonImage from "../../../assets/images/cotton.jpg"

export default toggleOptions = [
  { label: "Season", options: ["Spring", "Summer", "Fall", "Winter"] },
  {
    label: "Color",
    options: colorOptions,
  },
  {
    label: "Fabric",
    options: fabricOptions,
  },
  {
    label: "Pattern",
    options: patternOptions,
  },
]
;[
  { name: "Red", hexCode: "#FF0000" },
  { name: "Blue", hexCode: "#0000FF" },
  { name: "Green", hexCode: "#00FF00" },
  { name: "Yellow", hexCode: "#FFFF00" },
  { name: "Orange", hexCode: "#FFA500" },
  { name: "Purple", hexCode: "#800080" },
  { name: "Multi Color", icon: image },
]

const colorMap = {
  Red: "#FF0000",
  Blue: "#0000FF",
  Green: "#00FF00",
  Yellow: "#FFFF00",
  Orange: "#FFA500",
  Purple: "#800080",
}

const colorOptions = formatOptions(colorMap)

const fabricMap = {
  Cotton: cottonImage,
}

const fabricOptions = formatOptions(fabricMap)

const patternMap = {
  Solid: solidImage,
  "Tye Die": tyeDieImage,
}

const patternOptions = formatOptions(patternMap)

function formatOptions(optionMap) {
  return Object.keys(optionMap).map((option) => ({
    name: option,
    icon: optionMap[option],
  }))
}
