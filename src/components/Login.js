import PopupWithForm from "./PopupWithForm";

export default function Login() {
  return (
    <>
      <Header>
        <Link path="/registration" element={<Register />} />
      </Header>
      <PopupWithForm />
    </>
  );
}
