import styled from "@emotion/styled";
import CSubscription from "@narative/gatsby-theme-novela/src/components/CSubscription";
import Headings from "@narative/gatsby-theme-novela/src/components/Headings";
import Layout from "@narative/gatsby-theme-novela/src/components/Layout";
import Section from "@narative/gatsby-theme-novela/src/components/Section";
import SEO from "@narative/gatsby-theme-novela/src/components/SEO";
import ArticlesList from "@narative/gatsby-theme-novela/src/sections/articles/Articles.List";
import ProjectsList from "@narative/gatsby-theme-novela/src/sections/projects/Projects.List";
import mediaqueries from "@styles/media";
import { graphql, useStaticQuery } from "gatsby";
import React from "react";

const articlesQuery = graphql`
  {
    articles: allArticle(
      sort: { fields: [date, title], order: DESC }
      limit: 1000
    ) {
      edges {
        node {
          id
          slug
          secret
          title
          author
          date(formatString: "MMMM Do, YYYY")
          dateForSEO: date
          timeToRead
          excerpt
          subscription
          body
          hero {
            full: childImageSharp {
              fluid(maxWidth: 944, quality: 100) {
                base64
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
              }
            }
            regular: childImageSharp {
              fluid(maxWidth: 653, quality: 100) {
                base64
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
              }
            }
            narrow: childImageSharp {
              fluid(maxWidth: 457, quality: 100) {
                base64
                aspectRatio
                src
                srcSet
                srcWebp
                srcSetWebp
                sizes
              }
            }
            seo: childImageSharp {
              fixed(width: 1200, quality: 100) {
                src
              }
            }
          }
        }
      }
    }
  }
`;

function normalizeHero(article) {
  let hero = {
    full: {},
    regular: {},
    narrow: {},
    seo: {}
  };

  if (article.hero) {
    hero = {
      full: article.hero.full.fluid,
      regular: article.hero.regular.fluid,
      narrow: article.hero.narrow.fluid,
      seo: article.hero.seo.fixed
    };
  } else {
    console.log("\u001B[33m", `Missing hero for "${article.title}"`);
  }

  return hero;
}

const normalizeArticles = {
  articles: ({ node: article }) => {
    return {
      ...article,
      hero: normalizeHero(article)
    };
  }
};

function SubscribePage() {
  const windowGlobal = typeof window !== "undefined" && window;
  let email;

  if (windowGlobal) {
    const urlParams = new URLSearchParams(windowGlobal.location.search);
    email = urlParams.get("email") || "";
  }

  const results = useStaticQuery(articlesQuery);
  let articles = [];

  results.articles.edges.forEach(article => {
    articles.push(normalizeArticles.articles(article));
  });

  return (
    <Layout>
      <SEO />
      <Section narrow>
        <div style={{ marginTop: "100px" }}>
          <Title>Join our community</Title>
          <Subtitle>
            One email per week containing an article and recent interesting
            updates about our projects
          </Subtitle>

          <Mtop>
            <CSubscription email={email} />
          </Mtop>
        </div>
      </Section>

      <Section narrow>
        <HeadingContainer>
          <Title2>Check out the latest articles</Title2>
        </HeadingContainer>

        <ArticlesList articles={articles} />
      </Section>

      <ProjectsList onSubscription={true}></ProjectsList>
    </Layout>
  );
}

export default SubscribePage;

const HeadingContainer = styled.div`
  margin-top: 100px;
  margin-bottom: 40px;

  ${mediaqueries.desktop`
    width: 80%;
  `}

  ${mediaqueries.tablet`
    width: 100%;
    margin-top: 80px;
  `}
`;

const Title2 = styled(Headings.h2)`
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 1.15;
  color: ${p => p.theme.colors.primary};
  font-family: ${p => p.theme.fonts.sansSerif};

  ${mediaqueries.desktop`
    font-size: 38px
  `}

  ${mediaqueries.tablet`
    line-height: 1.15;
  `}

  ${mediaqueries.phablet`
    font-size: 32px;
    line-height: 1.15;
  `}
`;

const Title = styled(Headings.h1)`
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 1.15;
  color: ${p => p.theme.colors.primary};
  font-family: ${p => p.theme.fonts.sansSerif};
  text-align: center;

  ${mediaqueries.desktop`
    font-size: 38px
  `}

  ${mediaqueries.tablet`
    line-height: 1.15;
  `}

  ${mediaqueries.phablet`
    font-size: 32px;
    line-height: 1.15;
  `}
`;

const Subtitle = styled(Headings.h3)`
  margin-top: 1rem;
  font-weight: 400;
  font-family: ${p => p.theme.fonts.sansSerif};
  text-align: center;
`;

const Mtop = styled.div`
  margin-top: 4rem;
`;
