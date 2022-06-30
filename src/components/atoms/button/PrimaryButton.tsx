import { type } from 'os';
import { memo, VFC } from 'react';
import styled from 'styled-components';

import { device } from '../../../style/breakpoints';
import { Props } from '../../../types/props/props';

export const PrimaryButton: VFC<ButtonProps> = memo((props) => {
  const { children, onClick } = props;
  return (
    <StPrimaryButton type="submit" onClick={onClick}>
      {children}
    </StPrimaryButton>
  );
});

const StPrimaryButton = styled.button`
  background-color: #d93965;
  border: solid 0.0625rem #ee8c68;
  font-weight: 600;
  padding: 1rem 0.5rem;
  margin: auto 2rem;
  max-width: 100px;
  border-radius: 10px;
  color: #ffffff;
  box-shadow: 0 0.1875rem 0.1875rem 0 rgba(0, 0, 0, 0.1);
  &:hover {
    cursor: pointer;
  }
  &:active {
    box-shadow: 0 0;
    background-color: #d93965b3;
  }
  @media ${device.laptop} {
    flex: 1 0 auto;
  }
`;

type ButtonProps = Props & {
  onClick: () => void;
};
