import AlertButton from "../../assets/styles/alertButton"
import { StyledDialog } from "../header/styles"
import handleClickOutside from "../header/utils/handleClickOutside"

export default function AddClothModal({ modalRef, closeDialog }) {
  return (
    <StyledDialog
      ref={modalRef}
      onClick={(e) => handleClickOutside(e, modalRef)}
    >
      <AlertButton onClick={closeDialog}>X</AlertButton>
    </StyledDialog>
  )
}
