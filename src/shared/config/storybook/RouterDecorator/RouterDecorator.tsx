import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import { StoryContext } from '@storybook/react';

import { RouterUtils } from '@/app/providers/router';

export const RouterDecorator = (
  Story: any,
  { parameters: { router } }: StoryContext,
) => {
  if (!router) {
    return (
      <BrowserRouter>
        <RouterUtils>
          <Story />
        </RouterUtils>
      </BrowserRouter>
    );
  }

  const { path, route } = router;

  return (
    <MemoryRouter initialEntries={[encodeURI(route)]}>
      <RouterUtils>
        <Routes>
          <Route path={path} element={<Story />} />
        </Routes>
      </RouterUtils>
    </MemoryRouter>
  );
};
