'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

export async function authenticate(
  preState: string | undefined,
  formData: FormData,
) {
  try {
    console.log('formData', formData);
    const result = await signIn('credentials', formData);
    console.log('Sign in successful: ', result);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.message) {
        case 'CredentialsSignin':
          console.log('Invalid credentials');
          return 'Invalid Credentials';
        default:
          console.log('Something went wrong');
          return 'Something went wrong';
      }
    }
    throw error;
  }
}
