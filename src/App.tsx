import { BrowserRouter, Route, Routes } from "react-router-dom"
import { GlobalCss } from "./styles"
import Home from "./pages/Home"
import Profile from "./pages/Profile"


const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/profile" element={<Profile />} />
  </Routes>
)

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Rotas />
    </BrowserRouter>
  )
}

export default App