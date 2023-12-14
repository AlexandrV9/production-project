import { ComponentPropsWithoutRef, memo } from 'react';

// const typedMemo: <T>(c: T) => T = memo;

export const typedMemo: <Component extends React.FC<any>>(
  component: Component,
  compare?: (
    prevProps: ComponentPropsWithoutRef<Component>,
    newProps: React.ComponentPropsWithoutRef<Component>,
  ) => boolean,
) => Component = memo;
