import { FC, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { VStack } from 'shared/ui/Stack';
import { Text } from 'shared/ui/Text/Text';

import { Comment } from '../../model/types/comment';
import { CommentItem } from '../CommentItem/CommentItem';

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
      <VStack className={classNames("", {}, [className])}>
        <CommentItem isLoading/>
        <CommentItem isLoading/>
        <CommentItem isLoading/>
      </VStack>
    )
  }

  return (
    <VStack gap='16' max className={classNames("", {}, [className])}>
      {comments?.length ? (
        comments.map((comment) => (
          <CommentItem
            isLoading={isLoading}
            comment={comment}
            key={comment.id}
          />
        ))
      ) : (
        <Text text={t('No_comments')} />
      )}
    </VStack>
  );
});
