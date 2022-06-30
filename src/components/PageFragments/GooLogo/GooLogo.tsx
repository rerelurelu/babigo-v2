import { memo, VFC } from 'react';
import styled from 'styled-components';

import { device } from '../../../style/breakpoints';

export const GooLogo: VFC = memo(() => {
  return (
    <>
      <a href="http://www.goo.ne.jp/" target="_blank" rel="noopener noreferrer">
        <StGooLogo src="//u.xgoo.jp/img/sgoo.png" alt="supported by goo" title="supported by goo" />
      </a>
    </>
  );
});

// Component style
const StGooLogo = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  max-width: 100px;
  vertical-align: bottom;
  z-index: 99;
  @media ${device.laptop} {
    max-width: 200px;
  }
`;
