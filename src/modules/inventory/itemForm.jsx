import AlertButton from "../../assets/styles/alertButton"
import { useRef, useState } from "react"
import styled from "styled-components"
import StyledButton from "../../assets/styles/styledButton"

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

        <label htmlFor='seasonInput'>Season: </label>
        <input ref={seasonRef} id='seasonInput' type='text' />
        <ToggleOption
          options={["Spring", "Summer", "Fall", "Winter"]}
          name='Season'
        />

        <button type='submit'>Submit</button>
      </StyledForm>
    </>
  )
}

function ToggleOption({ ...props }) {
  const [display, setDisplay] = useState(false)
  const [selected, setSelected] = useState([])

  function handleSelection(option) {
    if (selected.includes(option)) {
      setSelected(selected.filter((item) => item !== option))
    } else {
      setSelected([...selected, option])
    }
  }

  return (
    <ToggleContainer>
      <SelectorIndicator type='button' onClick={() => setDisplay(!display)}>
        <span>{props.name}</span>
        <span>{selected}</span>
      </SelectorIndicator>
      <Options $display={display}>
        {props.options.map((option, index) => {
          return (
            <OptionsButton
              $selected={selected.includes(option)}
              onClick={() => handleSelection(option)}
              type='button'
              key={index}
            >
              {option}
            </OptionsButton>
          )
        })}
      </Options>
    </ToggleContainer>
  )
}

const OptionsButton = styled(StyledButton)`
  background-color: ${(props) => (props.$selected ? "black" : "white")};
  color: ${(props) => (props.$selected ? "white" : "black")};
  border: solid 1px black;
`

const Options = styled.div`
  border: 2 px solid green;
  display: ${(props) => (props.$display ? "block" : "none")};
`

const ToggleContainer = styled.div`
  width: 80%;
`

const SelectorIndicator = styled.div`
  border: solid 2px orange;
  span {
    border: solid 2px red;
  }

  &:hover {
    cursor: pointer;
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
