import Image from "next/image";
import Logo from "../assets/svgs/logo_mediacar.svg";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-orange-500 from-40% orange-600 to-orange-700 w-full md:px-32 py-2">
      <div>
        <div className="flex justify-between items-center border-b-2 border-b-white p-5">
          <Image src={Logo} alt={"Logo mediacar"} width={120} />
          <div className="flex">
            <span>Acompanhe nas redes</span>
            <div className="mx-2">
              <a href="https://www.instagram.com/mediacar1.1/" target="_blank">
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="grid grid-col py-5 gap-10 md:flex ">
          <div className="flex justify-around md:w-3/5 lg:w-5/12">
            <div className="flex flex-col gap-1">
              <span className="font-semibold pb-2">Produtos</span>
              <span>Nossos planos</span>
              <span>Junte-se a nós</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-semibold pb-2">Institucional</span>
              <span>Home</span>
              <span>Blog</span>
              <span>Sobre nós</span>
              <span>Parceiros</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-semibold pb-2">Ajuda</span>
              <span>Tutoriais</span>
              <span>FAQ</span>
              <span>Fale conosco</span>
            </div>
          </div>
          <div className="flex justify-end items-center md:w-2/5 max">
            <div className="flex items-center gap-3 bg-gradient-to-b from-orange-700 to-orange-800 py-2 px-4 rounded-md cursor-pointer">
              <WhatsAppIcon fontSize="large" />
              <a href="https://wa.me/5581988417840" target="_blank">
                <div className="flex flex-col">
                  <span>Atendimento Whatsapp:</span>
                  <span>{"(81) 99841-7840"}</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
