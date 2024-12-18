import AlertButton from "../../assets/styles/alertButton"
import { useRef } from "react"
import StyledButton from "../../assets/styles/styledButton"
import { StyledForm } from "./styles"
import ToggleOption from "./toggleOption"
import colors from "./constants/colors"

export default function ItemForm({ closeDialog }) {
  const nameRef = useRef()
  const imageRef = useRef()
  const seasonRef = useRef()

  function submit(event) {
    event.preventDefault()

    console.log({
      image: imageRef.current.value,

      name: nameRef.current.value,
      season: seasonRef.current.value,
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
        <label htmlFor='imageInput'>Image URL: </label>
        <input ref={imageRef} id='imageInput' type='text' />

        <label htmlFor='nameInput'>Name: </label>
        <input ref={nameRef} id='nameInput' type='text' />

        <ToggleOption
          name='Season'
          options={["Spring", "Summer", "Fall", "Winter"]}
        />

        <ToggleOption name='Color' options={colors} />

        <button type='submit'>Submit</button>
      </StyledForm>
    </>
  )
}
