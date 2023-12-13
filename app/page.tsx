"use client";
import { Layout } from "./components/Layout";

export default function Home() {
  const loginHandler = () => {
    window.location.replace("https://bwin.landing.identity-platform.dev/");
  };

  return (
    <Layout>
      <h1>Accede ahora y apuesta</h1>

      <button onClick={() => loginHandler()}>Accede</button>
    </Layout>
  );
}
