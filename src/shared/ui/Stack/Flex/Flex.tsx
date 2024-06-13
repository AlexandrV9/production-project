import {
  createElement,
  DetailedHTMLProps,
  FC,
  HTMLAttributes,
  ReactNode,
} from 'react';

import { classNames,Mods } from '@/shared/lib/classNames/classNames';

import cls from './Flex.module.scss';

type FlexAlign = 'center' | 'start' | 'end';
type FlexJustify = 'center' | 'start' | 'end' | 'between';
type FlexDirection = 'row' | 'column';
type FlexGap = '4' | '8' | '16' | '32';

const directionClasses: Record<FlexDirection, string> = {
  row: cls.directionRow,
  column: cls.directionColumn,
};

const alignClasses: Record<FlexAlign, string> = {
  start: cls.alignStart,
  end: cls.alignEnd,
  center: cls.alignCenter,
};

const justifyClasses: Record<FlexJustify, string> = {
  start: cls.justifyStart,
  end: cls.justifyEnd,
  center: cls.justifyCenter,
  between: cls.justifyBetween,
};

const gapClasses: Record<FlexGap, string> = {
  '4': cls.gap4,
  '8': cls.gap8,
  '16': cls.gap16,
  '32': cls.gap32,
};

type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;
export interface FlexProps extends DivProps {
  className?: string;
  children: ReactNode;
  align?: FlexAlign;
  justify?: FlexJustify;
  direction?: FlexDirection;
  gap?: FlexGap;
  max?: boolean;
  tag?: keyof HTMLElementTagNameMap;
}

export const Flex: FC<FlexProps> = (props) => {
  const {
    className,
    children,
    align = 'center',
    justify = 'start',
    direction = 'row',
    gap = '4',
    max,
    tag = 'div',
    ...otherProps
  } = props;

  const clasess = [
    className,
    alignClasses[align],
    justifyClasses[justify],
    directionClasses[direction],
    gap && gapClasses[gap],
  ];

  const mods: Mods = {
    [cls.max]: max,
  };

  return createElement(
    tag,
    {
      className: classNames(cls.Flex, mods, clasess),
      ...otherProps,
    },
    children,
  );
};
