const Reset = (props) => {
  const handleReset = () => {
    props.handleReset();
  };
  return (
    <button className="form__reset" type="button" onClick={handleReset}>
      Clear all <i class="fa-solid fa-trash-can"></i>
    </button>
  );
};

export default Reset;
