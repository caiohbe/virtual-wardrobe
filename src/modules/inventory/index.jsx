import Header from "../header"
import generateGrid from "../../utils/generateGrid"
import { GridItem, InventoryContainer, ItemsGrid } from "./styles"
import { useRef } from "react"
import addIcon from "../../assets/images/addIcon.svg"
import AlertButton from "../../assets/styles/alertButton"
import AddClothModal from "./addClothModa"

export default function Inventory() {
  const modalRef = useRef()
  const openDialog = () => modalRef.current.showModal()
  const closeDialog = () => modalRef.current.close()

  return (
    <>
      <InventoryContainer>
        <Header />
        <ItemsGrid>
          <GridItem onClick={openDialog} $width='50%'>
            <img src={addIcon} alt='add' />
          </GridItem>
          {generateGrid()}
        </ItemsGrid>
      </InventoryContainer>
      <AddClothModal modalRef={modalRef} closeDialog={closeDialog}>
        <AlertButton onClick={closeDialog}>X</AlertButton>
      </AddClothModal>
    </>
  )
}
