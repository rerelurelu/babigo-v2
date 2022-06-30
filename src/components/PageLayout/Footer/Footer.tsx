import { createContext, Dispatch, SetStateAction, useState, VFC } from 'react';
import styled from 'styled-components';
import { GooLogo } from '../../PageFragments/GooLogo/GooLogo';
import { PrivacyPolicy } from '../../PrivacyPolicyModal/PrivacyPolicyModal';

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

// Context
export const DisplayModal = createContext({} as Dispatch<SetStateAction<boolean>>);

export const Footer: VFC = () => {
  const [isDisplay, setIsDisplay] = useState<boolean>(false);

  const handleClick = (): void => {
    setIsDisplay(true);
  };

  return (
    <>
      <DisplayModal.Provider value={setIsDisplay}>
        {isDisplay ? <PrivacyPolicy /> : null}
      </DisplayModal.Provider>
      <StFooter>
        <StLinkContainer>
          <StLink onClick={handleClick} target="_blank" rel="noopener noreferrer">
            Privacy Policy
          </StLink>
          <StLink href={REPO_URL} target="_blank" rel="noopener noreferrer">
            GitHub
          </StLink>
        </StLinkContainer>
        <StFooterText>©2021 zoniha</StFooterText>
        <GooLogo />
      </StFooter>
    </>
  );
};
