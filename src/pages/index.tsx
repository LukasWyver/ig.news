import Head from 'next/head';
import { Roboto } from 'next/font/google';
import Image from 'next/image';

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
      <main className={`${roboto.className} mx-auto px-8 h-screen -mt-20 max-w-[1120px] flex items-center justify-between`}>
        <section className='max-w-[600px]'>
          <span className='text-base font-bold'>👏 Hey, Welcome</span>
          <h1 className='text-7xl leading-[4.5rem] font-black mt-10'>News about<br />the <span className='text-cyan-500'>React</span> world.</h1>
          <p className='text-2xl leading-9 mt-6'>Get acess to all the publications < br />
            <span className='text-cyan-500 font-bold'>for $9.90 month</span>
          </p>
        </section>

        <Image src="/images/avatar.svg" alt="Girl coding" width={334} height={520} className='' />
      </main>
    </>
  );
}
