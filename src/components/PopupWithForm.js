import React from "react";
import Form from "./Form";
function PopupWithForm({ isOpen, onClose, name, title, text, children, onSubmit }) {
  const handleSubmit = () => {
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
        <Form onSubmit={handleSubmit} text={text} className={`popup__form popup__form_type_${name}`}>
          {children}
        </Form>
      </div>
    </div>
  );
}
export default PopupWithForm;
