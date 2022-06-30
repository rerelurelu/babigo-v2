import { useContext, VFC, memo } from 'react';
import styled from 'styled-components';
import { device } from '../../style/breakpoints';
import { DisplayModal } from '../PageLayout/Footer/Footer';

const StModalOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const StModalContent = styled.div`
  position: relative;
  z-index: 9999;
  width: 87%;
  height: 90%;
  background: #ffffff;
  border-radius: 10px;
  overflow: auto;
  @media ${device.laptop} {
    width: 70%;
    height: 90%;
    max-width: 1400px;
    max-height: 900px;
  }
`;

const TextContainer = styled.div`
  padding: 30px 50px 0px;
  color: #6b6b83;
`;

const StTitle = styled.h1`
  text-align: center;
  font-size: 1.5rem;
  @media ${device.laptop} {
    font-size: 2rem;
  }
`;

const StSubTitle = styled.h2`
  font-size: 1.2rem;
  @media ${device.laptop} {
    font-size: 1.5rem;
  }
`;

const StUl = styled.ul`
  margin-top: 70px;
  @media ${device.laptop} {
    margin-top: 100px;
  }
`;

const StLink = styled.a`
  text-decoration: underline;
  cursor: pointer;
  color: #d14545;
`;

const StLi = styled.li`
  margin-top: 20px;
`;

const StButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 70px auto;
  @media ${device.laptop} {
    position: absolute;
    bottom: 15px;
    width: 100%;
  }
`;

const StCloseButton = styled.button`
  width: 100px;
  height: 40px;
  border-radius: 5px;
  border: none;
  background-color: #f2994a;
  color: #fff;
  cursor: pointer;
`;

export const PrivacyPolicy: VFC = memo(() => {
  const setIsDisplay = useContext(DisplayModal);

  const clickCloseButton = (): void => {
    setIsDisplay(false);
  };

  return (
    <StModalOverlay>
      <StModalContent>
        <TextContainer>
          <StTitle>プライバシーポリシー</StTitle>
          <StUl>
            <StSubTitle>アクセス解析ツールについて</StSubTitle>
            <StLi>
              当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。
              このGoogleアナリティクスはデータの収集のためにCookieを使用しています。
              このデータは匿名で収集されており、個人を特定するものではありません。
            </StLi>
            <StLi>
              この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
              この規約に関しての詳細は
              <StLink
                href="https://marketingplatform.google.com/about/analytics/terms/jp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Googleアナリティクスサービス利用規約
              </StLink>
              のページや
              <StLink href="https://policies.google.com/technologies/ads?hl=ja">
                Googleポリシーと規約ページ
              </StLink>
              をご覧ください。
            </StLi>
          </StUl>
          <StUl>
            <StSubTitle>免責事項</StSubTitle>
            <StLi>
              当ブログは、掲載内容によって生じた損害に対する一切の責任を負いません。
              各コンテンツでは、できる限り正確な情報提供を心がけておりますが、正確性や安全性を保証するものではありません。
              また、リンク先の他サイトで提供される情報・サービスについても、責任を負いかねますのでご了承ください。
            </StLi>
          </StUl>
        </TextContainer>
        <StButtonContainer>
          <StCloseButton onClick={clickCloseButton}>閉じる</StCloseButton>
        </StButtonContainer>
      </StModalContent>
    </StModalOverlay>
  );
});
