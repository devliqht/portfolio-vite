import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import AboutPage from "./pages/AboutPage";
import DownloadPage from "./pages/DownloadPage";
import ComputerScience from "./pages/portfolios/ComputerScience";
import InformationSystems from "./pages/portfolios/InformationSystems";
import NumberSystems from "./pages/portfolios/NumberSystems";
import ComputerHardware from "./pages/portfolios/ComputerHardware";
import Motherboards from "./pages/portfolios/Motherboards";
import Computers from "./pages/portfolios/Computers";

export default function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/download" element={<DownloadPage />} />
        <Route path="/portfolio/1" element={<ComputerScience />} />
        <Route path="/portfolio/2" element={<InformationSystems />} />
        <Route path="/portfolio/3" element={<NumberSystems />} />
        <Route path="/portfolio/4" element={<ComputerHardware />} />
        <Route path="/portfolio/5" element={<Motherboards />} />
        <Route path="/portfolio/6" element={<Computers />} />
      </Routes>
    </Router>
  );
}
