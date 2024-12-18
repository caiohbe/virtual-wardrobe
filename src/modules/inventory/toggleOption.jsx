import { useState } from "react"
import { ToggleContainer, SelectorIndicator, OptionsContainer } from "./styles"
import formatSelected from "./utils/formatSelected"
import generateOptions from "./utils/generateOptions"

export default function ToggleOption({ ...props }) {
  const [display, setDisplay] = useState(false)
  const [selected, setSelected] = useState([])

  return (
    <ToggleContainer>
      <SelectorIndicator
        $display={display}
        type='button'
        onClick={() => setDisplay(!display)}
      >
        <p>{props.name}</p>
        <span>{formatSelected(selected, props.options)}</span>
      </SelectorIndicator>
      <OptionsContainer $display={display}>
        {generateOptions(props.options, selected, setSelected)}
      </OptionsContainer>
    </ToggleContainer>
  )
}
