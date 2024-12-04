import styled from "styled-components"
import Stats from "../stats/stats"

function generateGrid() {
  const grid = []
  for (let i = 0; i < 11; i++) {
    grid.push(
      <GridItem>
        <img
          src='https://kaltgear.com/cdn/shop/products/EMT_Black_Detail_1.png?v=1658173417&width=1082'
          alt='cloth'
        />
      </GridItem>,
      <GridItem>
        <img
          src='https://www.jardelatacadao.com.br/lojas/00050181/prod/dryfitpreta1.png'
          alt='cloth'
        />
      </GridItem>
    )
  }
  return grid
}

function Inventory() {
  return (
    <FlexContainer>
      <Stats />
      <Middle>
        <Header>Header</Header>
        <ItemsGrid>{generateGrid()}</ItemsGrid>
      </Middle>
      <Lime>Outfit creator</Lime>
    </FlexContainer>
  )
}

export default Inventory

const Middle = styled.div`
  flex: 5;
  border: solid 2px red;

  display: flex;
  flex-direction: column; //FIXME study why do I need those 2 flex lines for it to work properly
`

const Header = styled.div`
  height: 7svh;
`

const ItemsGrid = styled.div`
  border: 2px solid purple;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(12rem, 1fr));
  overflow-y: scroll;
`

const GridItem = styled.div`
  aspect-ratio: 9/16;
  border: solid 1px yellow;
  padding: 5%;

  display: flex;
  justify-content: center;
  align-items: center;

  transition: 300ms ease-in-out;

  &:hover {
    cursor: pointer;
    filter: brightness(115%); //FIXME make this a variable to change with themes
  }

  img {
    width: 100%;
    /* border: solid 1px cyan; */
  }
`

const FlexContainer = styled.div`
  height: 100svh;
  display: flex;
`
const Lime = styled.div`
  flex: 3;
  border: solid 2px lime;
`
