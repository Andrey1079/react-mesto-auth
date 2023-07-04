import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditProfilePopup({ isOpen, onClose, onUpdatedUserInfo,  handleCloseByOverlay }) {
  const currentUser = React.useContext(CurrentUserContext);
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [isOpen, currentUser]);
  const [name, setName] = React.useState("");
  const [description, setDescription] = React.useState("");
  const handleChange = (evt) => {
    evt.target.name === "name" ? setName(evt.target.value) : setDescription(evt.target.value);
  };
  const handleSubmit = (evt) => {
    onUpdatedUserInfo({
      name: name,
      about: description,
    });
  };

  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      name="edit-profile"
      title="Редактировать профиль"
      text="Сохранить"
      onSubmit={handleSubmit}
      handleCloseByOverlay={handleCloseByOverlay}
    >
      <input
        onChange={handleChange}
        className="popup__form-item popup__form-item_type_name"
        type="text"
        name="name"
        value={name || ""}
        placeholder="Имя"
        id="user-name-input"
        minLength="2"
        maxLength="40"
        required
      />
      <span className="popup__form-item-error user-name-input-error"></span>
      <input
        onChange={handleChange}
        className="popup__form-item popup__form-item_type_profession"
        type="text"
        name="profession"
        value={description || ""}
        placeholder="Профессия"
        minLength="2"
        maxLength="200"
        required
        id="user-profession"
      />
      <span className="popup__form-item-error user-profession-error"></span>
    </PopupWithForm>
  );
}
