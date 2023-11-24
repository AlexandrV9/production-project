import { FC, memo } from 'react';

import { useCopy } from 'shared/lib/hooks/useCopy';
import { classNames } from 'shared/lib/classNames/classNames';
import IconCopy from 'shared/assets/icons/copy-20-20.svg';
import IconSuccess from 'shared/assets/icons/success-copy-20-20.svg';
import { Button, ButtonTheme } from '../Button/Button';
import { Icon } from '../Icon/Icon';

import cls from './Code.module.scss';

interface CodeProps {
  className?: string;
  text: string;
}

export const Code: FC<CodeProps> = memo((props) => {
  const { className, text } = props;

  const { isCopied, onCopy } = useCopy(text);

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button
        className={cls.btnCopy}
        onClick={onCopy}
        theme={ButtonTheme.CLEAR}
      >
        <Icon
          Svg={isCopied ? IconSuccess : IconCopy}
          className={cls.copyIcon}
        />
      </Button>
      <code>{text}</code>
    </pre>
  );
});
