export default function Form({ onSubmit, name, className, text, children }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onSubmit();
  };
  return (
    <form onSubmit={handleSubmit} name={name} className={className}>
      {children}

      <input value={text} type="submit" className="popup__submit-button button" />
    </form>
  );
}
