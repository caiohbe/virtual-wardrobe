import styled from "styled-components"

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2em;
  height: 7svh;
  flex-shrink: 0;
`
const StyledDialog = styled.dialog`
  @media (prefers-reduced-motion: no-preference) {
    transition: display 250ms allow-discrete, overlay 250ms allow-discrete;
    animation: close 250ms forwards;

    &[open] {
      animation: open 250ms forwards;
    }

    @keyframes open {
      from {
        opacity: 0;
        transform: translateY(-100%);
      }
      to {
        opacity: 1;
        transform: translateY(0%);
      }
    }

    @keyframes close {
      from {
        opacity: 1;
        transform: translateY(0);
      }
      to {
        opacity: 0;

        transform: translateX(100%);
      }
    }
  }

  border: none;
  border-radius: 2%;
  padding: 1rem;
  height: 90%;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  width: min(80vw, 800px);

  @media (width <= 450px) {
    width: 100%;
    border-radius: 0;
  }
`

export { HeaderContainer, StyledDialog }
