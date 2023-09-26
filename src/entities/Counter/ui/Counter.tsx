import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

import { counterActions } from '../model/slice/counterSlice';
import { getCounterValue } from '../model/selectors/getCountetValue/getCounterValue';

interface CounterProps {
  className?: string;
}

const Counter: FC<CounterProps> = (props) => {
  const { className } = props;

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const value = useSelector(getCounterValue);

  const increment = () => {
    dispatch(counterActions.increment());
  };

  const deccrement = () => {
    dispatch(counterActions.decrement());
  };

  return (
    <div>
      <h1 data-testid='value-title'>{value}</h1>
      <Button onClick={increment} data-testid='increment-btn'>
        {t('increment')}
      </Button>
      <Button onClick={deccrement} data-testid='decrement-btn'>
        {t('decrement')}
      </Button>
    </div>
  );
};

export default Counter;
