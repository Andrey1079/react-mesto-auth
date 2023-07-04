import Form from "./Form";
import Input from "./Input";
import { React, useRef } from "react";

export default function AuthPage({ title, text }) {
  const email = useRef();
  const password = useRef();
  return (
    <>
      <h2 className="auth__title">{title}</h2>
      <Form name="login" text={text} className="auth__form">
        <Input
          imputRef={email}
          validationLength={{ min: 5, max: 50 }}
          placeholder="Email"
          name="email"
          type="email"
          id="user-email-input"
          className="auth__input"
        ></Input>
        <Input
          imputRef={password}
          validationLength={{ min: 8, max: 256 }}
          placeholder="Пароль"
          name="password"
          type="passeord"
          id="user-password-input"
          className="auth__input"
        ></Input>
      </Form>
    </>
  );
}
