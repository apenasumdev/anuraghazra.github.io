const meta = {
  // Metadata
  siteTitle: 'Vinicius Souza - Portfolio & Blog',
  siteDescription:
    'Souzx17 - Portfolio & Blog para atualizar seguidores sobre novidades de apis e outros projetos.',
  siteTitleAlt: 'souzx17',
  siteShortName: 'souzx17',
  siteUrl: 'https://viniciusfolio.tk', // No trailing slash!
};

const social = {
  siteLogo: `src/static/logo.png`,
  siteBanner: `${meta.siteUrl}/images/social-banner.png`,
  twitter: '@ss',
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
