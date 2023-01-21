/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://www.coffee-junkie.jp',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/server-sitemap.xml'], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://example.com/server-sitemap.xml' // <==== Add here
    ]
  }
  // ...other options
}
