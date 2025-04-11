import renderIcon from "./renderIcon"
import renderVariants from "./renderVariants"
import handleSelection from "../hooks/handleSelection"
import { OptionsButton } from "../styles"
import styled from "styled-components"

export default function generateOptions(
  optionsList,
  selected,
  setSelected,
  selectedVariant,
  setSelectedVariant,
  label,
  formItem,
  setFormItem
) {
  return optionsList.map((option) => {
    const isSelected = selected.includes(option.name ?? option)
    const hideElement =
      option.variants &&
      selected[0] !== option.name &&
      !isSelected &&
      selected[0]
    const handleOptionClick = () =>
      handleSelection(
        option,
        selected,
        setSelected,
        setSelectedVariant,
        label,
        formItem,
        setFormItem
      )
    const handleVariantRender = () =>
      renderVariants(
        option.variants,
        isSelected,
        selectedVariant,
        setSelectedVariant,
        formItem,
        setFormItem,
        label
      )

    return (
      <FlexDiv key={option.name ?? option}>
        <OptionsButton
          $hide={hideElement}
          $selected={isSelected}
          onClick={handleOptionClick}
          type='button'
        >
          {renderIcon(option.icon)}
          <div>{option.name ?? option}</div>
        </OptionsButton>
        {handleVariantRender()}
      </FlexDiv>
    )
  })
}

const FlexDiv = styled.div`
  display: flex;
`
