// login/page.tsx
'use client';
import { signIn, useSession } from 'next-auth/react';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const LoginPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
      router.push('/');
    }
  }, [session, router]);

  return (
    <section className="login">
      <button onClick={() => signIn('google')} className="btn-main btn">
        Sign in with Google
      </button>
    </section>
  );
};

export default LoginPage;
