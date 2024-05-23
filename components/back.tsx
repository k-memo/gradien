import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa6';

export default function Contact() {
  return (
    <>
      <Link href={'/'}>
        {' '}
        <FaArrowLeft />
        <span className="back">back to home</span>
      </Link>
    </>
  );
}
