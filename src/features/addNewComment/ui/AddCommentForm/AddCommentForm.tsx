import { FC, memo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { Input } from 'shared/ui/Input/ui/Input';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import { HStack } from 'shared/ui/Stack';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import {
  addNewCommentActions,
  addNewCommentReducer,
} from '../../modal/slices/addNewCommentSlice';
import {
  getAddCommentFormError,
  getAddCommentFormText,
} from '../../modal/selectors/addCommentForm';

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
