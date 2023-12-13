"use client";
import { Layout } from "../components/Layout";
import Image from "next/image";

export default function Home() {
  const betHandler = () => {
    window.location.replace("https://bwinapuesta.landing.identity-platform.dev/");
  };

  return (
    <Layout>

      <div>
        <Image src="/clasico.jpeg" width={300} height={60} alt="clasico" />
      </div>


      <h2>Empieza tu apuesta en el clásico<br /> haciendo un ingreso de dinero</h2>
      <button onClick={() => betHandler()}>Ingresa dinero</button>
    </Layout>
  );
}