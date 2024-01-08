import { FC, Suspense } from "react";

export const SuspenseDecorator = (Story: FC) => (
  // eslint-disable-next-line i18next/no-literal-string
  <Suspense fallback={<p>Loading...</p>}>
    <Story />
  </Suspense>
);
