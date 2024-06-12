import { CSSProperties, FC, memo } from 'react';
import { Interpolation, WithAnimated } from '@react-spring/web';

import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Overlay.module.scss';

type StyleAttr = Omit<CSSProperties, 'display' | 'opacity'>;

interface StyleAttrForSpringLib extends StyleAttr {
  display?: Interpolation<number, 'none' | 'block'>;
  opacity?: Interpolation<number, 0 | 1>;
}

interface OverlayProps {
  className?: string;
  onClick?: () => void;
  as?: ReturnType<WithAnimated>;
  style?: StyleAttrForSpringLib;
}

export const Overlay: FC<OverlayProps> = memo((props) => {
  const { className, onClick, as: Component = 'div' } = props;

  return (
    <Component
      className={classNames(cls.Overlay, {}, [className])}
      onClick={onClick}
    />
  );
});
