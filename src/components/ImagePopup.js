function ImagePopup({ card, onClose }) {
  const handleCloseByOverlay = (evt) => {
    evt.target === evt.currentTarget && onClose();
  };
  return (
    <div
      onClick={handleCloseByOverlay}
      className={`popup popup_dark-overlay popup-big-photo ${card.link ? "popup_visible" : ""}`}
    >
      {
        <figure className="popup__img-container">
          <button onClick={onClose} type="button" className="popup__close-button button" />
          <img src={card.link} alt={card.name} className="popup__img" />
          <figcaption className="popup__place-name-of-big-photo">{card.name}</figcaption>
        </figure>
      }
    </div>
  );
}

export default ImagePopup;
