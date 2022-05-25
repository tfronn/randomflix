import { CircleNotch } from "phosphor-react";
import { Header } from "../Header";

export function Loading() {
  return (
    <>
    <Header />
    <div className="w-auto h-auto flex flex-col mx-auto px-4 items-center justify-center dark:text-zinc-200 text-zinc-800">
      <h1 className="text-xl mb-12">Encontrando o melhor filme, aguarde!</h1>
      <CircleNotch weight="bold" className="w-12 h-12  animate-spin" />
    </div>
    </>
  )
}