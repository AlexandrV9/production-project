import { Fragment, ReactNode, useState } from 'react';
import { Listbox as HListBox } from '@headlessui/react';

import { classNames,Mods } from 'shared/lib/classNames/classNames';

import { Button, ButtonTheme } from '../Button/Button';
import { HStack } from '../Stack';

import cls from './ListBox.module.scss';

interface ListBoxItems {
  value: string;
  content: ReactNode;
  disabled?: boolean;
}

type DropDownDireaction = 'top' | 'bottom';

interface ListBoxProps {
  items?: ListBoxItems[];
  className?: string;
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  readonly?: boolean;
  label?: string;
  direction?: DropDownDireaction;
}

export function ListBox(props: ListBoxProps) {
  const {
    items,
    className,
    value,
    defaultValue,
    onChange,
    readonly,
    label,
    direction = "bottom",
  } = props;

  const optionsClasses = [cls[direction]];

  console.log(value)

  return (
    <HStack gap='4'>
      {label && <span>{label}</span>}
      <HListBox
        as='div'
        value={value}
        onChange={onChange}
        className={classNames(cls.ListBox, {}, [className])}
        disabled={readonly}
      >
        <HListBox.Button as="div">
          <Button
            className={cls.trigger}
            theme={ButtonTheme.OUTLINE}
            disabled={readonly}
          >
            {value ?? defaultValue}
          </Button>
        </HListBox.Button>
        <HListBox.Options className={classNames(cls.options, {}, optionsClasses)}>
          {items?.map((item) => (
            <HListBox.Option
              key={item.value}
              value={item.value}
              disabled={item.disabled}
              as={Fragment}
            >
              {({ active, selected }) => (
                <li
                  className={classNames(cls.item, {
                    [cls.active]: active,
                    [cls.selected]: selected,
                    [cls.disabled]: item.disabled,
                  })}
                >
                  {item.content}
                </li>
              )}
            </HListBox.Option>
          ))}
        </HListBox.Options>
      </HListBox>
    </HStack>
  );
}
