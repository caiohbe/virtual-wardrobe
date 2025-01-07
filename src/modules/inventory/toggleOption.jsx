import { useState, useContext } from "react"
import { ToggleContainer, SelectorIndicator, OptionsContainer } from "./styles"
import formatSelected from "./utils/formatSelected"
import generateOptions from "./utils/generateOptions"
import CreateItemContext from "./contexts/createItemContext"

export default function ToggleOption({ ...props }) {
  const [display, setDisplay] = useState(false)
  const [selected, setSelected] = useState([])
  const [selectedVariant, setSelectedVariant] = useState(undefined)
  const { formItemProps, setFormItemProps } = useContext(CreateItemContext)

  return (
    <ToggleContainer>
      <SelectorIndicator
        $display={display}
        type='button'
        onClick={() => setDisplay(!display)}
      >
        <p>{props.label}</p>
        <span>{formatSelected(selected, props.options, selectedVariant)}</span>
      </SelectorIndicator>
      <OptionsContainer $display={display}>
        {generateOptions(
          props.options,
          selected,
          setSelected,
          selectedVariant,
          setSelectedVariant,
          props.label,
          formItemProps,
          setFormItemProps
        )}
      </OptionsContainer>
    </ToggleContainer>
  )
}
