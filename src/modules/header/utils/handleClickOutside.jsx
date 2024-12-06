export default function handleClickOutside(event, ref) {
  const modalDimensions = ref.current.getBoundingClientRect()
  const clickX = event.clientX
  const clickY = event.clientY
  if (
    clickX < modalDimensions.left ||
    clickX > modalDimensions.right ||
    clickY < modalDimensions.top ||
    clickY > modalDimensions.bottom
  ) {
    ref.current.close()
  }
}
