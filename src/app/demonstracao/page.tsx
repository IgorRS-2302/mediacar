"use client";
import { Button } from "@mui/material";
import Header from "../components/header";
import { useRouter } from "next/navigation";

export default function Demonstracao() {
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col text-white">
      <Header />
      <div className="w-full flex flex-col gap-10 justify-center items-center p-5">
        <h1 className="text-orange-500 font-semibold text-2xl">
          Nosso Produto
        </h1>
        <div className="w-3/5">
          <iframe
            allowFullScreen
            className="h-full aspect-video my-auto w-full"
            src="https://main.dugqlti4sqzcc.amplifyapp.com/home"
          ></iframe>
        </div>
        <Button
          className="bg-orange-500 text-white hover:bg-orange-600 capitalize"
          onClick={() => {
            router.push("/");
          }}
        >
          Voltar
        </Button>
      </div>
    </main>
  );
}
