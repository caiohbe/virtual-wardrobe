import styled from "styled-components"

export const StyledButton = styled.button`
  transition: 200ms ease-in-out;
  &:hover {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    cursor: pointer;
  }
  font-size: 1rem;
  color: white;
  padding: 0.1rem 1rem;
  border: none;
  background-color: black;
  border-radius: 12rem;
  line-height: 1.5em;
  user-select: none;
`
export default StyledButton
