import android from "../assets/images/android.svg";
import atarijaguar from "../assets/images/atarijaguar.svg";
import atarist from "../assets/images/atarist.svg";
import commodore from "../assets/images/commodore.svg";
import gameboy from "../assets/images/gameboy.svg";
import gameboyadv from "../assets/images/gameboyadv.svg";
import gameboycolor from "../assets/images/gameboycolor.svg";
import ios from "../assets/images/ios.svg";
import linux from "../assets/images/linux.svg";
import macintosh from "../assets/images/macintosh.svg";
import macos from "../assets/images/macos.svg";
import n3ds from "../assets/images/n3ds.svg";
import n64 from "../assets/images/n64.svg";
import nds from "../assets/images/nds.svg";
import nes from "../assets/images/nes.svg";
import ngamecube from "../assets/images/ngamecube.svg";
import nsnes from "../assets/images/nsnes.svg";
import nswitch from "../assets/images/nswitch.svg";
import p3do from "../assets/images/p3do.svg";
import pc from "../assets/images/pc.svg";
import playstation from "../assets/images/playstation.svg";
import ps2 from "../assets/images/ps2.svg";
import ps3 from "../assets/images/ps3.svg";
import ps4 from "../assets/images/ps4.svg";
import ps5 from "../assets/images/ps5.svg";
import psp from "../assets/images/psp.svg";
import psvita from "../assets/images/psvita.svg";
import scd from "../assets/images/scd.svg";
import sdreamcast from "../assets/images/sdreamcast.svg";
import sgamegear from "../assets/images/sgamegear.svg";
import sgenesis from "../assets/images/sgenesis.svg";
import smastersystem from "../assets/images/smastersystem.svg";
import ssaturn from "../assets/images/ssaturn.svg";
import web from "../assets/images/web.svg";
import wii from "../assets/images/wii.svg";
import wiiu from "../assets/images/wii-u.svg";
import x360 from "../assets/images/x360.svg";
import xbox from "../assets/images/xbox.svg";
import xone from "../assets/images/xone.svg";
import xseries from "../assets/images/xseries.svg";

const getIconPlatform = (platforms) => {
  return (
    (platforms === "Android" && android) ||
    (platforms === "Jaguar" && atarijaguar) ||
    (platforms === "Atari ST" && atarist) ||
    (platforms === "Commodore / Amiga" && commodore) ||
    (platforms === "Game Boy" && gameboy) ||
    (platforms === "Game Boy Advance" && gameboyadv) ||
    (platforms === "Game Boy Color" && gameboycolor) ||
    (platforms === "iOS" && ios) ||
    (platforms === "Linux" && linux) ||
    (platforms === "Classic Macintosh" && macintosh) ||
    (platforms === "macOS" && macos) ||
    (platforms === "Nintendo 3DS" && n3ds) ||
    (platforms === "Nintendo 64" && n64) ||
    (platforms === "Nintendo DS" && nds) ||
    (platforms === "NES" && nes) ||
    (platforms === "SNES" && nsnes) ||
    (platforms === "GameCube" && ngamecube) ||
    (platforms === "Nintendo Switch" && nswitch) ||
    (platforms === "3DO" && p3do) ||
    (platforms === "PC" && pc) ||
    (platforms === "PlayStation" && playstation) ||
    (platforms === "PlayStation 2" && ps2) ||
    (platforms === "PlayStation 3" && ps3) ||
    (platforms === "PlayStation 4" && ps4) ||
    (platforms === "PlayStation 5" && ps5) ||
    (platforms === "PSP" && psp) ||
    (platforms === "PS Vita" && psvita) ||
    (platforms === "SEGA CD" && scd) ||
    (platforms === "Dreamcast" && sdreamcast) ||
    (platforms === "Game Gear" && sgamegear) ||
    (platforms === "Genesis" && sgenesis) ||
    (platforms === "SEGA Master System" && smastersystem) ||
    (platforms === "SEGA Saturn" && ssaturn) ||
    (platforms === "Xbox" && xbox) ||
    (platforms === "Xbox 360" && x360) ||
    (platforms === "Xbox One" && xone) ||
    (platforms === "Xbox Series S/X" && xseries) ||
    (platforms === "Web" && web) ||
    (platforms === "Wii" && wii) ||
    (platforms === "Wii U" && wiiu)
  );
};

export default getIconPlatform;
