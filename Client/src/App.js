import { BrowserRouter, Route, Routes } from "react-router-dom";
import ClientLy from "./layouts/ClientLy";
import About from "./pages/About";
import Home from "./pages/Home";
import Ingredients from "./pages/Ingredients";
import Press from "./pages/Press";

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
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
