import renderIcon from "./renderIcon"
import handleSelection from "../hooks/handleSelection"
import { OptionsButton } from "../styles"

export default function generateOptions(
  optionsList,
  selected,
  setSelected,
  selectedVariant,
  setSelectedVariant
) {
  return optionsList.map((option, index) => {
    const isSelected = selected.includes(option.name ?? option)
    const hideElement =
      option.variants &&
      selected[0] !== option.name &&
      !isSelected &&
      selected[0]
    const handleOptionClick = () =>
      handleSelection(option, selected, setSelected, setSelectedVariant)

    return (
      <>
        <OptionsButton
          $hide={hideElement}
          $selected={isSelected}
          onClick={handleOptionClick}
          type='button'
          key={index}
        >
          {renderIcon(option.icon)}
          <div>{option.name ?? option}</div>
        </OptionsButton>

        {renderVariants(
          option.variants,
          isSelected,
          selectedVariant,
          setSelectedVariant
        )}
      </>
    )
  })
}

function renderVariants(
  variants,
  isSelected,
  selectedVariant,
  setSelectedVariant
) {
  if (!isSelected || !variants) return

  return variants.map((variant, index) => {
    const isVariantSelected = selectedVariant === variant
    function handleVariantClick() {
      if (isVariantSelected) setSelectedVariant(null)
      else setSelectedVariant(variant)
    }
    return (
      <OptionsButton
        $selected={isVariantSelected}
        onClick={() => handleVariantClick()}
        type='button'
        key={index}
      >
        {renderIcon(variant.icon)}
        <div>{variant}</div>
      </OptionsButton>
    )
  })
}
