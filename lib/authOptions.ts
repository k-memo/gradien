import NextAuth, { NextAuthOptions } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import GoogleProvider from 'next-auth/providers/google';
import prisma from '../lib/prisma';
import { db } from './db';

const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;
const SECRET = process.env.SECRET!;

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db as any),
  secret: SECRET,
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    GoogleProvider({
      clientId: GOOGLE_CLIENT_ID,
      clientSecret: GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async session({ token, session }) {
      if (token) {
        //@ts-ignore
        session.user.id = token.id;
        //@ts-ignore
        session.user.name = token.name;
        //@ts-ignore
        session.user.email = token.email;
        //@ts-ignore
        session.user.image = token.picture;
      }

      return session;
    },
    async jwt({ token, user }) {
      const dbUser = await db.user.findFirst({
        where: {
          email: token.email as string,
        },
      });

      if (!dbUser) {
        if (user) {
          token.id = user?.id;
        }
        return token;
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
      };
    },
    async signIn({ account, profile }) {
      if (!profile?.email) {
        throw new Error('No profile email');
      }

      await prisma.user.upsert({
        where: {
          email: profile.email,
        },
        create: {
          email: profile.email,
          name: profile.name || '',
        },
        update: {
          name: profile.name || '',
        },
      });

      return true;
    },
  },
};

export default NextAuth(authOptions);
