import Link from 'next/link';
import { useRouter } from 'next/router';

interface ActiveLinkProps {
  href: string;
  title: string;
}

export function ActiveLink({ href, title, ...rest }: ActiveLinkProps) {
  const { asPath } = useRouter();

  return (
    <Link href={href} className={`menu ${asPath === href && 'active'}`}>
      {title}
    </Link>
  );
}
