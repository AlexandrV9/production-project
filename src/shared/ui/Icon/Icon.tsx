import { FC, SVGProps, memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Icon.module.scss';

interface IconProps {
  className?: string;
  Svg: FC<SVGProps<SVGSVGElement>>;
  w?: number;
  h?: number;
}

export const Icon: FC<IconProps> = memo((props) => {
  const { className, Svg, w = 20, h = 20 } = props;

  return (
    <Svg
      className={classNames(cls.Icon, {}, [className])}
      width={w}
      height={h}
    />
  );
});
