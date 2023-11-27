import { FC, memo } from 'react';

import { Avatar } from 'shared/ui/Avatar/Avatar';
import { Text } from 'shared/ui/Text/Text';
import { Skeleton } from 'shared/ui/Skeleton/Skeleton';
import { classNames } from 'shared/lib/classNames/classNames';
import { Comment } from '../../model/types/comment';

import cls from './CommentItem.module.scss';

interface CommentItemProps {
  className?: string;
  comment: Comment;
  isLoading?: boolean;
}

export const CommentItem: FC<CommentItemProps> = memo((props) => {
  const { className, isLoading, comment } = props;

  if (isLoading) {
    return (
      <div className={classNames(cls.CommentItem, {}, [className])}>
        <div className={cls.header}>
          <Skeleton width={30} height={30} border='50%' />
          <Skeleton height={16} width={100} className={cls.username}/>
        </div>
        <Skeleton width='100%' height={50} className={cls.text}/>
      </div>
    );
  }

  return (
    <div className={classNames(cls.CommentItem, {}, [className])}>
      <div className={cls.header}>
        {comment.user.avatar ? (
          <Avatar size={30} src={comment.user.avatar} />
        ) : null}
        <Text className={cls.username} title={comment.user.username} />
      </div>
      <Text className={cls.text} text={comment.text} />
    </div>
  );
});
