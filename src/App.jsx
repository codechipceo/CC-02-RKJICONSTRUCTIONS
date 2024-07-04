import { ColorPalette } from "./components/ColorPalette.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Service } from "./pages/Service/Service.jsx";
import { About } from "./pages/About/About.jsx";
import { Contact } from "./pages/Contact/Contact.jsx";
import { Project } from "./pages/Project/Project.jsx";
import { ServiceDetail } from "./pages/Service/ServiceDetail.jsx";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/component' element={<ColorPalette />} />
          <Route path='/' element={<Home />} />
          <Route path='/service' element={<Service />} />
          <Route path='/service/:slug' element={<ServiceDetail />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact-us' element={<Contact />} />
          <Route path='/project' element={<Project />} />
          <Route path='/project/:slug' />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
