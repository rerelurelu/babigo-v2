import { VFC } from 'react';
import styled from 'styled-components';

const REPO_URL: string = `https://github.com/zoniha/babigo-v2`;

// Component style
const StFooter = styled.footer`
  width: 100%;
  bottom: 15px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StFooterText = styled.p`
  margin-top: 20px;
  font-size: 15px;
`;

const StLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StLink = styled.a`
  text-decoration: underline;
  cursor: pointer;
  color: #d14545;
  margin-right: 20px;
  font-size: 15px;
`;

export const Footer: VFC = () => {
  return (
    <StFooter>
      <StLinkContainer>
        <StLink href="#" target="_blank" rel="noopener noreferrer">
          Privacy Policy
        </StLink>
        <StLink href={REPO_URL} target="_blank" rel="noopener noreferrer">
          GitHub
        </StLink>
      </StLinkContainer>
      <StFooterText>©2021 zoniha</StFooterText>
    </StFooter>
  );
};
