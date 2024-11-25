import { execSync } from 'child_process';

try {
  console.log('Running Nuxt app script...');
  const env = process.env.NODE_ENV || 'development';

  if (env === 'production') {
    console.log('Starting in production mode...');
    execSync('yarn install', { stdio: 'inherit' });
    execSync('yarn build', { stdio: 'inherit' });
    execSync('yarn start', { stdio: 'inherit' });
  } else {
    console.log('Starting in development mode...');
    execSync('yarn install', { stdio: 'inherit' });
    execSync('yarn dev', { stdio: 'inherit' });
  }
} catch (err) {
  console.error('Error occurred:', err.message);
  process.exit(1);
}
