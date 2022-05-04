import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { NewCustomer } from "./pages/NewCustomer";
import { UpdateCustomer } from "./pages/UpdateCustomer";

export function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newCustomer" element={<NewCustomer />} />
          <Route path="/updateCustomer" element={<UpdateCustomer />} />
        </Routes>
    </BrowserRouter>
  );
}
