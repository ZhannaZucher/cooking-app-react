import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Recipe from "./pages/Recipe"
import Header from "./components/Header"

const App = () => {
  return (
    <BrowserRouter basename="cooking-app-react">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<Recipe />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
