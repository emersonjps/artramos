import Image from "next/image";

import logo from "@/assets/img/logo.png";
import carrinho from "@/assets/img/carrinho.png";
import dogWood from "@/assets/img/dogWood.png";
import table from "@/assets/img/table.png";
import coffeeCase from "@/assets/img/coffeeCase.jpg";

import instagran from "@/assets/img/instagran.jpeg";
import facebook from "@/assets/img/facebook.jpg";
import whatsapp from "@/assets/img/whatsapp.jpg";

export default function Home() {
  return (
    <main>
      <nav className="flex justify-between items-center text-stone-950 bg-orange-500 gap-5 font-extrabold shadow-xl">
        <Image alt="logo" src={logo} width={50} height={50} />
        <h1 className="text-white text-2xl">ArtRamos</h1>

        <button
          className="rounded-full  right-5 bg-white p-2 m-2"
          onClick={() => alert("este teste não implementa checkout!")}
        >
          <Image alt="carrinho" src={carrinho} width={20} height={20} />
        </button>
      </nav>

      <h1 className="text-3xl text-slate-50 text-center mt-5">Postagens</h1>

      <section className="flex flex-wrap justify-center">
        <div className="flex flex-col justify-center text-center items-center text-slate-50 shadow-md bg-black bg-opacity-10 m-5 rounded p-5">
          <h2>Local para guardar capsulas de café</h2>
          <h2>Categoria: café</h2>
          <Image
            className="rounded m-5"
            alt="guardador de capsulas de café"
            src={coffeeCase}
            width={150}
            height={150}
          />
          <p>Valor: R$00.000,00</p>
          <input type="checkbox" />
        </div>{" "}
        <div className="flex flex-col justify-center text-center items-center text-slate-50 shadow-md bg-black bg-opacity-10 m-5 rounded p-5">
          <h2>Em busca do brinquedo da criança? conheça o dogWood</h2>
          <h2>Categoria: Brinquedo</h2>
          <Image
            className="rounded m-5"
            alt="guardador de capsulas de café"
            src={dogWood}
            width={150}
            height={150}
          />
          <p>Valor: R$00.000,00</p>
          <input type="checkbox" />
        </div>{" "}
        <div className="flex flex-col justify-center text-center items-center text-slate-50 shadow-md bg-black bg-opacity-10 m-5 rounded p-5">
          <h2>O melhor decorativo para sua residência: mesa fino-alto</h2>
          <h2>Categoria: decorativo</h2>
          <Image
            className="rounded m-5"
            alt="guardador de capsulas de café"
            src={table}
            width={150}
            height={150}
          />
          <p>Valor: R$00.000,00</p>
          <input type="checkbox" />
        </div>{" "}
      </section>

      <footer className="flex justify-between h-32 mt-20 bg-black text-white">
        <div className="ml-5 mt-5">
          <h1>ArtRamos</h1>
          <p>Contatos: (00) 0 0000-0000</p>
          <p>Localização: Brasil/Estado/Rua/n°</p>
        </div>

        <div className="mr-5 mt-5">
          <p>Redes sociais</p>
          <div className="flex gap-3">
            <Image
              className="rounded-full"
              alt="instagran"
              src={instagran}
              width={20}
              height={20}
            />
            <Image
              className="rounded-full"
              alt="facebook"
              src={facebook}
              width={20}
              height={20}
            />
            <Image
              className="rounded-full"
              alt="whatsapp"
              src={whatsapp}
              width={20}
              height={20}
            />
          </div>
        </div>
      </footer>
    </main>
  );
}
