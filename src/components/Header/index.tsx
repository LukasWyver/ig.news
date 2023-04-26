import Image from 'next/image';
import Link from 'next/link';
import { SignInButton } from '../SignInButton';


export function Header() {
  return (
    <header className="h-20 border-b border-gray-100 dark:border-gray-700 ">
      <div className="max-w-[1120px] h-20 mx-auto px-8 flex items-center">
        <Image
          src="/images/logo.svg"
          alt="ig.news"
          width={108.45}
          height={30.27}
          className="brightness-0 dark:brightness-100"
        />

        <nav className="ml-20 h-20">
          <Link href="/" className="menu active">
            Home
          </Link>
          <Link href="/" className="menu">
            Posts
          </Link>
        </nav>

        <div className='ml-auto '>
          <SignInButton />
        </div>
      </div>
    </header>
  );
}
