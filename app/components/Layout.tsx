'use client';
import Image from "next/image";

export const Layout = ({ children }: any) => {
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

    {children}

    </div>

    </div>
  )
}