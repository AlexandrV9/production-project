import { FC, memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { classNames } from 'shared/lib/classNames/classNames';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/ui/Input';
import { HStack } from 'shared/ui/Stack';

import {
  getAddCommentFormError,
  getAddCommentFormText,
} from '../../modal/selectors/addCommentForm';
import {
  addNewCommentActions,
  addNewCommentReducer,
} from '../../modal/slices/addNewCommentSlice';

import cls from './AddCommentForm.module.scss';

export interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void;
}

const reducers: ReducersList = {
  addNewComment: addNewCommentReducer,
};

const AddCommentForm: FC<AddCommentFormProps> = memo((props) => {
  const { className, onSendComment } = props;
  const { t } = useTranslation('translation');
  const dispatch = useAppDispatch();

  const text = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);

  const handleChangeText = useCallback(
    (value: string) => {
      dispatch(addNewCommentActions.setText(value));
    },
    [dispatch],
  );

  const onSendHandler = useCallback(() => {
    handleChangeText("");
    onSendComment(text || "");
  },[handleChangeText, onSendComment, text])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <HStack max justify='between' className={classNames(cls.AddCommentForm, {}, [className])}>
        <Input
          placeholder={t('Enter comment text')}
          value={text}
          onChange={handleChangeText}
          className={cls.input}
        />
        <Button theme={ButtonTheme.OUTLINE} onClick={onSendHandler}>
          {t('Send')}
        </Button>
      </HStack>
    </DynamicModuleLoader>
  );
});

export default AddCommentForm;
