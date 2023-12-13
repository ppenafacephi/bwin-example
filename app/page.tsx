'use client';
import Image from "next/image";

export default function Home() {



  const loginHandler = () => {
    window.location.replace('https://bwin.landing.identity-platform.dev/');
  }

  return (
    <div className="body">
    <div className="login">
      <Image
        src="/logo.png"
        alt="Bwin"
        className="dark:invert"
        width={200}
        height={100}
        priority
      />
    </div>


    <div className="contain">


    <h1>Accede ahora y apuesta</h1>

    <button onClick={() => loginHandler()}>Accede</button>

    </div>

    </div>
    
  );
}
