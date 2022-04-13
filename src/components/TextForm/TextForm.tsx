import { VFC } from 'react';
import styled from 'styled-components';

const BABIGO_DESCRIPTION: string = `https://www.zoniha.icu/blog/babigo-translator#babigo`;

// Component style
const StFormContainer = styled.div`
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 3rem;
  width: 90%;
  border-radius: 0.5rem;
`;

const StBabigoDescriptionContainer = styled.div`
  text-align: right;
  margin-bottom: 0.125rem;
`;

const StBabigoDescriptionLink = styled.a`
  text-decoration-line: underline;
  color: #333c83;
`;

export const TextForm: VFC = () => {
  return (
    <StFormContainer>
      <StBabigoDescriptionContainer>
        <StBabigoDescriptionLink
          href={BABIGO_DESCRIPTION}
          target="_blank"
          rel="noopener noreferrer"
        >
          バビ語とは？
        </StBabigoDescriptionLink>
      </StBabigoDescriptionContainer>
    </StFormContainer>
  );
};
