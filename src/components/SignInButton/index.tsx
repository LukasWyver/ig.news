import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

export function SignInButton() {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <button
      type="button"
      className="flex items-center justify-center h-12 rounded-full bg-gray-100/75 dark:bg-shape-500 px-6 text-gray-700 dark:text-white font-bold hover:brightness-105 dark:hover:brightness-[0.8] transition-all duration-200"
    >
      <FaGithub className="mr-4 h-5 w-5" color="#04d361" />
      lukaswyver
      <FiX color="#737380" className="ml-4 h-5 w-5"/>
    </button>
  ) : (
    <button
      type="button"
      className="flex items-center justify-center h-12 rounded-full bg-gray-100/75 dark:bg-shape-500 px-6 text-gray-700 dark:text-white font-bold hover:brightness-105 dark:hover:brightness-[0.8] transition-all duration-200"
    >
      <FaGithub className="mr-4 h-5 w-5" color="#eba417" />
      Sign in with Github
    </button>
  );
}
