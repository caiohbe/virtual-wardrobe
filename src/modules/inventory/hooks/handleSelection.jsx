export default function handleSelection(option, selected, setSelected) {
  if (selected.includes(option)) {
    setSelected(selected.filter((item) => item !== option))
  } else {
    setSelected([...selected, option])
  }
}
