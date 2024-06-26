import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Text, TextAlign, TextSize } from '@/shared/ui/Text/Text';

import { ArticleImageBlock } from '../../model/types/article';

import cls from './ArticleImageBlockComponent.module.scss';

interface ArticleImageBlockComponentProps {
  className?: string;
  block: ArticleImageBlock;
}

export const ArticleImageBlockComponent: FC<ArticleImageBlockComponentProps> =
  memo((props) => {
    const { className, block } = props;
    const { t } = useTranslation();

    return (
      <div
        className={classNames(cls.articleImageBlockComponent, {}, [className])}
      >
        <img src={block.src} className={cls.img} alt={block.title} />
        {block.title && <Text text={block.title} align={TextAlign.CENTER} size={TextSize.M}/>}
      </div>
    );
  });
