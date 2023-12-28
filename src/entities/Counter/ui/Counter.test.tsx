import { fireEvent, screen } from '@testing-library/react';

import { componentRender } from 'shared/lib/tests/componentRender/componentRender';

import Counter from './Counter';

describe('Counter', () => {
  test('render', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } }, 
    });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  test('increment', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    const btnIncrement = screen.getByTestId('increment-btn');
    fireEvent.click(btnIncrement);
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test('decrement', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    const btnDecrement = screen.getByTestId('decrement-btn');
    fireEvent.click(btnDecrement);
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
