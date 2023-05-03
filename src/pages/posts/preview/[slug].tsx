import Head from 'next/head';
import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { GetStaticPaths, GetStaticProps } from 'next';

import { RichText } from 'prismic-dom';
import { getPrismicClient } from '@/services/prismic';

interface PostPreviewProps {
  post: {
    slug: string;
    title: string;
    content: string;
    updatedAt: string;
  };
}

export default function PostPreview({ post }: PostPreviewProps) {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session?.activeSubscription) {
      router.push(`/posts/${post.slug}`);
    }
  }, [post.slug, router, session]);

  return (
    <>
      <Head>
        <title>{post.title} | Posts | Ignews</title>
      </Head>

      <main className="max-w-[1120px] mx-auto px-8">
        <article className="max-w-[720px] mx-auto my-20">
          <h1 className="text-[3.375rem] leading-[3.75rem] font-black text-gray-900 dark:text-white space-y-6">
            {post.title}
          </h1>
          <time className="text-base text-gray-700 dark:text-gray-100 mt-6 block">
            {post.updatedAt}
          </time>

          <div
            dangerouslySetInnerHTML={{ __html: post.content }}
            className="post__content preview"
          />
          <div className="p-8 h-20 w-full border-none rounded-full flex flex-col sm:flex-row items-center justify-center bg-gray-100/75 dark:bg-shape-500 text-gray-700 dark:text-white text-lg sm:text-xl text-center font-bold mt-16 mb-8 transition-all duration-200 hover:brightness-105 dark:hover:brightness-[0.8]">
            Wanna continue reading?
            <Link href="/" className="text-yellow-500 ml-2">
              Subscribe now 🤗
            </Link>
          </div>
        </article>
      </main>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      // { params: { slug: 'headless-cms-content-management-system-e-uma-forma' } }
    ],
    fallback: 'blocking', // true, false, blocking
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params;

  const prismic = getPrismicClient();

  const response = await prismic.getByUID('posts', String(slug), {});

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    content: RichText.asHtml(response.data.content.splice(0, 2)),
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
    revalidate: 60 * 30, // 30 minutes
  };
};
