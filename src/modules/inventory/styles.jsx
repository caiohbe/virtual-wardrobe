import styled from "styled-components"

const InventoryContainer = styled.div`
  border: solid 2px red; //FIXME

  flex: 5;
  display: flex;
  flex-direction: column; //FIXME study why do I need those 2 flex lines for it to work properly
`

const ItemsGrid = styled.div`
  border: 2px solid purple; //FIXME

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10rem, 1fr));
  overflow-y: auto;
`

const GridItem = styled.div`
  border: solid 1px yellow; //FIXME

  /* aspect-ratio: 9/16; */
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
    width: ${(props) => (props.$width ? props.$width : "100%")};
    aspect-ratio: 9/16;
    object-fit: contain;

    border: solid 1px cyan; //FIXME
  }
`
export { InventoryContainer, ItemsGrid, GridItem }
