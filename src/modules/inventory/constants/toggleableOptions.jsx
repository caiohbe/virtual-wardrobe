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
  { name: "Red", icon: "#FF0000" },
  { name: "Blue", icon: "#0000FF" },
  { name: "Green", icon: "#00FF00" },
  { name: "Yellow", icon: "#FFFF00" },
  { name: "Orange", icon: "#FFA500" },
  { name: "Purple", icon: "#800080" },
  { name: "Multi Color", icon: image },
]
;[
  {
    category: "Tops",
    options: ["Shirt", "T-Shirt", "Sweater", "Jacket", "Coat"],
  },
  {
    category: "Bottoms",
    options: ["Pants", "Jeans", "Skirt", "Shorts"],
  },
  {
    Season: ["Spring", "Summer", "Fall", "Winter"],
  },
]

const categoryMap = {
  Tops: ["Shirt", "T-Shirt", "Sweater", "Jacket", "Coat"],
  Bottoms: ["Pants", "Jeans", "Skirt", "Shorts"],
}

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

function formatCategories(categoryMap) {
  return Object.keys(categoryMap).map((category) => ({
    name: category,
    variants: categoryMap[category],
  }))
}
