import { FC, SVGProps, memo } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Icon.module.scss';

interface IconProps {
  className?: string;
  Svg: FC<SVGProps<SVGSVGElement>>;
}

export const Icon: FC<IconProps> = memo((props) => {
  const { className, Svg } = props;

  return <Svg className={classNames(cls.Icon, {}, [className])} />;
});
