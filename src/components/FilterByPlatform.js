const FilterByPlatform = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: "platform",
    });
  };
  return (
    <>
      <label className="filterTitle" htmlFor="platform">
        Platform
      </label>

      <select
        className="formPlatform__select"
        name="platform"
        value={props.platformFilter}
        id="platform"
        onChange={handleChange}
      >
        <option value="all">All</option>
        <option value="Android">Android</option>
        <option value="Jaguar">Atari Jaguar</option>
        <option value="Atari ST">Atari ST</option>
        <option value="Commodore / Amiga">Commodore / Amiga</option>
        <option value="Game Boy">Game Boy</option>
        <option value="Game Boy Advance">Game Boy Advance</option>
        <option value="Game Boy Color">Game Boy Color</option>
        <option value="iOS">iOS</option>
        <option value="Linux">Linux</option>
        <option value="Classic Macintosh">Macintosh Classic</option>
        <option value="macOS">macOS</option>
        <option value="Nintendo 3DS">Nintendo 3DS</option>
        <option value="Nintendo 64">Nintendo 64</option>
        <option value="Nintendo DS">Nintendo DS</option>
        <option value="NES">Nes</option>
        <option value="SNES">SNes</option>
        <option value="GameCube">Nintendo GameCube</option>
        <option value="Nintendo Switch">Nintendo Switch</option>
        <option value="3DO">Panasonic 3DO</option>
        <option value="PC">PC</option>
        <option value="PlayStation">PlayStation</option>
        <option value="PlayStation 2">PlayStation 2</option>
        <option value="PlayStation 3">PlayStation 3</option>
        <option value="PlayStation 4">PlayStation 4</option>
        <option value="PlayStation 5">PlayStation 5</option>
        <option value="PSP">PSP</option>
        <option value="PS Vita">PS Vita</option>
        <option value="SEGA CD">Sega CD</option>
        <option value="Dreamcast">Sega Dreamcast</option>
        <option value="Game Gear">Sega Game Gear</option>
        <option value="Genesis">Sega Genesis</option>
        <option value="SEGA Master System">Sega Master System</option>
        <option value="SEGA Saturn">Sega Saturn</option>
        <option value="Xbox">Xbox</option>
        <option value="Xbox 360">Xbox 360</option>
        <option value="Xbox One">Xbox One</option>
        <option value="Xbox Series S/X">Xbox Series S/X</option>
        <option value="Web">Web</option>
        <option value="Wii">Wii</option>
        <option value="Wii U">Wii U</option>
      </select>
    </>
  );
};
export default FilterByPlatform;
