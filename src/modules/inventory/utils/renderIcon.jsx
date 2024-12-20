import { IconDiv, IconImg } from "../styles"

export default function renderIcon(icon) {
  if (!icon) return
  if (icon.startsWith("#")) return <IconDiv $color={icon} />
  return <IconImg src={icon} />
}
