import styled from "styled-components"
import StyledButton from "../../assets/styles/styledButton"

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
    aspect-ratio: 2/3;
    object-fit: contain;

    border: solid 1px cyan; //FIXME
  }
`

const OptionsButton = styled(StyledButton)`
  background-color: ${(props) => (props.$selected ? "black" : "white")};
  color: ${(props) => (props.$selected ? "white" : "black")};
  border: 1px solid black; //FIXME
  height: auto;
  margin: 0.1rem 0.2rem;

  display: flex;
  align-items: center;
  justify-content: center;
`

const OptionsContainer = styled.div`
  display: ${(props) => (props.$display ? "flex" : "none")};
`

const ToggleContainer = styled.div`
  width: 80%;
  margin: 0.6rem 0;

  @media (width <= 450px) {
    width: 100%;
  }
`

const SelectorIndicator = styled.div`
  border: solid 2px orange; //FIXME

  background-color: ${(props) => (props.$display ? "black" : "white")};
  color: ${(props) => (props.$display ? "white" : "black")};

  user-select: none;
  transition: 200ms ease-in-out;

  white-space: nowrap;
  span {
    text-overflow: ellipsis;
    overflow: hidden;
    margin: 0 0.7rem;
    line-height: 2rem;
  }

  p {
    margin: 0 0.7rem;
  }

  &:hover {
    cursor: pointer;
    filter: brightness(95%);
  }

  padding: 0.2rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 2rem;
`

const StyledForm = styled.form`
  > button:nth-child(1) {
    position: absolute;
    top: 1rem;
    right: 1rem;
  }

  > button:nth-child(2) {
    position: absolute;
    top: 1rem;
    right: 4.5rem;
  }

  input {
    margin: 0.5rem 0;
  }

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
`

export {
  InventoryContainer,
  ItemsGrid,
  GridItem,
  OptionsButton,
  OptionsContainer,
  ToggleContainer,
  SelectorIndicator,
  StyledForm,
}
