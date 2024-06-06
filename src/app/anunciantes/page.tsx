import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";
import BannerInfo from "../assets/images/banner_info.png";
import MenuInfo from "../assets/images/menu_info.png";
import TelaInteira from "../assets/images/tela_inteira_info.png";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";

import AutoGraphIcon from "@mui/icons-material/AutoGraph";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import LoopIcon from "@mui/icons-material/Loop";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Anunciantes() {
  return (
    <div className="min-h-screen flex-col items-center justify-between w-full text-white">
      <Header />
      <div className="h-[95vh] bg-no-repeat bg-cover bg-center bg-[url('../../public/banner2.png')] flex ">
        <div className="m-auto w-10/12 text-5xl text-end font-bold flex sm:block text-white text-shadow">
          <div className="flex flex-col gap-4">
            <span>Atraia a atenção do seu público-alvo.</span>
            <span>
              Sua marca em todo lugar com o{" "}
              <span className="font-bold text-orange-500">MediaCar</span>
            </span>
          </div>
        </div>
      </div>
      <div className="text-black">
        <h2 className="text-2xl text-center text-black my-8 font-bold">
          Como funciona nossa plataforma
        </h2>
        <hr className="border-2 border-orange-500 my-5 m-10" />
        <div className="flex flex-col gap-5">
          <div className="flex justify-evenly">
            <div className="flex justify-center items-center w-1/3">
              <p className="p-10 font-semibold text-xl text-center bg-orange-300 rounded-md">
                Na tela central, são reproduzidos videos, imagens e gifs br de
                15 a 30 segundos
              </p>
            </div>
            <Image src={TelaInteira} alt={""} />
          </div>
          <div className="flex justify-evenly flex-row-reverse">
            <div className="flex justify-center items-center w-1/3">
              <p className="p-10 font-semibold text-xl text-center bg-orange-300 rounded-md">
                No banner, são reproduzidas imagens de 15 segundos
              </p>
            </div>
            <Image src={BannerInfo} alt={""} />
          </div>
          <div className="flex justify-evenly">
            <div className="flex justify-center items-center w-1/3">
              <p className="p-10 font-semibold text-xl text-center bg-orange-300 rounded-md">
                O menu é uma tela interativa, que ao acessar a área desejada,
                irá constar a logo, nome e endereço ou WhatsApp
              </p>
            </div>
            <Image src={MenuInfo} alt={""} />
          </div>
        </div>
      </div>
      <div className=" bg-black p-5 mt-5">
        <h2 className="text-2xl text-center text-white my-8 font-bold">
          Vantagens de anunciar com a Mediacar
        </h2>
        <hr className="border-2 border-orange-500 my-5 mx-10" />
        <div className="flex flex-col gap-10 justify-center items-center p-10">
          <div className="flex justify-center gap-5">
            <div className="bg-white rounded-md text-black p-10 flex flex-col w-1/3 gap-2 items-center">
              <AutoGraphIcon className="text-orange-500 text-5xl" />
              <span className="text-orange-500 font-semibold text-lg text-center">
                Alto impacto
              </span>
              <span className="text-center">
                Um canal inovador de publicidade. O passageiro visualiza sua
                marca, produto ou serviço com uma tela a menos 50cm do seu campo
                de visão.
              </span>
            </div>
            <div className="bg-white rounded-md text-black p-10 flex flex-col w-1/3 gap-2 items-center">
              <TrendingUpIcon className="text-orange-500 text-5xl" />
              <span className="text-orange-500 font-semibold text-lg text-center">
                O Futuro da Mídia
              </span>
              <span className="text-center">
                Segundo a pesquisa GlobalMarket o DOOH, até 2022, esse novo
                mercado deve ultrapassar os 5 bilhões de dólares de faturamento.
              </span>
            </div>
          </div>
          <div className="flex justify-center gap-5">
            <div className="bg-white rounded-md text-black p-10 flex flex-col w-1/3 gap-2 items-center">
              <LoopIcon className="text-orange-500 text-5xl" />
              <span className="text-orange-500 font-semibold text-lg text-center">
                Conversão
              </span>
              <span className="text-center">
                Converta passageiros e potenciais compradores utilizando QRCode.
                Ofereça: promoções, cupom de descontos, faça pesquisas ou
                divulgue o seu site.
              </span>
            </div>
            <div className="bg-white rounded-md text-black p-10 flex flex-col w-1/3 gap-2 items-center">
              <TipsAndUpdatesIcon className="text-orange-500 text-5xl" />
              <span className="text-orange-500 font-semibold text-lg text-center">
                Inovação
              </span>
              <span className="text-center">
                Atinja os clientes enquanto eles se deslocam pela cidade. Faça
                anúncios de 15’’ e 30’’, conquiste e fidelize novos clientes com
                uma mídia inovadora.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="text-black">
        <div className="flex flex-col p-10 items-center gap-5">
          <span className="text-2xl font-semibold">
            Com interesse de anunciar na{" "}
            <span className="font-bold text-orange-500">MediaCar</span>?
          </span>
          <span className="font-light">
            Fale conosco através do WhatsApp e garanta já a divulgação do seu
            negócio.
          </span>
          <a href="https://wa.me/5581988417840" target="_blank">
            <div className="flex justify-center bg-orange-500 w-fit rounded-full p-2 text-white gap-2">
              <WhatsAppIcon className="text-2xl " />
              MediaCar
            </div>
          </a>
        </div>
      </div>
      <hr className="border-2 border-orange-500 my-5 mx-10" />
      <div className="p-5 mt-5 text-black">
        <h1 className="text-center text-2xl font-semibold p-5">
          Perguntas Frequentes
        </h1>
        <div className="p-10 flex flex-col items-center">
          <Accordion className="bg-orange-500 text-white w-2/5">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-white" />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              Como funciona a parte de interatividade?
            </AccordionSummary>
            <AccordionDetails>
              Instalamos nos carros de app uma tela digital, interativa (onde o
              passageiro pode navegar pelo menu), de forma on-line e gratuita,
              onde pode se ter descontos e conhecimentos. Melhorando assim a
              vida dos passageiros com um serviço de qualidade.
            </AccordionDetails>
          </Accordion>
          <Accordion className="bg-orange-500 text-white w-2/5">
            <AccordionSummary
              expandIcon={<ExpandMoreIcon className="text-white" />}
              aria-controls="panel2-content"
              id="panel2-header"
            >
              Em quais cidades o MediaCar já está disponível?
            </AccordionSummary>
            <AccordionDetails>
              O MediaCar se encontra disponível em Recife, Olinda, Camaragibe e
              Jaboatão dos Guararapes
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <Footer />
    </div>
  );
}
