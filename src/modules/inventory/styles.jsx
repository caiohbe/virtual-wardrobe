import styled from "styled-components"

export const InventoryContainer = styled.div`
  flex: 5;
  border: solid 2px red;

  display: flex;
  flex-direction: column; //FIXME study why do I need those 2 flex lines for it to work properly
`

export const ItemsGrid = styled.div`
  border: 2px solid purple;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  overflow-y: scroll;
`

export const GridItem = styled.div`
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
    border: solid 1px cyan;
  }
`
