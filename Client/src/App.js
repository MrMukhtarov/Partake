import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientLy from "./layouts/ClientLy";
import About from "./pages/About";
import Home from "./pages/Home";
import Ingredients from "./pages/Ingredients";
import Press from "./pages/Press";
import ProdSubCategory from "./pages/ProdSubCategory/ProdSubCategory";
import Products from "./pages/Products";
import Terms from "./pages/Terms/Terms";
import ProdDetails from "./pages/ProdDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClientLy />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/press" element={<Press />} />
            <Route path="/ingredients" element={<Ingredients />} />
            <Route path="/products" element={<Products />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/products/:id" element={<ProdSubCategory />} />
            <Route path="/prod_detail/:id" element={<ProdDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
