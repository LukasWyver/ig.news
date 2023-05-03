import Link from 'next/link';

type PostProps = {
  slug: string;
  title: string;
  excerpt: string;
  updatedAt: string;
};

export default function Post({ slug, updatedAt, title, excerpt }: PostProps) {
  return (
    <Link
      href={`/posts/preview/${slug}`}
      className="block first:mt-0 mt-8 pt-8 px-2.5 border-t border-gray-100 dark:border-gray-500 hover:border-yellow-500 hover:dark:border-yellow-500 group bg-gradient-to-b hover:from-yellow-500/10 from-2% hover:via-gray-100/5 hover:dark:via-gray-500/5 via-10% to-transparent to-20% transition-colors duration-200"
    >
      <time className="text-base font-normal flex items-center text-gray-500 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors duration-200">
        {updatedAt}
      </time>
      <strong className="block text-2xl font-bold mt-4 text-gray-500 dark:text-white group-hover:text-yellow-500 transition-colors duration-200">
        {title}
      </strong>
      <p className="text-base font-normal mt-2 text-gray-500 dark:text-gray-300">
        {excerpt}
      </p>
    </Link>
  );
}
