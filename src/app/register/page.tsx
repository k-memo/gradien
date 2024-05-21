'use client';
import { signIn, signOut, useSession } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import React, { useEffect } from 'react';
import { authOptions } from '../../../lib/authOptions';
import { redirect, useRouter } from 'next/navigation';

const RegisterPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push('/');
    }
  }, [session, router]);

  return (
    <section className="register">
      <button onClick={() => signIn('google')} className="btn-main btn">
        Sign in with Google
      </button>
    </section>
  );
};
export default RegisterPage;
