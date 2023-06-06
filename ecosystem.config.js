module.exports = {
    apps: [
      {
        name: 'next-app',
        script: 'npm',
        args: 'start',
        env: {
          NODE_ENV: 'production',
        },
      },
    ],
  };