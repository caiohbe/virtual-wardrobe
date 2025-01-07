import { OptionsButton } from "../styles"
import renderIcon from "./renderIcon"

export default function renderVariants(
  variants,
  isSelected,
  selectedVariant,
  setSelectedVariant,
  formItem,
  setFormItem,
  label
) {
  if (!isSelected || !variants) return

  return variants.map((variant) => {
    const isVariantSelected = selectedVariant === variant
    function handleVariantClick() {
      if (isVariantSelected) {
        setSelectedVariant(null)
        setFormItem({
          ...formItem,
          [label]: { ...formItem[label], variant: null },
        })
      } else {
        setSelectedVariant(variant)
        setFormItem({ ...formItem, [label]: { ...formItem[label], variant } })
      }
    }
    return (
      <OptionsButton
        $selected={isVariantSelected}
        onClick={() => handleVariantClick()}
        type='button'
        key={variant}
      >
        {renderIcon(variant.icon)}
        <div>{variant}</div>
      </OptionsButton>
    )
  })
}
