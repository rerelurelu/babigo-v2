import { VFC } from 'react';
import { InputField } from '../PageFragments/InputField/InputField';
import { TextFormContainer } from '../PageFragments/TextFormContainer/TextFormContainer';

export const TextForm: VFC = () => {
  return (
    <TextFormContainer>
      <InputField />
    </TextFormContainer>
  );
};
