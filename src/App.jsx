import { BrowserRouter, Route, Routes } from "react-router-dom"
import CSSreset from "./assets/styles/globalStyles"
import Main from "./modules/main"
import CreateItemContext from "./modules/inventory/contexts/createItemContext"
import { useState } from "react"

function App() {
  const [formItemProps, setFormItemProps] = useState({})

  return (
    <>
      <CSSreset />
      <CreateItemContext.Provider value={{ formItemProps, setFormItemProps }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Main />} />
          </Routes>
        </BrowserRouter>
      </CreateItemContext.Provider>
    </>
  )
}

export default App
