import { BrowserRouter, Routes, Route } from "react-router-dom";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import BestSelling from "./components/BestSelling";
import Category from "./components/Catergory";
import MenuCategory from "./pages/categories/MenuCategory";
import BedRoom from "./pages/categories/BedRoom";
import LivingRoom from "./pages/categories/LivingRoom";
import OfficeRoom from "./pages/categories/OfficeRoom";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Content />
                <BestSelling />
                <Category />
                <Footer />
              </>
            }
          />
          <Route path="/menucategory" element={<MenuCategory />} />
          <Route path="/livingroom" element={<LivingRoom />} />
          <Route path="/bedroom" element={<BedRoom />} />
          <Route path="/office" element={<OfficeRoom />} />
          <Route path="/kitchen" element={<LivingRoom />} />
          <Route path="/shelves" element={<LivingRoom />} />
          <Route path="/benches" element={<LivingRoom />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
