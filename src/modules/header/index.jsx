import styled from "styled-components"

export default function Header() {
  return (
    <HeaderContainer>
      <button>Hello World</button>
      <button>+</button>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2em;
  height: 7svh;
  flex-shrink: 0;
`
