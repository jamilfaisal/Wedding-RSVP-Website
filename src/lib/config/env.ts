export function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(
      `Missing required environment variable '${name}'. Set it in your deployment environment (e.g. .env.local, Vercel project settings).`
    );
  }
  return value;
}

export const JWT_SECRET = () => requireEnv('JWT_SECRET');
export const WEDDING_PASSWORD = () => requireEnv('WEDDING_PASSWORD');
