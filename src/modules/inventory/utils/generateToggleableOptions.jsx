import ToggleOption from "../toggleOption"

export default function generateToggleableOptions(toggleableOptions) {
  return toggleableOptions.map(({ label, options }) => (
    <ToggleOption key={label} name={label} options={options} />
  ))
}
