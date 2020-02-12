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
      },
      {
        name: `facebook`,
        url: `https://www.facebook.com/lunadioteam/`
      },
      {
        name: `linkedin`,
        url: `https://www.linkedin.com/company/lunadio`
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
        mailchimp: true,
        authorsPage: false,
        sources: {
          local: false,
          contentful: true
        },
        articlePermalinkFormat: "blog/:slug"
      }
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://lunadio.us4.list-manage.com/subscribe/post?u=154d76983d1e4b50ed11f4385&amp;id=6c0ec8d525"
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Lunadio`,
        short_name: `Lunadio`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`
      }
    }
  ]
};
