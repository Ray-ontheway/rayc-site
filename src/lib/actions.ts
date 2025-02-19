import { doLogin, doLogout } from './api/auth';

export async function login(preState: string | undefined, formData: FormData) {
  try {
    const result = await doLogin(
      formData.get('email') as string,
      formData.get('password') as string,
    );
    console.log('Login successful: ', result);
    localStorage.setItem('token', result.data.accessToken);
  } catch (error) {
    if (error instanceof Error) {
      return 'Login failed: ' + error.message;
    }
    throw error;
  }
}

export async function logout() {
  await doLogout();
  console.log('Logout successful');
}
