const ResetButton = (props) => {
  //console.log(props);
  const handleReset = () => {
    props.handleReset();
  };
  return (
    <button className="form__reset" type="button" onClick={handleReset}>
      Clear all <i className="fa-solid fa-trash-can"></i>
    </button>
  );
};

export default ResetButton;
