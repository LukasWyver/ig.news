import Head from 'next/head';
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: ['400', '700', '900'],
  style: ['normal'],
  subsets: ['latin'],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | ig.news</title>
      </Head>
      <main
        className={`${roboto.className} bg-background h-screen text-headline`}
      >
        <h2>Olá Mundo!</h2>
        <a href='#'>Link</a>
        <button>Button</button>
      </main>
    </>
  );
}
