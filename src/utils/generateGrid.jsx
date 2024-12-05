import { GridItem } from "../modules/inventory/styles"

export default function generateGrid() {
  const grid = []
  for (let i = 0; i < 11; i++) {
    grid.push(
      <GridItem key={i}>
        <img
          src='https://kaltgear.com/cdn/shop/products/EMT_Black_Detail_1.png?v=1658173417&width=1082'
          alt='cloth'
        />
      </GridItem>,
      <GridItem key={-i - 1}>
        <img
          src='https://www.jardelatacadao.com.br/lojas/00050181/prod/dryfitpreta1.png'
          alt='cloth'
        />
      </GridItem>
    )
  }
  return grid
}
