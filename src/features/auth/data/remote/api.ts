const BASE_URL = ''; // Mirage server

export async function login(email: string, password: string): Promise<string> {
  const response = await fetch(`${BASE_URL}/api/login`, {
    method: 'POST',
    body: JSON.stringify({ email, password })
  });
  const data = await response.json();
  const res = await Promise.resolve(data.body);
  return res;
}

export async function signup(email: string, password: string): Promise<string> {
  const response = await fetch(`${BASE_URL}/api/signup`, {
    method: 'POST',
    body: JSON.stringify({ email, password })
  });
  const data = await response.json();
  const res = await Promise.resolve(data.body);
  return res;
}

export async function forgotPassword(email: string): Promise<string> {
  const response = await fetch(`${BASE_URL}/api/forgotPassword`, {
    method: 'POST',
    body: JSON.stringify({ email })
  });
  const data = await response.json();
  const res = await Promise.resolve(data.body);
  return res;
}
