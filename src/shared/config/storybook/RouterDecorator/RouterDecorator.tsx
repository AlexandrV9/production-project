import { Story, StoryContext } from '@storybook/react';
import { RouterUtils } from 'app/providers/router';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';

export const RouterDecorator = (
  story: () => Story,
  { parameters: { router } }: StoryContext,
) => {
  if (!router) {
    return (
      <BrowserRouter>
        <RouterUtils>{story()}</RouterUtils>
      </BrowserRouter>
    );
  }

  const { path, route } = router;

  return (
    <MemoryRouter initialEntries={[encodeURI(route)]}>
      <RouterUtils>
        <Routes>
          <Route path={path} element={story()} />
        </Routes>
      </RouterUtils>
    </MemoryRouter>
  );
};
