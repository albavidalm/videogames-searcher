const FilterByPlatform = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "platform",
    });
  };
  return (
    <>
      <label className="formPlatform__label" htmlFor="platform">
        Platform:
      </label>

      <select
        className="formPlatform__input--text"
        name="platform"
        value={props.platformFilter}
        id="platform"
        onChange={handleChange}
      >
        <option value="all">All</option>
        <option value="Android">Android</option>
        <option value="iOS">iOS</option>
        <option value="Linux">Linux</option>
        <option value="macOS">macOS</option>
        <option value="PC">PC</option>
        <option value="PlayStation 3">PlayStation 3</option>
        <option value="PlayStation 4">PlayStation 4</option>
        <option value="PlayStation 5">PlayStation 5</option>
        <option value="PS Vita">PS Vita</option>
        <option value="Nintendo Switch">Nintendo Switch</option>
        <option value="Xbox One">Xbox One</option>
        <option value="Xbox Series S/X">Xbox Series S/X</option>
        <option value="Xbox">Xbox</option>
        <option value="Xbox 360">Xbox 360</option>
        <option value="Web">Web</option>
      </select>
    </>
  );
};
export default FilterByPlatform;
