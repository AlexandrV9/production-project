import { FC, memo, SVGProps } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import cls from './Icon.module.scss';

interface IconProps {
  className?: string;
  Svg: FC<SVGProps<SVGSVGElement>>;
  w?: number;
  h?: number;
  inverted?: boolean;
}

export const Icon: FC<IconProps> = memo((props) => {
  const { className, Svg, w = 20, h = 20, inverted } = props;

  return (
    <Svg
      className={classNames(
        inverted ? cls['inverted-primary'] : cls.primary,
        {},
        [className],
      )}
      width={w}
      height={h}
    />
  );
});
