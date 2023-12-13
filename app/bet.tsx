"use client";
import { Layout } from "./components/Layout";

export default function Bet() {
  const betHandler = () => {
    window.location.replace("https://bwinapuesta.landing.identity-platform.dev/");
  };

  return (
    <Layout>
      <h1>Empieza haciendo una apuesta ingresando dinero</h1>

      <button onClick={() => betHandler()}>Ingresa dinero</button>
    </Layout>
  );
}
