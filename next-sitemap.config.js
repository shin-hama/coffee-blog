/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://www.coffee-junkie.jp',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  autoLastmod: false,
  exclude: ['/server-sitemap.xml', '/cafes/*', '/blogs/*'], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://www.coffee-junkie.jp/server-sitemap.xml' // <==== Add here
    ]
  }
  // ...other options
}
