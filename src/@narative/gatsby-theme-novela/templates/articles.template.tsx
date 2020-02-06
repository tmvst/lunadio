import Layout from "@components/Layout";
import Paginator from "@components/Navigation/Navigation.Paginator";
import Section from "@components/Section";
import SEO from "@components/SEO";
import styled from "@emotion/styled";
import { Template } from "@types";
import React from "react";
import ArticlesHero from "../sections/articles/Articles.Hero";
import ArticlesList from "../sections/articles/Articles.List";

const ArticlesPage: Template = ({ location, pageContext }) => {
  const articles = pageContext.group;
  const authors = pageContext.additionalContext.authors;

  return (
    <Layout>
      <SEO pathname={location.pathname} />
      <ArticlesHero authors={authors} />
      <Section narrow>
        <ArticlesList articles={articles} />
        <ArticlesPaginator show={pageContext.pageCount > 1}>
          <Paginator {...pageContext} />
        </ArticlesPaginator>
      </Section>
    </Layout>
  );
};

export default ArticlesPage;

const ArticlesPaginator = styled.div<{ show: boolean }>`
  ${p => p.show && `margin-top: 95px;`}
`;
