import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Layout from "./components/Layout";
import { ModalProvider } from "./components/ModalContext";
import DemoModal from "./components/DemoModal";
import { useModal } from "./components/ModalContext";

function App() {
  return (
    <ModalProvider>
      <AppContent />
    </ModalProvider>
  );
}

function AppContent() {
  const { isModalOpen, closeModal, videoUrl } = useModal();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <DemoModal
        isOpen={isModalOpen}
        onClose={closeModal}
        videoUrl={videoUrl}
      />
    </Router>
  );
}

export default App;
