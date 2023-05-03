import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';

import { SignInButton } from '../SignInButton';
import { ActiveLink } from '../ActiveLink';

import { FiSun, FiMoon } from 'react-icons/fi';

export function Header() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  function toggleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <header className="h-fit sm:h-20 border-b border-gray-100 dark:border-gray-700 ">
      <div className="max-w-[1120px] h-fit sm:h-20 mx-auto px-8 max-sm:pt-4 flex items-start sm:items-center">
        <div className='flex flex-col sm:flex-row items-start sm:items-center'>
          <Link href="/">
            <Image
              src="/images/logo.svg"
              alt="ig.news"
              width={108.45}
              height={30.27}
              className="brightness-0 dark:brightness-100"
            />
          </Link>

          <nav className="sm:ml-20 h-20">
            <ActiveLink href="/" title="Home"/>
            <ActiveLink href="/posts" title="Posts" />
          </nav>
        </div>

        <div className="ml-auto flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
          <SignInButton />
          <button onClick={toggleDarkMode} className='max-sm:ml-auto'>
            {darkMode ? (
              <FiMoon color="#737380" className="h-5 w-5" />
            ) : (
              <FiSun color="#EBA417" className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
