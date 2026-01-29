//import delle rotte da reat-router-dom
import { BrowserRouter, Route, Routes } from "react-router-dom"

//import delle pages da inserire nelle rotte
import HomePage from "./pages/HomePage"
import AboutUs from "./pages/AboutUs"
import Products from "./pages/Products"
import ProductDetail from "./component/ProductDetail"

//import del DefaultLayout
import DefaultLayout from "./component/layots/DefaultLayout"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />} >
            <Route path="/" element={<HomePage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/products">
              <Route index element={<Products />} />
              <Route path=":id" element={<ProductDetail />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
