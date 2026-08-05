import { Routes, Route } from "react-router-dom";
import Hompage from "./hompage";
import Pricing from "./pricing";
import About from "./about";
import Contact from "./contact";
import GetStarted from "./getStarted";
import AIChatbot from "./aiChatbot";
import SoftwareDevelopment from "./softwareDevelopment";
import DataAnnotation from "./dataAnnotation";
import Admin from "./admin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hompage />} />

      <Route path="/pricing" element={<Pricing />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/getStarted" element={<GetStarted />} />

      {/* SERVICES */}
      <Route path="/service/aiChatbot" element={<AIChatbot />} />
      <Route
        path="/service/softwareDevelopment"
        element={<SoftwareDevelopment />}
      />
      <Route path="/service/dataAnnotation" element={<DataAnnotation />} />

      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;
