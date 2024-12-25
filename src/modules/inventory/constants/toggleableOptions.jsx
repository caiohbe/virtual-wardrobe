import cottonImage from "../../../assets/images/cotton.jpg"
import solidImage from "../../../assets/images/solidColor.jpg"
import tieDyeImage from "../../../assets/images/tieDye.jpg"

const categoryMap = {
  Tops: ["Shirt", "T-Shirt", "Sweater", "Jacket", "Coat"],
  Bottoms: ["Pants", "Jeans", "Skirt", "Shorts"],
}
const categoryOptions = formatCategories(categoryMap)

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
  "Tie Dye": tieDyeImage,
}
const patternOptions = formatOptions(patternMap)

const toggleData = [
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
  {
    label: "Category",
    options: categoryOptions,
  },
]

export default toggleData

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
