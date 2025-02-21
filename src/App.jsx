import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import CareerDomains from "./pages/CareerDomains";
import Languages from "./pages/Languages";
import Roadmaps from "./pages/Roadmaps";
import Layout from "./layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/career-domains" element={<CareerDomains />} />
        <Route path="/languages" element={<Languages />} />
        <Route path="/roadmaps" element={<Roadmaps />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
