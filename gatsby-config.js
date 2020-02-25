const emoji = require("remark-emoji");

module.exports = {
  siteMetadata: {
    title: `ETC Core`,
    description: ``,
    logoUrl: `https://user-images.githubusercontent.com/10556209/75176062-0f31f880-56f9-11ea-8250-33a50c83dfab.png`,
    primaryColor: `#4dae4d`, //material-ui primary color
    secondaryColor: `#f50057`, //material-ui secondary colo
    author: ``,
    menuLinks: [
      {
        name: 'Home',
        link: '/',
        ignoreNextPrev: true
      },
      {
        name: 'Projects',
        link: '/projects'
      }
    ],
    footerLinks: [
      {
        name: 'Github',
        link: 'https://github.com/etclabscore/'
      }
    ]
  },
  plugins: [
    "@etclabscore/gatsby-theme-pristine",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ETC-Core-site`,
        short_name: `ETC-Core-site`,
        start_url: `/`,
        background_color: `transparent`,
        theme_color: `#3f51b5`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    }
  ],
}
