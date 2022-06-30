import { render, screen } from '@testing-library/react';

import { InputField } from '../components/PageFragments/InputField/InputField';

describe('Test TextForm Component', () => {
  test('render form with 1 button', async () => {
    render(<InputField />);
    const buttonList = await screen.findAllByRole('button');
    expect(buttonList).toHaveLength(1);
  });
});

export {};
