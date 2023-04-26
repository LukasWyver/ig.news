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
      <main className={`${roboto.className} mx-auto px-8 h-screen -mt-20 max-w-[1120px] flex items-center justify-between`}>
        <section className='max-w-[600px]'>
          <span className='text-base font-bold'>👏 Hey, Welcome</span>
          <h1 className='text-7xl leading-[4.5rem] font-black mt-10'>News about<br />the <span className='text-cyan-500'>React</span> world.</h1>
          <p className='text-2xl leading-9 mt-6 mb-10'>Get acess to all the publications < br />
            <span className='text-cyan-500 font-bold'>for {amount} month</span>
          </p>

          <SubscribeButton priceId={product.priceId} />
        </section>

        <Image src="/images/avatar.svg" alt="Girl coding" width={334} height={520} className='' />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async() =>{
  const price = await stripe.prices.retrieve('price_1N0wJ5AlWAdH8c5T0FPKG8yB',{
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
