import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Select } from 'shared/ui/Select/Select';
import { Currency } from '../../model/types/currency';

interface CurrencySelectProps {
  className?: string;
  value?: Currency;
  onChange?: (value: Currency) => void;
  readonly?: boolean;
}

const options = [
  { value: Currency.RUB, content: Currency.RUB },
  { value: Currency.EUR, content: Currency.EUR },
  { value: Currency.USD, content: Currency.USD },
];

export const CurrencySelect: FC<CurrencySelectProps> = memo((props) => {
  const { className, value, onChange, readonly } = props;

  const { t } = useTranslation('translation');

  const handleChange = useCallback((value: string) => {
    onChange?.(value as Currency)
  },[onChange])

  return (
    <Select
      label={t('specify_currency')}
      options={options}
      value={value}
      readonly={readonly}
      onChange={handleChange}
    />
  );
});
