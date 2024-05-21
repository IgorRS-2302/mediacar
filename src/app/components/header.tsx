import Image from "next/image";
import MediacarLogo from "../assets/svgs/logo_mediacar.svg";

export default function Header() {
  return (
    <header className="bg-gradient-to-br from-orange-500 from-40% orange-600 to-orange-700 flex items-center justify-between w-full p-4">
      <div className="text-white">Menu</div>
      <Image src={MediacarLogo} alt={"Logo mediacar"} width={150} />
      <span className="invisible">menu</span>
    </header>
  );
}
