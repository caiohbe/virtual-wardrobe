import styled from "styled-components"
import handleSelection from "../hooks/handleSelection"
import { OptionsButton } from "../styles"

export default function generateOptions(options, selected, setSelected) {
  const optionsJsx = options.map((option, index) => {
    if (option.icon) {
      console.log(option.icon)
    }
    return (
      <OptionsButton
        $selected={selected.includes(option.name ?? option)}
        onClick={() =>
          handleSelection(option.name ?? option, selected, setSelected)
        }
        type='button'
        key={index}
      >
        {renderIcon(option.icon)}
        <div>{option.name ?? option}</div>
      </OptionsButton>
    )
  })

  return optionsJsx
}

function renderIcon(icon) {
  if (!icon) return
  if (icon.startsWith("#")) {
    return <IconDiv $color={icon}></IconDiv>
  }
  return <StyledDiv $src={icon} />
}

const IconDiv = styled.span`
  height: 60%;
  aspect-ratio: 1/1;
  background-color: ${(props) => props.$color};
  border-radius: 0.2rem;
  margin-right: 0.2rem;
`
const StyledDiv = styled.img`
  background-image: url(${(props) => props.$src});
  object-fit: cover;
  height: 60%;
  aspect-ratio: 1/1;
  background-color: ${(props) => props.$color};
  border-radius: 0.2rem;
  margin-right: 0.2rem;
`
