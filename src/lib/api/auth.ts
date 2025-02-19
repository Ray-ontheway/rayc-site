'use server';

const baseURL = process.env.API_URL!;

const RequestApiPath = {
  LOGIN: `${baseURL}/login`,
};

export async function doLogin(username: string, password: string) {
  console.log(RequestApiPath.LOGIN);
  const response = await fetch(RequestApiPath.LOGIN, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });
  return response.json();
}

export async function doLogout(token: string) {
  console.log(`token ${token}`);
  return '';
}
