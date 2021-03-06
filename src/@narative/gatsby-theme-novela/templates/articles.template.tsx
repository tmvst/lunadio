import Layout from "@components/Layout";
import Paginator from "@components/Navigation/Navigation.Paginator";
import Section from "@components/Section";
import SEO from "@components/SEO";
import Subscription from "@components/Subscription";
import styled from "@emotion/styled";
import { Template } from "@types";
import React from "react";
import ArticlesHero from "../sections/articles/Articles.Hero";
import ArticlesList from "../sections/articles/Articles.List";
import ProjectsList from "../sections/projects/Projects.List";

const ArticlesPage: Template = ({ location, pageContext }) => {
  const articles = pageContext.group;
  const authors = pageContext.additionalContext.authors;

  return (
    <Layout>
      {/* TODO: Default social share image */}
      <SEO pathname={location.pathname} />
      <ArticlesHero authors={authors} />
      <ProjectsList></ProjectsList>
      <Section narrow>
        <ArticlesList articles={articles} />
        <ArticlesPaginator show={pageContext.pageCount > 1}>
          <Paginator {...pageContext} />
        </ArticlesPaginator>
      </Section>
      <StyledSubscription>
        <Subscription />
      </StyledSubscription>
    </Layout>
  );
};

export default ArticlesPage;

const ArticlesPaginator = styled.div<{ show: boolean }>`
  ${p => p.show && `margin-top: 95px;`}
`;

const StyledSubscription = styled.div`
  margin-top: 100px;
`;
