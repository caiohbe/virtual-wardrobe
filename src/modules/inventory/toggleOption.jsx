import { useState } from "react"
import { ToggleContainer, SelectorIndicator, OptionsContainer } from "./styles"
import formatSelected from "./utils/formatSelected"
import generateOptions from "./utils/generateOptions"

export default function ToggleOption({ ...props }) {
  const [display, setDisplay] = useState(false)
  const [selected, setSelected] = useState([])
  const [selectedVariant, setSelectedVariant] = useState(null)

  return (
    <ToggleContainer>
      <SelectorIndicator
        $display={display}
        type='button'
        onClick={() => setDisplay(!display)}
      >
        <p>{props.name}</p>
        <span>{formatSelected(selected, props.options, selectedVariant)}</span>
      </SelectorIndicator>
      <OptionsContainer $display={display}>
        {generateOptions(
          props.options,
          selected,
          setSelected,
          selectedVariant,
          setSelectedVariant
        )}
      </OptionsContainer>
    </ToggleContainer>
  )
}
