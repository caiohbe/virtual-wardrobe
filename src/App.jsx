import { BrowserRouter, Route, Routes } from "react-router-dom"
import CSSreset from "./assets/styles/globalStyles"
import Main from "./modules/main"

function App() {
  return (
    <>
      <CSSreset />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
