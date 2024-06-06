"use client";
import CardPlanos from "./components/cardPlanos";
import { Button, Divider } from "@mui/material";
import Header from "./components/header";
import Footer from "./components/footer";
import Image from "next/image";
import Banner from "../app/assets/images/banner.png";
import Tablet from "../app/assets/images/tablet_mediacarV2.png";
import LocationPin from "../app/assets/svgs/Location pin.svg";
import SteeringWheel from "../app/assets/svgs/Steering Wheel.svg";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

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
        <Button
          className="bg-gradient-to-b from-orange-600 to-orange-700 text-white py-3 px-5 rounded-full"
          onClick={() => router.push("/demonstracao")}
        >
          Ver demonstração
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
              Sua marca diante de um público bem diversificado e com baixa
              dispersão. Sua marca nos carros, ela não fica parada atingindo
              somente aquela área, atinge locais além do seu alcance, alcançando
              um público e visibilidade muito maior.
            </span>
          </div>
          <Divider orientation="vertical" variant="middle" flexItem />
          <div className="flex flex-col items-center gap-6">
            <span className="text-lg">Benefícios para o motorista</span>
            <Image src={SteeringWheel} alt={""} width={75} />
            <span className="text-center w-2/3">
              Para nossos parceiros motoritas temos várias vantagens e
              benefícios. Temos uma Remuneração Mensal + Valor por indicação,
              recebendo na hora da efetivação. Desconto em serviços automotivos
              e peças. Direito a um clube de Benefícios.
            </span>
          </div>
        </div>
      </div>
      <div className="planos bg-stone-100 text-black w-full">
        <div className="flex flex-col items-center gap-10 py-10">
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
      <div className="banner w-full bg-gradient-to-br from-gray-500 from-23% gray-600 to-black p-24">
        <div className="spans flex justify-evenly items-center text-2xl">
          <p className="text-center">
            Já temos mais de 100 motoristas <br />
            cadastrados
          </p>
          <p className="text-center">50+ marcas anunciando conosco</p>
          <p className="text-center">Mais 200 anúncios feitos</p>
        </div>
      </div>
      <Footer />
    </main>
  );
}
