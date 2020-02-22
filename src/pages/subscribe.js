import styled from "@emotion/styled";
import CSubscription from "@narative/gatsby-theme-novela/src/components/CSubscription";
import Headings from "@narative/gatsby-theme-novela/src/components/Headings";
import Layout from "@narative/gatsby-theme-novela/src/components/Layout";
import Section from "@narative/gatsby-theme-novela/src/components/Section";
import SEO from "@narative/gatsby-theme-novela/src/components/SEO";
import ProjectsList from "@narative/gatsby-theme-novela/src/sections/projects/Projects.List";
import mediaqueries from "@styles/media";
import React from "react";

function SubscribePage() {
  const urlParams = new URLSearchParams(window.location.search);
  const email = urlParams.get("email");

  return (
    <Layout>
      <SEO />
      <Section>
        <div style={{ marginTop: "100px" }}>
          <Title>Join our community</Title>
          <Subtitle>
            One email per week containing an article and recent interesting
            updates about our projects
          </Subtitle>

          <Mtop>
            <CSubscription email={email} />
          </Mtop>

          <ProjectsList onSubscription={true}></ProjectsList>
        </div>
      </Section>
    </Layout>
  );
}

export default SubscribePage;

const Title = styled(Headings.h2)`
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
