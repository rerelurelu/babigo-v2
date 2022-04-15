import { VFC, ReactNode } from 'react';
import styled from 'styled-components';
import { Props } from '../../../types/props/props';

// Component style
const StMainContainer = styled.div`
  position: relative;
  color: #ffffff;
  background: linear-gradient(315deg, #fcd181 0%, #e79087 74%);
  min-height: 100vh;
  padding-bottom: 30px;
`;

const StTitle = styled.h1`
  font-size: 2.25rem;
  line-height: 2;
  text-align: center;
`;

export const Layout: VFC<Props> = ({ children }) => {
  return (
    <StMainContainer>
      <StTitle>バビ語変換サイト</StTitle>
      {children}
    </StMainContainer>
  );
};
