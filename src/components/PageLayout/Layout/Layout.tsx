import { FC, ReactNode } from 'react';
import styled from 'styled-components';

// Type
type Props = {
  children: ReactNode;
};

// Component style
const StMainContainer = styled.div`
  position: relative;
  color: #ffffff;
  background: linear-gradient(315deg, #a7acd9 0%, #9e8fb2 74%);
  min-height: 100vh;
`;

const StTitle = styled.h1`
  font-size: 2.25rem;
  line-height: 2;
  text-align: center;
`;

export const Layout: FC<Props> = ({ children }) => {
  return (
    <StMainContainer>
      <StTitle>バビ語変換サイト</StTitle>
      {children}
    </StMainContainer>
  );
};
