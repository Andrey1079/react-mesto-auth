import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getStartInfo()
      .then((startData) => {
        const [userData, initialCards] = startData;
        setCurrentUser(userData);
        setCards(initialCards);
      })
      .catch((err) => console.log(err));
  }, []);

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ name: "", link: "" });
  const isAnyPopupOpened = isEditProfilePopupOpen || isEditAvatarPopupOpen || isAddPlacePopupOpen || isImagePopupOpen;

  React.useEffect(() => {
    const handleCloseByEscape = (evt) => {
      evt.key === "Escape" && closeAllPopups();
    };
    if (isAnyPopupOpened) {
      document.addEventListener("keydown", handleCloseByEscape);
    }
    return () => document.removeEventListener("keydown", handleCloseByEscape);
  }, [isAnyPopupOpened]);
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };
  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({ name: "", link: "" });
    setIsImagePopupOpen(false);
  };
  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsImagePopupOpen(true);
  };
  const handleCardLike = (card) => {
    const isLiked = card.likes.some((item) => item._id === currentUser._id);
    api
      .toggleLikes(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
      })
      .catch((err) => console.log(err));
  };
  const handleCardDelete = (id) => {
    api
      .deleteCard(id)
      .then(() => {
        setCards((state) => state.filter((item) => !(item._id === id)));
      })
      .catch((err) => console.log(err));
  };
  const handleUpdateUser = (user) => {
    api
      .setUserInfo(user)
      .then((updatedUserData) => {
        setCurrentUser(updatedUserData);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  };
  const handleUpdateAvatar = (avatar) => {
    api
      .patchAvatar(avatar)
      .then((newDate) => {
        setCurrentUser(newDate);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  };
  const handleAddPlace = (card) => {
    api
      .postNewCard(card)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page__container">
        <Header />
        <Main
          cards={cards}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLikeClick={handleCardLike}
          onCardDeleteClick={handleCardDelete}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdatedUserInfo={handleUpdateUser}
        ></EditProfilePopup>
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdatedAvatar={handleUpdateAvatar}
        ></EditAvatarPopup>
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddedPlace={handleAddPlace}></AddPlacePopup>

        <ImagePopup isOpen={isImagePopupOpen} card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
