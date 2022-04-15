import { VFC } from 'react';
import styled from 'styled-components';

const StSection = styled.section`
  display: flex;
  justify-content: center;
`;

const StForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: nowrap;
    gap: 0px;
    width: 100%;
  }
`;

const StOutputField = styled.textarea`
  color: #90a4ae;
  width: 100%;
  background-color: #ffffff;
  border: solid 2px #f9c1b1;
  border-radius: 5px;
  padding: 10px;
  resize: none;
  height: 500px;
  flex: 1 0 100%;
  &::placeholder {
    opacity: 0.5;
  }
  @media (min-width: 768px) {
    flex: 1 0 500px;
  }
`;

const StInputField = styled(StOutputField)`
  &:focus {
    border: solid 2px #fe5858;
    outline: none;
    box-shadow: 0 0 0.5rem 0.25rem rgba(0, 0, 0, 0.1);
  }
`;

const StTranslateButton = styled.button`
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
  @media (min-width: 768px) {
    flex: 1 0 auto;
  }
`;

export const InputField: VFC = () => {
  return (
    <StSection>
      <StForm method="post">
        <StInputField placeholder="ここに文章を入力してください" required={true} />
        <StTranslateButton type="submit">変換する</StTranslateButton>
        <StOutputField disabled={true} placeholder="ここに変換結果が表示されます" />
      </StForm>
    </StSection>
  );
};
