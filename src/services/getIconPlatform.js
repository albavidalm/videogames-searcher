import android from "../images/android.svg";
import ios from "../images/ios.svg";
import linux from "../images/linux.svg";
import macos from "../images/macos.svg";
import pc from "../images/pc.svg";
import ps3 from "../images/ps3.svg";
import ps4 from "../images/ps4.svg";
import ps5 from "../images/ps5.svg";
import psvita from "../images/psvita.svg";
import nswitch from "../images/nswitch.svg";
import xone from "../images/xone.svg";
import xseries from "../images/xseries.svg";
import xbox from "../images/xbox.svg";
import x360 from "../images/x360.svg";
import web from "../images/web.svg";

const getIconPlatform = (platforms) => {
  return (
    (platforms === "Android" && android) ||
    (platforms === "iOS" && ios) ||
    (platforms === "Linux" && linux) ||
    (platforms === "macOS" && macos) ||
    (platforms === "PC" && pc) ||
    (platforms === "PlayStation 3" && ps3) ||
    (platforms === "PlayStation 4" && ps4) ||
    (platforms === "PlayStation 5" && ps5) ||
    (platforms === "PS Vita" && psvita) ||
    (platforms === "Nintendo Switch" && nswitch) ||
    (platforms === "Xbox One" && xone) ||
    (platforms === "Xbox Series S/X" && xseries) ||
    (platforms === "Xbox" && xbox) ||
    (platforms === "Xbox 360" && x360) ||
    (platforms === "Web" && web)
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
