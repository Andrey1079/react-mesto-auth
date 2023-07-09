export default function Popup({ isOpen, onClose, name, children }) {
  const handleCloseByOverlay = (evt) => {
    evt.target === evt.currentTarget && onClose();
  };

  return (
    <div onClick={handleCloseByOverlay} className={`popup popup-${name} ${isOpen && "popup_visible"}`}>
      {children}
    </div>
  );
}
