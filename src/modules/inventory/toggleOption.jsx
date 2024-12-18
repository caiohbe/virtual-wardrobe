import { useState } from "react"
import {
  ToggleContainer,
  SelectorIndicator,
  OptionsContainer,
  OptionsButton,
} from "./styles"
import handleSelection from "./utils/handleSelection"
import formatSelected from "./utils/formatSelected"

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
        {props.options.map((option, index) => {
          return (
            <OptionsButton
              $selected={selected.includes(option)}
              onClick={() => handleSelection(option, selected, setSelected)}
              type='button'
              key={index}
            >
              {option}
            </OptionsButton>
          )
        })}
      </OptionsContainer>
    </ToggleContainer>
  )
}
