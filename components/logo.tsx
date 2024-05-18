import Image from 'next/image';
import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/">
      <Image src="/logo.svg" width={30} height={30} alt="logo" />
    </Link>
  );
}
