import Head from 'next/head';
import { useState, useEffect } from "react";
import Image from 'next/image';

import Login from '../components/Login';
import Admin from '../components/Admin';

export default function Home() {

  const [login, setLogin] = useState(false);
  const [admin, setAdmin] = useState(true);
  return (
    <>
      <Head>
        <title>Sales Admin</title>
        <meta name='description' content='Sales Admin By Sulaiman Gide' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/gg.png' />
      </Head>
      <main className='dark:bg-gray-900 h-screen overflow-y-auto select-none'>
        <section className={`${login ? "h-full w-full" : "hidden"}`}>
          <Login />
        </section>
        <section className={`${admin ? "h-full w-full" : "hidden"}`}>
          <Admin />    
        </section>
      </main>
    </>
  );
}
