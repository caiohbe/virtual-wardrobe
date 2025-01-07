import AlertButton from "../../assets/styles/alertButton"
import { useRef, useState } from "react"
import StyledButton from "../../assets/styles/styledButton"
import { StyledForm } from "./styles"
import generateToggleableOptions from "./utils/generateToggleableOptions"
import toggleData from "./constants/toggleableOptions"

import { useContext } from "react"
import CreateItemContext from "./contexts/createItemContext"

export default function ItemForm({ closeDialog }) {
  const nameRef = useRef()
  const imageRef = useRef()

  const { formItemProps } = useContext(CreateItemContext)

  function submit(event) {
    event.preventDefault()

    console.log({
      image: imageRef.current.value,
      name: nameRef.current.value,
    })
  }

  return (
    <>
      <StyledForm onSubmit={submit}>
        <AlertButton onClick={closeDialog} type='reset'>
          X
        </AlertButton>
        <StyledButton onClick={closeDialog} type='button'>
          -
        </StyledButton>
        <button type='button' onClick={() => console.log(formItemProps)}>
          CURRENT ITEM STATS: {/*FIXME temp*/}
        </button>
        <label htmlFor='imageInput'>Image URL: </label>
        <input ref={imageRef} id='imageInput' type='text' />
        <label htmlFor='nameInput'>Name: </label>
        <input ref={nameRef} id='nameInput' type='text' />
        {generateToggleableOptions(toggleData)}
        <button type='submit'>Submit</button>
      </StyledForm>
    </>
  )
}
