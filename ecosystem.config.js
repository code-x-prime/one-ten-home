module.exports = {
  apps: [
    {
      name: 'one-ten-home',
      script: 'pnpm',
      args: 'start',
      cwd: '/root/one-ten-home',

      env: {
        NODE_ENV: 'production',
        PORT: 7001,
      },
    },
  ],
}
