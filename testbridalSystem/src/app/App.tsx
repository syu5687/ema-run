import { useState } from "react";
import BridalHome from "./components/BridalHome";
import BridalDetail from "./components/BridalDetail";
import BridalArchive from "./components/BridalArchive";
import ContactForm from "./components/ContactForm";
import ThankYouPage from "./components/ThankYouPage";
import BridalPopup from "./components/BridalPopup";

type PageView = "home" | "detail" | "archive" | "contact" | "thankyou";

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>("home");
  const [selectedFairId, setSelectedFairId] = useState<number | null>(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleViewDetail = (id: number) => {
    setSelectedFairId(id);
    setCurrentPage("detail");
  };

  const handleViewArchive = () => {
    setCurrentPage("archive");
  };

  const handleBackToHome = () => {
    setCurrentPage("home");
    setSelectedFairId(null);
  };

  const handleOpenContact = () => {
    setCurrentPage("contact");
  };

  const handleContactSubmit = () => {
    setCurrentPage("thankyou");
  };

  const handleOpenPopup = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="size-full">
      {currentPage === "home" && (
        <BridalHome 
          onViewDetail={handleViewDetail} 
          onViewArchive={handleViewArchive} 
        />
      )}
      {currentPage === "detail" && (
        <BridalDetail onBack={handleBackToHome} onOpenContact={handleOpenContact} />
      )}
      {currentPage === "archive" && (
        <BridalArchive 
          onViewDetail={handleViewDetail} 
          onBack={handleBackToHome} 
        />
      )}
      {currentPage === "contact" && (
        <ContactForm 
          onSubmit={handleContactSubmit}
          onBack={handleBackToHome}
        />
      )}
      {currentPage === "thankyou" && (
        <ThankYouPage onBack={handleBackToHome} />
      )}
      
      <BridalPopup isOpen={isPopupOpen} onClose={handleClosePopup} />
    </div>
  );
}