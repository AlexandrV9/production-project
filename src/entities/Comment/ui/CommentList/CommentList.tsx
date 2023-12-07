import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Text } from 'shared/ui/Text/Text';
import { Comment } from '../../model/types/comment';
import { CommentItem } from '../CommentItem/CommentItem';

import cls from './CommentList.module.scss';

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList: FC<CommentListProps> = memo((props) => {
  const { className, comments, isLoading } = props;

  const { t } = useTranslation('translation');

  if(isLoading) {
    return (
      <div className={classNames(cls.CommentList, {}, [className])}>
        <CommentItem isLoading/>
        <CommentItem isLoading/>
        <CommentItem isLoading/>
      </div>
    )
  }

  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentItem
            isLoading={isLoading}
            comment={comment}
            className={cls.comment}
            key={comment.id}
          />
        ))
      ) : (
        <Text text={t('No_comments')} />
      )}
    </div>
  );
});
