import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inventory from "./pages/inventory/"
import CSSreset from "./assets/styles/globalStyles"

function App() {
  return (
    <>
      <CSSreset />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inventory />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
