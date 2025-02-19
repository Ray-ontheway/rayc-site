import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import type { User } from '@/lib/definitions';

async function getUserByEmail(email: string): Promise<User | null> {
  return { id: '1', username: 'admin', email: email, password: '123456' };
}

async function validateUser(
  email: string,
  password: string,
): Promise<User | null> {
  const user = await getUserByEmail(email);
  if (user && user.password === password) {
    console.log('Valid credentials');
    return user;
  } else {
    console.log('Invalid credentials');
    return null;
  }
}

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  providers: [
    Credentials({
      // 认证
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await validateUser(email, password);
          if (!user) return null;
          // const passwordMatch = await bcrypt.compare(password, user.password);
          // if (passwordMatch)
          return user;
        }

        console.log('Invalid Credentials');
        return null;
      },
    }),
  ],
});
