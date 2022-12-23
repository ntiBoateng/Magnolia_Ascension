const withTM = require('next-transpile-modules')(['@magnolia-ea/uxf-react', '@magnolia-ea/uxf-core']);
const withPlugins = require('next-compose-plugins');
module.exports =withPlugins([withTM], {
  reactStrictMode: true,
  assetPrefix: 'http://localhost:3000',
})
