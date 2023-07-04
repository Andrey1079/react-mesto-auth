import React from "react";
import PopupWithForm from "./PopupWithForm";
import Input from "./Input";
export default function EditAvatarPopup({ isOpen, onClose, onUpdatedAvatar, handleCloseByOverlay }) {
  React.useEffect(() => {
    inputAvatar.current.value = "";
  }, [isOpen]);
  const inputAvatar = React.useRef();

  const handleSubmit = (evt) => {
    onUpdatedAvatar(inputAvatar.current.value);
  };
  return (
    <PopupWithForm
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      name="edit-avatar"
      title="Обновить аватар"
      text="Сохранить"
      handleCloseByOverlay={handleCloseByOverlay}
    >
      <Input
        inputRef={inputAvatar}
        className="popup__form-item popup__form-item_type_avtar-link"
        // validationLength={{ min: 2, max: 4 }}
        type="url"
        name="url"
        placeholder="cсылка на аватар"
        id="avatar-link"
      />
      {/* <input
        ref={inputAvatar}
        className="popup__form-item popup__form-item_type_avtar-link"
        type="url"
        name="url"
        placeholder="cсылка на аватар"
        id="avatar-link"
        required
      /> */}
      <span className="popup__form-item-error avatar-link-error"></span>
    </PopupWithForm>
  );
}
