import { FC, memo } from 'react';

import { RoutePath } from '@/shared/config/routeConfig/routeConfig';
import { classNames } from '@/shared/lib/classNames/classNames';
import { AppLink } from '@/shared/ui/AppLink/AppLink';
import { Avatar } from '@/shared/ui/Avatar/Avatar';
import { Skeleton } from '@/shared/ui/Skeleton/Skeleton';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';

import { Comment } from '../../model/types/comment';

import cls from './CommentItem.module.scss';

interface CommentItemProps {
  className?: string;
  comment?: Comment;
  isLoading?: boolean;
}

export const CommentItem: FC<CommentItemProps> = memo((props) => {
  const { className, isLoading, comment } = props;

  if (isLoading) {
    return (
      <VStack
        max
        gap='8'
        className={classNames(cls.CommentItem, {}, [className, cls.loading])}
      >
        <div className={cls.header}>
          <Skeleton width={30} height={30} border='50%' />
          <Skeleton height={16} width={100} className={cls.username} />
        </div>
        <Skeleton width='100%' height={50} className={cls.text} />
      </VStack>
    );
  }

  if (!comment) {
    return null;
  }

  return (
    <VStack
      max
      className={classNames(cls.CommentItem, {}, [className])}
    >
      <AppLink
        to={`${RoutePath.profile}/${comment.user.id}`}
        className={cls.header}
      >
        {comment.user.avatar ? (
          <Avatar size={30} src={comment.user.avatar} />
        ) : null}
        <Text className={cls.username} title={comment.user.username} />
      </AppLink>
      <Text className={cls.text} text={comment.text} />
    </VStack>
  );
});
