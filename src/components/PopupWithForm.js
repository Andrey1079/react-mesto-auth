import React, { useEffect } from "react";
function PopupWithForm({ isOpen, onClose, name, title, text, children, onSubmit }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit();
  };
  const handleCloseByOverlay = (evt) => {
    evt.target === evt.currentTarget && onClose();
  };
  return (
    <div onClick={handleCloseByOverlay} className={`popup popup-${name} ${isOpen && "popup_visible"}`}>
      <div className="popup__card popup__card_size_L">
        <button onClick={onClose} type="button" className="popup__close-button button" />
        <h2 className="popup__title">{title}</h2>
        <form onSubmit={handleSubmit} name={`popup-info-${name}`} className={`popup__form popup__form_type_${name}`}>
          {children}

          <input value={text} type="submit" className="popup__submit-button button" />
        </form>
      </div>
    </div>
  );
}
export default PopupWithForm;
