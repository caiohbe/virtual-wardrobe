import AlertButton from "../../assets/styles/alertButton"
import { useRef } from "react"
import StyledButton from "../../assets/styles/styledButton"
import { StyledForm } from "./styles"
import ToggleOption from "./toggleOption"
import image from "../../assets/images/cotton.jpg"

export default function ItemForm({ closeDialog }) {
  const nameRef = useRef()
  const imageRef = useRef()

  function submit(event) {
    event.preventDefault()

    console.log({
      image: imageRef.current.value,
      name: nameRef.current.value,
    })
  }

  function generateToggleableOptions(data) {
    return data.map((option) => {
      return <ToggleOption name={option.name} options={option.options} />
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

        <ToggleOption name='Color' options={["Red", "Blue", "Green"]} />

        <ToggleOption
          name='Colors'
          options={[
            { name: "Red", icon: "#FF0000" },
            { name: "Blue", icon: "#0000FF" },
            { name: "Green", icon: "#00FF00" },
            { name: "Yellow", icon: "#FFFF00" },
            { name: "Orange", icon: "#FFA500" },
            { name: "Purple", icon: "#800080" },
            { name: "Multi Color", icon: image },
          ]}
        />

        <button type='submit'>Submit</button>
      </StyledForm>
    </>
  )
}
