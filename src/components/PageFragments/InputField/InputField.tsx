import { useState, VFC } from 'react';
import styled from 'styled-components';

import { fetchHiragana } from '../../../api/hiraganaTranslator';
import { device } from '../../../style/breakpoints';
import { babiConverter } from '../../../translator/babiTranslator';

const StOutputField = styled.textarea`
  color: #90a4ae;
  width: 100%;
  background-color: #ffffff;
  border: solid 2px #f9c1b1;
  border-radius: 5px;
  padding: 10px;
  resize: none;
  height: 300px;
  flex: none;
  font-size: 16px;
  letter-spacing: 1.6px;
  line-height: 1.3;
  &::placeholder {
    opacity: 0.5;
  }
  @media ${device.laptop} {
    flex: 1 0 500px;
    height: 400px;
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
  @media ${device.laptop} {
    flex: 1 0 auto;
  }
`;

export const InputField: VFC = () => {
  const [inputText, setInputText] = useState<string>('');
  const [outputText, setOutputText] = useState<string>('');

  const handleSubmit = async () => {
    if (inputText === '') {
      alert('文章を入力してください✍️');
    } else {
      const hiragana: string = await fetchHiragana(inputText);
      const babigo: string = babiConverter(hiragana);
      setOutputText(babigo);
    }
  };

  const handleChange = (e: any): void => {
    setInputText(e.target.value);
  };

  return (
    <>
      <StInputField
        placeholder="ここに文章を入力してください"
        required={true}
        onChange={handleChange}
        value={inputText}
      />
      <StTranslateButton type="submit" onClick={handleSubmit}>
        変換する
      </StTranslateButton>
      <StOutputField
        disabled={true}
        placeholder="ここに変換結果が表示されます"
        value={outputText}
      />
    </>
  );
};
