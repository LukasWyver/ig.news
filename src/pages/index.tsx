import { GetStaticProps } from 'next';

import Head from 'next/head';
import Image from 'next/image';
import { Roboto } from 'next/font/google';

import { SubscribeButton } from '@/components/SubscribeButton';
import { stripe } from '@/services/stripe';

const roboto = Roboto({
  weight: ['400', '700', '900'],
  style: ['normal'],
  subsets: ['latin'],
});

interface HomeProps {
  product: {
    priceId: string,
    amount: number,
  }
}

export default function Home({ product }: HomeProps) {

  const amount = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(product.amount / 100)

  return (
    <>
      <Head>
        <title>Início | ig.news</title>
      </Head>
      <main className={`${roboto.className} mx-auto px-8 h-screen lg:-mt-20 max-w-[1120px] flex flex-col lg:flex-row items-center justify-between`}>
        <section className='max-w-[600px] max-lg:mt-20'>
          <span className='text-base font-bold'>👏 Hey, Welcome</span>
          <h1 className='text-5xl sm:text-7xl leading-[3.5rem] sm:leading-[4.5rem] font-black mt-10'>News about<br />the <span className='text-cyan-500'>React</span> world.</h1>
          <p className='text-2xl leading-9 mt-6 mb-10'>Get acess to all the publications < br />
            <span className='text-cyan-500 font-bold'>for {amount} month</span>
          </p>

          <SubscribeButton priceId={product.priceId} />
        </section>

        <section className='max-w-[334px] mt-20 '>
          <Image src="/images/avatar.svg" alt="Girl coding" width={334} height={520} className='relative max-sm:bottom-10 '/>
        </section>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async() =>{
  const price = await stripe.prices.retrieve('price_1N3THbAlWAdH8c5Tockv3dkS',{
    expand: ['product'] // expande tudo o que esta dentro do array "product".
  })

  const product = {
    priceId: price.id,
    amount: price.unit_amount,
  }

  return {
    props: {
      product,
    },

    revalidate: 60 * 60 * 24, // 24 hours
  }
}
