import Header from "../header"
import Grid from "../../utils/generateGrid"
import { GridItem, InventoryContainer, ItemsGrid } from "./styles"
import { useRef, useContext, useState, useEffect } from "react"
import addIcon from "../../assets/images/addIcon.svg"
import AlertButton from "../../assets/styles/alertButton"
import AddClothModal from "./addClothModal"
import CreateItemContext from "./contexts/createItemContext"

export default function Inventory() {
  const modalRef = useRef()
  const openDialog = () => modalRef.current.showModal()
  const closeDialog = () => modalRef.current.close()
  const { formItemProps, setFormItemProps } = useContext(CreateItemContext)
  const [items, setItems] = useState([])

  return (
    <>
      <InventoryContainer>
        <Header />
        <ItemsGrid>
          <GridItem onClick={openDialog} $width='50%'>
            <img src={addIcon} alt='add' />
          </GridItem>

          <Grid items={items} />
          {/* {generateGrid(items)} */}
        </ItemsGrid>
      </InventoryContainer>
      <AddClothModal
        modalRef={modalRef}
        closeDialog={closeDialog}
        items={items}
        setItems={setItems}
      >
        <AlertButton onClick={closeDialog}>X</AlertButton>
      </AddClothModal>
    </>
  )
}
