import styled from "styled-components"
import SideBar from "../../sideBar"

function Inventory() {
  return (
    <FlexContainer>
      <SideBar />
      <Middle>
        <Header>Header</Header>
        <Items>
          <GridItem>
            <img
              alt='cloth'
              src='https://d1nxdo97xnvmpc.cloudfront.net/Custom/Content/Products/77/51/775155_calca-feminina-reta-enfim-1000117365-1913378_m28_638557148231699589.webp'
            />
          </GridItem>
          <GridItem>
            <img
              alt='cloth'
              src='https://d1nxdo97xnvmpc.cloudfront.net/Custom/Content/Products/77/51/775155_calca-feminina-reta-enfim-1000117365-1913378_m28_638557148231699589.webp'
            />
          </GridItem>
          <GridItem>
            <img
              alt='cloth'
              src='https://d1nxdo97xnvmpc.cloudfront.net/Custom/Content/Products/77/51/775155_calca-feminina-reta-enfim-1000117365-1913378_m28_638557148231699589.webp'
            />
          </GridItem>
          <GridItem>
            <img
              alt='cloth'
              src='https://d1nxdo97xnvmpc.cloudfront.net/Custom/Content/Products/77/51/775155_calca-feminina-reta-enfim-1000117365-1913378_m28_638557148231699589.webp'
            />
          </GridItem>
          <GridItem>
            <img
              alt='cloth'
              src='https://d1nxdo97xnvmpc.cloudfront.net/Custom/Content/Products/77/51/775155_calca-feminina-reta-enfim-1000117365-1913378_m28_638557148231699589.webp'
            />
          </GridItem>
          <GridItem>Item</GridItem>
          <GridItem>Item</GridItem>
          <GridItem>Item</GridItem>
          <GridItem>Item</GridItem>
          <GridItem>Item</GridItem>
          <GridItem>Item</GridItem>
          <GridItem>Item</GridItem>
          <GridItem>Item</GridItem>
          <GridItem>Item</GridItem>
        </Items>
      </Middle>
      <Lime>Outfit creator</Lime>
    </FlexContainer>
  )
}

export default Inventory

const Middle = styled.div`
  flex: 5;
  border: solid 2px red;
`

const Header = styled.div``

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  overflow-y: scroll;
`
const GridItem = styled.div`
  aspect-ratio: 9px/16px;
  border: solid 1px yellow;

  img {
    width: 100%;
  }
  /* display: flex;
  justify-content: center;
  align-items: center; */
`

const FlexContainer = styled.div`
  height: 100svh;
  display: flex;
`
const Lime = styled.div`
  flex: 3;
  border: solid 2px lime;
`
