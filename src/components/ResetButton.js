const Reset = (props) => {
  const handleReset = () => {
    props.handleReset();
  };
  return (
    <button className="form__reset" type="button" onClick={handleReset}>
      Clear all
    </button>
  );
};

export default Reset;
