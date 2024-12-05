import styled from "styled-components"
import Stats from "../stats"
import Outfits from "../outfits"
import Inventory from "../inventory"

export default function Main() {
  return (
    <FlexContainer>
      <Stats />
      <Inventory />
      <Outfits />
    </FlexContainer>
  )
}

const FlexContainer = styled.div`
  height: 100svh;
  display: flex;
`
