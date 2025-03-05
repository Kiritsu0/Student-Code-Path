import { Route, Routes, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import CareerDomains from "./pages/CareerDomains";
import Languages from "./pages/Languages";
import Roadmaps from "./pages/Roadmaps";
import Resources from "./pages/Resources";
import Layout from "./layout";

function App() {
  return (
    <HashRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/career-domains" element={<CareerDomains />} />
        <Route path="/languages" element={<Languages />} />
        <Route path="/roadmaps" element={<Roadmaps />} />
        <Route path="/resources" element={<Resources />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
