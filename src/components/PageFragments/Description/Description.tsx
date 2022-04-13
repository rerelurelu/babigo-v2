import { VFC } from 'react';
import styled from 'styled-components';

// Component style
const StDescriptionContainer = styled.div`
  margin-top: 4rem;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  @media (min-width: 768px) {
    margin-left: 4rem;
    margin-right: 4rem;
    text-align: justify;
  }
`;

const StText = styled.p`
  margin-top: 1rem;
`;

export const Description: VFC = () => {
  return (
    <StDescriptionContainer>
      <p>日本語文章をバビ語に変換できます。</p>
      <StText>例：おはよう→おぼはばよぼうぶ</StText>
    </StDescriptionContainer>
  );
};
