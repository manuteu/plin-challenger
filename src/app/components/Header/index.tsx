import React, { useContext, useState } from "react"
import Link from "next/link"
import SelectIcon from "../icons";


export default function Header() {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="fixed w-full z-10">
      <header>
        <title>Plin Challenger</title>
        <link rel="icon" href="/favicon.ico" />
      </header>
      <nav className={`w-full bg-gray-900 shadow ${navbar ? 'h-[100vh] fixed t-0 z-10' : 'relative'}`}>
        <div className="sm:block justify-between sm:px-4 mx-auto max-w-7xl items-center flex px-8">
          <div className="flex items-center justify-between sm:py-3 py-5 block">
            <a href="#">
              <h2 className="text-2xl text-white font-bold">Plin Challenger</h2>
            </a>
            <div className="md:hidden lg:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? SelectIcon('close') : SelectIcon('menu')}
              </button>
            </div>
          </div>
          <div>
            <div
              className={`md:flex lg:flex justify-self-center sm:py-8 pb-0 mt-0 ${navbar ? 'block' : 'hidden'}`}
            >
              <ul className="flex items-center justify-center sm:block sm:space-y-8 gap-8">
                <li onClick={() => setNavbar(false)} className="text-white hover:opacity-80">
                  <Link href="/">
                    Home
                  </Link>
                </li>
                <li onClick={() => setNavbar(false)} className="text-white hover:opacity-80">
                  <Link href="/weather">
                    Weather
                  </Link>
                </li>
                <li onClick={() => setNavbar(false)} className="text-white hover:opacity-80">
                  <Link href="/cep">
                    CEP
                  </Link>
                </li>
                <li onClick={() => setNavbar(false)} className="text-white hover:opacity-80">
                  <Link href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
