import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";
import Tablet from "../assets/images/tablet_mediacarV2.png";
export default function Contato() {
  return (
    <div>
      <Header />
      <div className="grid grid-flow-col grid-cols-2 bg-white">
        <div className="flex flex-grow-1 flex-col gap-5 align-middle justify-center text-black mx-10 p-12">
          <h1 className="text-3xl">Contate-nos</h1>
          <h3 className="">
            Para que nossa equipe possa te atender da melhor forma possível,
            pedimos que preencha o formulário abaixo:
          </h3>
          <input
            type="text"
            placeholder="Nome"
            className="py-2 pl-3 bg-cor-input rounded-lg "
          />
          <input
            type="email"
            placeholder="Email"
            className="py-2 pl-3 bg-cor-input rounded-lg "
          />
          <input
            type="tel"
            placeholder="Telefone"
            className="py-2 pl-3 bg-cor-input rounded-lg"
          />
          <input
            type="text"
            placeholder="Empresa"
            className="py-2 pl-3 bg-cor-input rounded-lg"
          />
          <input
            type="text"
            placeholder="Site"
            className=" py-2 pl-3 bg-cor-input rounded-lg"
          />
          <div className="flex justify-end">
            <button className="bg-cor-laranja py-3 px-12 rounded-lg">
              Enviar
            </button>
          </div>
        </div>
        <div className="flex items-center align-middle justify-center">
          <Image src={Tablet} alt={""} />
        </div>
      </div>
      <Footer />
    </div>
  );
}
