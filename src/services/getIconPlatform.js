import android from "../assets/images/android.svg";
import ios from "../assets/images/ios.svg";
import linux from "../assets/images/linux.svg";
import macos from "../assets/images/macos.svg";
import pc from "../assets/images/pc.svg";
import ps2 from "../assets/images/ps2.svg";
import ps3 from "../assets/images/ps3.svg";
import ps4 from "../assets/images/ps4.svg";
import ps5 from "../assets/images/ps5.svg";
import psp from "../assets/images/psp.svg";
import psvita from "../assets/images/psvita.svg";
import n3ds from "../assets/images/n3ds.svg";
import n64 from "../assets/images/n64.svg";
import nds from "../assets/images/nds.svg";
import nes from "../assets/images/nes.svg";
import ngamecube from "../assets/images/ngamecube.svg";
import snes from "../assets/images/snes.svg";
import nswitch from "../assets/images/nswitch.svg";
import sgenesis from "../assets/images/sgenesis.svg";
import xone from "../assets/images/xone.svg";
import xseries from "../assets/images/xseries.svg";
import xbox from "../assets/images/xbox.svg";
import x360 from "../assets/images/x360.svg";
import web from "../assets/images/web.svg";
import wii from "../assets/images/wii.svg";
import wiiu from "../assets/images/wii-u.svg";

const getIconPlatform = (platforms) => {
  return (
    (platforms === "Android" && android) ||
    (platforms === "iOS" && ios) ||
    (platforms === "Linux" && linux) ||
    (platforms === "macOS" && macos) ||
    (platforms === "PC" && pc) ||
    (platforms === "PlayStation 2" && ps2) ||
    (platforms === "PlayStation 3" && ps3) ||
    (platforms === "PlayStation 4" && ps4) ||
    (platforms === "PlayStation 5" && ps5) ||
    (platforms === "PSP" && psp) ||
    (platforms === "PS Vita" && psvita) ||
    (platforms === "Nintendo 3DS" && n3ds) ||
    (platforms === "Nintendo 64" && n64) ||
    (platforms === "Nintendo DS" && nds) ||
    (platforms === "NES" && nes) ||
    (platforms === "GameCube" && ngamecube) ||
    (platforms === "SNES" && snes) ||
    (platforms === "Nintendo Switch" && nswitch) ||
    (platforms === "Genesis" && sgenesis) ||
    (platforms === "Xbox One" && xone) ||
    (platforms === "Xbox Series S/X" && xseries) ||
    (platforms === "Xbox" && xbox) ||
    (platforms === "Xbox 360" && x360) ||
    (platforms === "Web" && web) ||
    (platforms === "Wii" && wii) ||
    (platforms === "Wii U" && wiiu)
  );
};

export default getIconPlatform;

// if (platforms === "Android") {
//   return android;
// } else if (platforms === "iOS") {
//   return ios;
// } else if (platforms === "Linux") {
//   return linux;
// } else if (platforms === "macOS") {
//   return macos;
// } else if (platforms === "PC") {
//   return pc;
// } else if (platforms === "PlayStation 3") {
//   return ps3;
// } else if (platforms === "PlayStation 4") {
//   return ps4;
// } else if (platforms === "PlayStation 5") {
//   return ps5;
// } else if (platforms === "PS Vita") {
//   return psvita;
// } else if (platforms === "Nintendo Switch") {
//   return nswitch;
// } else if (platforms === "Xbox One") {
//   return xone;
// } else if (platforms === "Xbox Series S/X") {
//   return xseries;
// } else if (platforms === "Xbox") {
//   return xbox;
// } else if (platforms === "Xbox 360") {
//   return x360;
// } else if (platforms === "Web") {
//   return web;
// }
