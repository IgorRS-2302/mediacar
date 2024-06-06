"use client";
import React from "react";
import Header from "../components/header";
import Image from "next/image";
import Avaliacao from "../assets/images/icons/melhor-experiencia-do-cliente.png";
import Satisfacao from "../assets/images/icons/satisfacao.png";
import Beneficios from "../assets/images/icons/incentivo.png";
import video from "../assets/images/video-Photoroom.png";
import cadastro from "../assets/images/icons/cadastro.png";
import contato from "../assets/images/icons/contato.png";
import instalacao from "../assets/images/icons/suporte-ao-cliente.png";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Button,
} from "@mui/material";
import Footer from "../components/footer";
import { useRouter } from "next/navigation";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Motorista() {
  const router = useRouter();

  return (
    <div className="text-white">
      <Header />
      <div className="h-[95vh] bg-no-repeat bg-cover bg-center bg-[url('../../public/banner_driver.jpg')] flex ">
        <div className="m-auto w-10/12 text-5xl text-center font-bold flex sm:block text-white text-shadow">
          <div>
            <span>
              Faça uma renda extra enquanto dirige com o{" "}
              <span className="font-bold text-orange-500">MediaCar</span>
            </span>
          </div>
        </div>
      </div>
      <div className="text-black">
        <h1 className="text-3xl text-center py-8 font-medium">Vantagens</h1>
        <div className="grid grid-flow-col grid-cols-3 my-8">
          <div className=" flex flex-col justify-center items-center">
            <Image className="h-[12vh] w-[12vh]" src={Avaliacao} alt="" />
            <h3 className="text-lg font-bold pt-2">Melhora Avaliações</h3>
            <p className="text-center w-[40vh]">
              Melhore as suas avaliações com novas experiências aos passageiros.
              A cada 10 passageiros, 7 interagem com a tela. Ofereça uma atração
              a mais em sua viagem aos clientes.
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center">
            <Image className="h-[12vh] w-[12vh]" src={Satisfacao} alt="" />
            <h3 className="text-lg font-bold pt-2"> Aumenta Satisfação </h3>
            <p className="text-center w-[40vh]">
              Aqui na MediaCar o motorista é nosso parceiro, proporcionar
              impacto social na renda dos motoristas faz parte do nosso DNA.
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center">
            <Image className="h-[12vh] w-[12vh]" src={Beneficios} alt="" />
            <h3 className="text-lg font-bold pt-2">Benefícios</h3>
            <p className="text-center w-[40vh]">
              Motoristas Parceiros tem inúmeras vantagens como desconto
              especial, promoções exclusivas, além de premiações para os
              motoristas com mais tempo Online.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-cor-laranja text-black pb-10">
        <h1 className="text-center text-3xl font-medium pt-10">
          COMO FUNCIONA
        </h1>
        <div className="flex justify-center">
          <Image src={video} alt="" className="max-w-[35vw]" />
        </div>
        <div className="grid grid-flow-col grid-cols-3">
          <div className=" flex flex-col justify-center items-center">
            <Image className="h-[10vh] w-[10vh]" src={cadastro} alt=""></Image>
            <h3 className="text-lg font-bold pt-2">Cadastro</h3>
            <p className="text-center w-[40vh]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className=" flex flex-col justify-center items-center">
            <Image className="h-[10vh] w-[10vh]" src={contato} alt=""></Image>
            <h3 className="text-lg font-bold pt-2">Contato</h3>
            <p className="text-center w-[40vh]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className=" flex flex-col justify-center items-center">
            <Image
              className="h-[10vh] w-[10vh]"
              src={instalacao}
              alt=""
            ></Image>
            <h3 className="text-lg font-bold pt-2">Instalação</h3>
            <p className="text-center w-[40vh]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
      <div className="text-black flex justify-evenly p-10">
        <p className="w-1/3">
          Faça agora o seu cadastro e começe a dirigir com a MediaCar.
          Entraremos em contato com você através do email para ativação do plano
          e receber dados para efetuar a instalação do MediaCar em seu veículo.
        </p>
        <div className="w-1/3 flex justify-center items-center">
          <Button
            className="bg-gradient-to-b from-orange-600 to-orange-700 text-white py-3 px-5 rounded-full"
            onClick={() => router.push("/contato")}
          >
            Entre em contato
          </Button>
        </div>
      </div>
      <div className="bg-gradient-to-br from-gray-500 from-96% to-black">
        <h1 className="text-center text-3xl py-8">
          Junte-se a vários motoristas que estão ganhando renda extra e
          benefícios através da MediaCar
        </h1>
        <div className="flex justify-center gap-5 p-5">
          <div className="w-3/6">
            <div className="flex gap-5 items-center p-5 bg-gradient-to-br from-orange-500 from-40% orange-600 to-orange-700 my-4 rounded-lg">
              <Avatar className="bg-orange-300">L</Avatar>
              <div className="flex flex-col gap-2">
                <h2>Lucas</h2>
                <span>
                  &quot;Estou muito feliz tendo a oportunidade de ganhar mais
                  fazendo apenas o meu trabalho de sempre.&quot;
                </span>
              </div>
            </div>
            <div className="flex gap-5 items-center p-5 bg-gradient-to-br from-orange-500 from-40% orange-600 to-orange-700 my-4 rounded-lg">
              <Avatar className="bg-orange-300">C</Avatar>
              <div className="flex flex-col gap-2">
                <h2>Cleber</h2>
                <span>
                  &quot;Já recebi feedback de passageiros que gostaram do
                  MediaCar no meu carro. &quot;
                </span>
              </div>
            </div>
          </div>
          <div className="w-3/6">
            <div className="flex gap-5 items-center p-5 bg-gradient-to-br from-orange-500 from-40% orange-600 to-orange-700 my-4 rounded-lg">
              <Avatar className="bg-orange-300">S</Avatar>
              <div className="flex flex-col gap-2">
                <h2>Samira</h2>
                <span>
                  &quot;Os descontos que consegui com os benefícios do MediaCar
                  me fizeram economizar muito.&quot;
                </span>
              </div>
            </div>
            <div className="flex gap-5 items-center p-5 bg-gradient-to-br from-orange-500 from-40% orange-600 to-orange-700 my-4 rounded-lg">
              <Avatar className="bg-orange-300">H</Avatar>
              <div className="flex flex-col gap-2">
                <h2>Helder</h2>
                <span>
                  &quot;Muito bom saber que estou fazendo parte de algo
                  inovador.&quot;
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
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
