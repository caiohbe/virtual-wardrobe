export default function handleSelection(
  option,
  selected,
  setSelected,
  setSelectedVariant
) {
  const name = option.name ?? option
  if (selected.includes(name) && option.variants) {
    setSelectedVariant(null)
    setSelected(null)
  }
  if (selected.includes(name)) {
    setSelected(selected.filter((item) => item !== name))
  } else if (option.variants) {
    setSelected([name])
    setSelectedVariant(null)
  } else {
    setSelected([...selected, name])
  }
}
