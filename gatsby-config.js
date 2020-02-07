require("dotenv").config();

module.exports = {
  siteMetadata: {
    title: `Lunadio`,
    name: `Lunadio`,
    siteUrl: `https://lunadio.com`,
    description: `A community of indie hackers documenting our journey`,
    hero: {
      heading: `A community of indie hackers documenting our&nbsp;journey`,
      maxWidth: 652
    },
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/lunadio`
      },
      {
        name: `instagram`,
        url: `https://instagram.com/teamlunadio`
      }
    ]
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        rootPath: "/",
        basePath: "/",
        authorsPage: false,
        sources: {
          local: false,
          contentful: true
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    }
  ]
};
