const ResetButton = ({ handleReset }) => {
  return (
    <button className="form__reset" type="button" onClick={handleReset}>
      Clear all filters ♲
    </button>
  );
};

export default ResetButton;
