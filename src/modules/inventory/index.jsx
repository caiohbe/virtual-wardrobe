import Header from "../header"
import generateGrid from "../../utils/generateGrid"
import { InventoryContainer, ItemsGrid } from "./styles"

export default function Inventory() {
  return (
    <InventoryContainer>
      <Header />
      <ItemsGrid>{generateGrid()}</ItemsGrid>
    </InventoryContainer>
  )
}
