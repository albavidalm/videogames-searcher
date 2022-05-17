const Reset = (props) => {
  const handleReset = () => {
    props.handleReset();
  };
  return (
    <button className="form__reset" type="button" onClick={handleReset}>
      Reset
    </button>
  );
};

export default Reset;
