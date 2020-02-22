import Headings from "@components/Headings";
import Section from "@components/Section";
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import mediaqueries from "@styles/media";
import React from "react";
import { useColorMode } from "theme-ui";
import banneriumLogo from "../../../../assets/images/bannerium.svg";
import feedbearLogo from "../../../../assets/images/feedbear.png";
import prezeLogoWhite from "../../../../assets/images/preze-white.png";
import prezeLogo from "../../../../assets/images/preze.png";

const ProjectsList = ({ onSubscription }) => {
  const [colorMode] = useColorMode();
  const isDark = colorMode === `dark`;

  return (
    <Section relative id="Projects__Hero">
      <HeadingContainer>
        <Title>Currently working on these projects</Title>
      </HeadingContainer>
      <ProjectsWrapper>
        <ProjectItem
          name="FeedBear"
          excerpt="The easiest way to&nbsp;manage feedback from your&nbsp;customers"
          link="https://www.feedbear.com/"
          logoUrl={feedbearLogo}
        ></ProjectItem>
        <ProjectItem
          name="Bannerium"
          excerpt="Stop wasting time when creating ad&nbsp;campaigns in&nbsp;Photoshop"
          link="https://bannerium.com/"
          logoUrl={banneriumLogo}
        ></ProjectItem>
        <ProjectItem
          name="Preze"
          excerpt="Build interactive presentations for your&nbsp;classroom or&nbsp;conference"
          link="https://www.prezelive.com/"
          logoUrl={isDark ? prezeLogoWhite : prezeLogo}
        ></ProjectItem>
      </ProjectsWrapper>

      {!onSubscription && (
        <HeadingContainer>
          <Title>And writing about building a business</Title>
        </HeadingContainer>
      )}
    </Section>
  );
};

export default ProjectsList;

const ProjectItem = ({ name, excerpt, link, logoUrl }) => {
  return (
    <ProjectItemWrapper>
      <ProjectLogo src={logoUrl}></ProjectLogo>
      <ProjectTitle>{name}</ProjectTitle>
      <ProjectExcerpt>{excerpt}</ProjectExcerpt>
      <ProjectLink href={link} target="_blank">
        Check out {name} →
      </ProjectLink>
    </ProjectItemWrapper>
  );
};

const limitToTwoLines = css`
  text-overflow: ellipsis;
  overflow-wrap: normal;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  white-space: normal;
  overflow: hidden;

  ${mediaqueries.phablet`
    -webkit-line-clamp: 3;
  `}
`;

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

const Title = styled(Headings.h2)`
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

const ProjectLogo = styled.img`
  max-height: 6rem;
  margin-bottom: 1rem;
`;

const ProjectTitle = styled(Headings.h2)`
  font-size: 21px;
  font-family: ${p => p.theme.fonts.serif};
  margin-bottom: 8px;
  transition: color 0.3s ease-in-out;

  ${mediaqueries.desktop`
    margin-bottom: 15px;
  `}

  ${mediaqueries.tablet`
    font-size: 24px;
  `}

  ${mediaqueries.phablet`
    font-size: 22px;
    margin-bottom: 10px;
    -webkit-line-clamp: 3;
  `}
`;

const ProjectsWrapper = styled.div`
  display: flex;

  ${mediaqueries.tablet`
    flex-wrap: wrap;
  `}
`;

const ProjectItemWrapper = styled.div`
  flex-basis: 33%;
  padding-right: 1rem;

  &:last-child {
    padding-right: 0;
  }

  ${mediaqueries.tablet`
    flex-basis: 100%;
    margin-bottom: 4rem;
  `}
`;

const ProjectExcerpt = styled.p`
  font-size: 16px;
  margin-bottom: 10px;
  color: ${p => p.theme.colors.grey};
  ${limitToTwoLines}

  ${mediaqueries.desktop`
    display: -webkit-box;
  `}

  ${mediaqueries.phablet`
    margin-bottom; 15px;
  `}

  ${mediaqueries.phablet`
    max-width: 100%;
    margin-bottom: 20px;
    -webkit-line-clamp: 3;
  `}
`;

const ProjectLink = styled.a`
  color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fonts.sansSerif};
  border-bottom: 1px solid transparent;
  transition: all 0.2s ease-in-out;

  &:hover,
  &:focus {
    border-bottom: 1px solid ${p => p.theme.colors.accent};
  }
`;
