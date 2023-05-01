import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { getSession } from 'next-auth/react';

import { RichText } from 'prismic-dom';
import { getPrismicClient } from '@/services/prismic';

interface PostProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  };
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <Head>
        <title>{post.title} | Posts | Ignews</title>
      </Head>

      <main className="max-w-[1120px] mx-auto px-8">
        <article className="max-w-[720px] mx-auto my-20">
          <h1 className='text-4xl sm:text-5xl lg:text-[3.375rem] leading-[2.75rem] sm:leading-[3.25rem] lg:leading-[3.75rem] font-black text-gray-900 dark:text-white space-y-6'>{post.title}</h1>
          <time className='text-base text-gray-700 dark:text-gray-100 mt-6 block'>{post.updatedAt}</time>

          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="post__content"
          />
        </article>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const session = await getSession({ req });
  const { slug } = params;

  if(!session?.activeSubscription){
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const prismic = getPrismicClient(req);

  const response = await prismic.getByUID('posts', String(slug), {});

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content),
    updatedAt: new Date(response.last_publication_date).toLocaleDateString(
      'pt-BR',
      {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }
    ),
  };

  return {
    props: {
      post,
    },
  };
};
