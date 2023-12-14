import { ChangeEvent, useMemo } from 'react';

import { Mods, classNames } from 'shared/lib/classNames/classNames';
import { typedMemo } from 'shared/lib/hooks/typedMemo';

import cls from './Select.module.scss';

export interface SelectOtion<T extends string> {
  value: T;
  content: string;
}

interface SelectProps<T extends string> {
  className?: string;
  label?: string;
  options?: SelectOtion<T>[];
  value?: T;
  readonly?: boolean;
  onChange?: (value: T) => void;
}

export const Select = typedMemo(<T extends string>(props: SelectProps<T>) => {
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
    onChange?.(e.target.value as T);
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
