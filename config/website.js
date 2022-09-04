const meta = {
  // Metadata
  siteTitle: 'Vinicius Portfolio & Blog',
  siteDescription:
    'Portfoliiio e blog para compartilhar ideias, projetos e novidades.',
  siteTitleAlt: 'Anurag Hazra',
  siteShortName: 'Anurag Hazra',
  siteUrl: 'https://viniciusfolio-one.vercel.app', // No trailing slash!
};

const social = {
  siteLogo: `src/static/logo.svg`,
  siteBanner: `${meta.siteUrl}/images/social-banner.png`,
  twitter: '@anuraghazru',
};

const website = {
  ...meta,
  ...social,
  disqusShortName: 'viniciusfolio',
  googleAnalyticsID: 'UA-119972196-1',
  // Manifest
  themeColor: '#e00000',
  backgroundColor: '#e00000',
};

module.exports = website;
