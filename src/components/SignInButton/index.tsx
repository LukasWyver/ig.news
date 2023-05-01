/* eslint-disable multiline-ternary */

import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

import { signIn, signOut, useSession } from 'next-auth/react';

export function SignInButton() {
  const { data: session } = useSession();
  // console.log('session :>> ', session.user)

  function firstName(fullName) {
    const name = fullName.split(" ");
    return name[0];
  }

  return session ? (
    <button
      type="button"
      className="flex items-center justify-center h-12 rounded-full bg-gray-100/75 dark:bg-shape-500 px-6 text-gray-700 dark:text-white font-bold hover:brightness-105 dark:hover:brightness-[0.8] transition-all duration-200"
    >
      <FaGithub className="mr-2 sm:mr-4 h-5 w-5" color="#04d361" />
        <span className='max-lg:block lg:hidden'>
          {session.user?.name.split(" ")[0]}
        </span>
        <span className='hidden lg:block'>
          {session.user?.name}
        </span>
      <FiX color="#737380" className="ml-2 sm:ml-4 h-5 w-5" onClick={() => signOut()}/>
    </button>
  ) : (
    <button
      type="button"
      onClick={() => signIn('github')}
      className="flex items-center justify-center h-12 rounded-full bg-gray-100/75 dark:bg-shape-500 px-6 text-gray-700 dark:text-white font-bold hover:brightness-105 dark:hover:brightness-[0.8] transition-all duration-200"
    >
      <FaGithub className="mr-2 sm:mr-4 h-5 w-5" color="#eba417" />
      Signin
      <span className='hidden sm:block ml-1'>with Github</span>
    </button>
  );
}
