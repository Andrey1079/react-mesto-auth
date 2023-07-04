import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({ isOpen, onClose, onAddedPlace, handleCloseByOverlay }) {
  React.useEffect(() => {
    setCaption("");
    setUrl("");
  }, [isOpen]);
  const [caption, setCaption] = React.useState(" ");
  const [url, setUrl] = React.useState(" ");
  const onChange = (evt) => {
    evt.target.name === "name" ? setCaption(evt.target.value) : setUrl(evt.target.value);
  };
  const handleAddPlace = (evt) => {
    onAddedPlace({ name: caption, link: url });
  };

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name="add-photo"
      title="Новое место"
      text="Создать"
      onSubmit={handleAddPlace}
      handleCloseByOverlay={handleCloseByOverlay}
    >
      <input
        onChange={onChange}
        value={caption || ""}
        className="popup__form-item popup__form-item_type_place"
        type="text"
        name="name"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        id="place-name"
        required
      />
      <span className="popup__form-item-error place-name-error"></span>
      <input
        onChange={onChange}
        value={url || ""}
        className="popup__form-item popup__form-item_type_img-link"
        type="url"
        name="link"
        placeholder="cсылка на картинку"
        id="img-link"
        required
      />
      <span className="popup__form-item-error img-link-error"></span>
    </PopupWithForm>
  );
}
