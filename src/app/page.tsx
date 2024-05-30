import CardPlanos from "./components/cardPlanos";
import { Button, Divider } from "@mui/material";
import Header from "./components/header";
import Footer from "./components/footer";
import Image from "next/image";
import Banner from "../app/assets/images/banner.png";
import Banner2 from "../app/assets/images/banner2.png";
import Tablet from "../app/assets/images/tablet_mediacarV2.png";
import LocationPin from "../app/assets/svgs/Location pin.svg";
import SteeringWheel from "../app/assets/svgs/Steering Wheel.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-white">
      <Header />
      <div className="banner w-full relative">
        <Image
          src={Banner}
          alt={"Banner mediacar"}
          className="object-fill w-full max-h-[50vh]"
        />
        <div className="absolute top-28 left-1 flex w-full justify-around items-center">
          <div className="spans flex flex-col">
            <span className="text-5xl">GANHE+</span>
            <span className="pl-1">
              com anúncios no seu carro! <br />
              Instale seu tablet e monetize <br /> suas viagens.
            </span>
          </div>
          <div className="w-64">
            <Image src={Tablet} alt={""} />
          </div>
        </div>
      </div>
      <div className="flex justify-around items-center bg-gradient-to-br from-gray-500 from-23% gray-600 to-black text-white w-full h-48 px-10">
        <div className="flex flex-col">
          <span className="text-orange-500">Junte-se ao MediaCar</span>
          <span>
            Veja quais planos se ajustam a sua demanda <br /> e faça parte dessa
            inovação
          </span>
        </div>
        <Button className="bg-gradient-to-b from-orange-600 to-orange-700 text-white py-3 px-5 rounded-full">
          Conheça nossos planos
        </Button>
      </div>
      <div className="product text-black py-10 px-32">
        <div className="flex justify-center">
          <span className="text-xl font-semibold">NOSSO PRODUTO</span>
        </div>
        <div className="flex justify-evenly pt-10">
          <div className="flex flex-col items-center gap-6">
            <span className="text-lg">
              Anúncios otimizados pela localização
            </span>
            <Image src={LocationPin} alt={""} width={75} />
            <span className="text-center w-2/3">
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
            <span className="text-center w-2/3">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum
              vero dolorum unde harum, ipsum nisi perspiciatis eaque cum quia
              excepturi corporis quaerat ab, dolor animi libero quam odit
              inventore quod.
            </span>
          </div>
        </div>
      </div>
      <div className="planos bg-stone-100 text-black w-full">
        <div className="flex flex-col items-center gap-10 py-10 px-32">
          <span className="text-xl font-semibold">PLANOS</span>
          <div className="flex gap-10 w-full p-10">
            <CardPlanos title={"Plano 1"} price={70} listItem={["Relação"]} />
            <CardPlanos
              title={"Plano 2"}
              price={120}
              listItem={["Relação", "Banner"]}
            />
            <CardPlanos
              title={"Plano 3"}
              price={180}
              listItem={["Relação", "Tela central"]}
            />
            <CardPlanos
              title={"Plano 4"}
              price={230}
              listItem={["Tela central", "Banner", "Relação"]}
            />
          </div>
        </div>
      </div>
      <div className="banner w-full relative">
        <Image
          src={Banner2}
          alt={"Banner mediacar"}
          className="object-fill w-full max-h-[60vh]"
        />
        <div className="spans absolute top-52 left-72 flex flex-col items-center gap-5">
          <span className="text-5xl w-3/4 text-center ">
            Já são mais de 239.950 pessoas utilizando nossos serviços.
          </span>
          <span className="font-thin text-4xl">
            Venha fazer parte você também!
          </span>
        </div>
      </div>
      <Footer />
    </main>
  );
}
