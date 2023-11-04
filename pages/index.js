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
        <title>Ice Hub</title>
        <meta name='description' content='Ice Hub' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/photo-1.avif' />
      </Head>
      <main className='dark:bg-gray-900 h-screen overflow-y-auto select-none'>
        <section className={`${login ? "h-full w-full" : "hidden"}`}>
          <Login />
        </section>
        <section className={`${admin ? "h-full w-full" : "hidden"}`}>
          <div className='items-center justify-center hidden'>
            <h1>Screen too small, transfer to a bigger device/viewport</h1>
          </div>
          <Admin />    
        </section>
      </main>
    </>
  );
}
