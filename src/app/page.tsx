import CardPlanos from "./components/cardPlanos";
import { Button, Divider } from "@mui/material";
import Header from "./components/header";
import Footer from "./components/footer";
import Image from "next/image";
import Banner from "../app/assets/images/banner.png";
import Tablet from "../app/assets/images/tablet_mediacarV2.png";
import LocationPin from "../app/assets/svgs/Location pin.svg";
import SteeringWheel from "../app/assets/svgs/Steering Wheel.svg";
import Contato from "./Pages/Contato";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-white">
      <Header />
      <div className="banner w-full relative">
        <Image src={Banner} alt={"Banner mediacar"} />
        <div className="spans absolute top-28 left-16 flex flex-col">
          <span className="text-5xl">GANHE+</span>
          <span className="pl-1">
            com anúncios no seu carro! <br />
            Instale seu tablet e monetize <br /> suas viagens.
          </span>
        </div>
        <div className="absolute top-14 right-16 w-64">
          <Image src={Tablet} alt={""} />
        </div>
      </div>
      <div className="relative bg-gradient-to-br from-gray-500 from-23% gray-600 to-black text-white w-full h-48">
        <div className="absolute flex flex-col top-16 left-24">
          <span className="text-orange-500">Junte-se ao MediaCar</span>
          <span>
            Veja quais planos se ajustam a sua demanda <br /> e faça parte dessa
            inovação
          </span>
        </div>
        <Button className="absolute bg-gradient-to-b from-orange-600 to-orange-700 text-white py-3 px-5 rounded-full top-20 right-24">
          Conheça nossos planos
        </Button>
      </div>
      <div className="product text-black py-10">
        <div className="flex justify-center">
          <span className="text-xl font-semibold">NOSSO PRODUTO</span>
        </div>
        <div className="flex justify-evenly pt-10">
          <div className="flex flex-col items-center gap-6">
            <span className="text-lg">
              Anúncios otimizados pela localização
            </span>
            <Image src={LocationPin} alt={""} width={75} />
            <span className="text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
              vero dolorum unde harum, ipsum nisi perspiciatis eaque cum quia
              excepturi corporis quaerat ab, dolor animi libero quam odit
              inventore quod.
            </span>
          </div>
          <Divider orientation="vertical" variant="middle" flexItem />
          <div className="flex flex-col items-center gap-6">
            <span className="text-lg">Benefícios para o motorista</span>
            <Image src={SteeringWheel} alt={""} width={75} />
            <span className="text-center">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
              vero dolorum unde harum, ipsum nisi perspiciatis eaque cum quia
              excepturi corporis quaerat ab, dolor animi libero quam odit
              inventore quod.
            </span>
          </div>
        </div>
      </div>
      <div className="planos bg-stone-100 text-black w-full">
        <div className="flex flex-col items-center gap-10 py-10">
          <span className="text-xl font-semibold">PLANOS</span>
          <div className="flex gap-5">
            <CardPlanos planNumber={1} />
            <CardPlanos planNumber={2} />
            <CardPlanos planNumber={3} />
            <CardPlanos planNumber={4} />
          </div>
        </div>
      </div>
      {/* <CardPlanos /> */}
      <Footer />
      <Contato/>
    </main>
  );
}
