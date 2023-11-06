import { ChangeEvent, FC, memo, useMemo } from 'react';

import { Mods, classNames } from 'shared/lib/classNames/classNames';

import cls from './Select.module.scss';

export interface SelectOtion {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOtion[];
  value?: string;
  readonly?: boolean;
  onChange?: (value: string) => void;
}

export const Select: FC<SelectProps> = memo((props) => {
  const { className, label, options, value, readonly, onChange } = props;

  const optionsList = useMemo(
    () =>
      options?.map((opt) => (
        <option className={cls.option} value={opt.value} key={opt.value}>
          {opt.content}
        </option>
      )),
    [options],
  );

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  const mods: Mods = {};

  return (
    <div className={classNames(cls.Wrapper, mods, [className])}>
      {label && <span className={cls.label}>{`${label}>`}</span>}
      <select
        value={value}
        className={cls.select}
        disabled={readonly}
        onChange={handleChange}
      >
        {optionsList}
      </select>
    </div>
  );
});
