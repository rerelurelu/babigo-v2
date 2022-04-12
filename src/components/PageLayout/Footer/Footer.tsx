import React from 'react';
import styled from 'styled-components';

// Component style
const StFooter = styled.footer`
  width: 100%;
  bottom: 0;
  position: absolute;
`;

const StFooterText = styled.p`
  text-align: center;
`;

export const Footer: React.VFC = () => {
  return (
    <StFooter>
      <StFooterText>©2021 zoniha</StFooterText>
    </StFooter>
  );
};
