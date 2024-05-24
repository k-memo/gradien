import { signIn, signOut, useSession } from 'next-auth/react';
import OAuth from './oauth';
import React, { useEffect, useState } from 'react';
import { FiLogOut } from 'react-icons/fi';

export default function StartBtn() {
  const { data: session } = useSession();
  const [message, setMessage] = useState('');

  const handleSignIn = async e => {
    e.preventDefault();
    await signIn('google', { callbackUrl: process.env.NEXTAUTH_URL });
    setMessage('Successfully logged in!');
  };

  const handleSignOut = async () => {
    await signOut();
    setMessage('Successfully logged out!');
  };

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div className="login-nav">
      {message && <div className="message">{message}</div>}
      {session ? (
        <button onClick={handleSignOut} className="btn-second">
          {session.user?.name} <FiLogOut />
        </button>
      ) : (
        <OAuth company={'Google'} handleLogin={handleSignIn} />
      )}
    </div>
  );
}
