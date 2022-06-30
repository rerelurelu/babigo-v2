import { VFC } from 'react';
import styled from 'styled-components';
import { useWindowWidth } from '@react-hook/window-size';

import { InputField } from '../InputField/InputField';
import { device } from '../../../style/breakpoints';
import { WIDTH_THRESHOLD } from '../../../style/breakpoints';

export const TextForm: VFC = () => {
  const width: number = useWindowWidth();
  const isMobileWindow: boolean = width <= WIDTH_THRESHOLD;

  return (
    <StFormContainer>
      <StSection>
        {isMobileWindow ? (
          <InputField />
        ) : (
          <StTextareaContainer>
            <InputField />
          </StTextareaContainer>
        )}
      </StSection>
    </StFormContainer>
  );
};

// Component style
const StFormContainer = styled.div`
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 3rem;
  width: 90%;
  border-radius: 0.5rem;
`;

const StSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  max-width: 1400px;
  margin: 0 auto;
  height: 100%;
`;

const StTextareaContainer = styled.div`
  @media ${device.laptop} {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    gap: 0px;
    width: 100%;
  }
`;
