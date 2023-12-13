"use client";
import { Layout } from "../components/Layout";

export default function Home() {
  const betHandler = () => {
    window.location.replace("https://bwinapuesta.landing.identity-platform.dev/");
  };

  return (
    <Layout>
      <h2>Empieza haciendo una apuesta ingresando dinero</h2>

      <button onClick={() => betHandler()}>Ingresa dinero</button>
    </Layout>
  );
}