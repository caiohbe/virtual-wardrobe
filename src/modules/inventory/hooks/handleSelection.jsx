export default function handleSelection(
  option,
  selected,
  setSelected,
  setSelectedVariant,
  label,
  formItem,
  setFormItem
) {
  const name = option.name ?? option
  if (selected.includes(name) && option.variants) {
    setSelectedVariant(null)
    setSelected(null)
  }
  if (selected.includes(name)) {
    setSelected(selected.filter((item) => item !== name))

    if (selected.length === 1) {
      setFormItem((prevFormItem) => {
        const { [label]: _, ...updatedFormItem } = prevFormItem
        return updatedFormItem
      })
    } else {
      setFormItem({
        ...formItem,
        [label]: selected.filter((item) => item !== name),
      })
    }
  } else if (option.variants) {
    setSelected([name])
    setSelectedVariant(null)
    setFormItem({ ...formItem, [label]: { name, variant: null } })
  } else {
    setSelected([...selected, name])
    setFormItem({ ...formItem, [label]: [...selected, name] })
  }
}
