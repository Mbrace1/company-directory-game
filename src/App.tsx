import { BrowserRouter, Routes, Route } from "react-router-dom";
import People from "./pages/People";
import Layout from "./pages/Layout";
import Locations from "./pages/Locations";
import Departments from "./pages/Departments";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="people" element={<People />} />
          <Route path="locations" element={<Locations />} />
          <Route path="departments" element={<Departments />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;