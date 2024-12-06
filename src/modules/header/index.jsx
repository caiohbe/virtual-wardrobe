import styled from "styled-components"
import { useRef, useState } from "react"
import handleClickOutside from "./utils/handleClickOutside"

export default function Header() {
  const modalRef = useRef()
  const openDialog = () => modalRef.current.showModal()
  const closeDialog = () => modalRef.current.close()

  return (
    <HeaderContainer>
      <button>Hello World</button>
      <button onClick={openDialog}>+</button>
      <AddClothModal
        onClick={(e) => handleClickOutside(e, modalRef)}
        ref={modalRef}
      >
        <button onClick={closeDialog}>Cancel</button>
      </AddClothModal>
    </HeaderContainer>
  )
}

const AddClothModal = styled.dialog`
  @media (prefers-reduced-motion: no-preference) {
    transition: display 250ms allow-discrete, overlay 250ms allow-discrete;
    animation: close 250ms forwards;

    &[open] {
      animation: open 250ms forwards;
    }

    @keyframes open {
      from {
        opacity: 0;
        transform: translateY(-30%);
      }
      to {
        opacity: 1;
        transform: translateY(0%);
      }
    }

    @keyframes close {
      from {
        opacity: 1;
      }
      to {
        opacity: 0;
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

  button {
    transition: 200ms ease-in-out;
    &:hover {
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2),
        0 6px 20px 0 rgba(0, 0, 0, 0.19);
      background-color: #b70821;
      cursor: pointer;
    }
    position: absolute;
    /* bottom: 3%;
    left: 5%; */
    font-size: 1rem;
    color: white;
    padding: 0.1rem 1rem;
    border: none;
    background-color: black;
    border-radius: 12rem;
    line-height: 1.5em;
  }

  /* img {
    height: 40%;
    border: 2px solid lime;
    border-radius: 5%;
    padding: 8px;
  } */
`

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2em;
  height: 7svh;
  flex-shrink: 0;
`
