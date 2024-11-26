import styled from "styled-components"
import SideBar from "../../sideBar"

function Inventory() {
  return (
    <FlexContainer>
      <SideBar />
      <Red>Inventory</Red>
      <Lime>Stats</Lime>
    </FlexContainer>
  )
}

export default Inventory

const Red = styled.div`
  flex: 5;
  border: solid 2px red;
`
const FlexContainer = styled.div`
  height: 100svh;
  display: flex;
`
const Lime = styled.div`
  flex: 3;
  border: solid 2px lime;
`
