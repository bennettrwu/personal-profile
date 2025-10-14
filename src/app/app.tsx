import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Background from '../features/background/background';
import NotFound from './routes/notfound';
import Privacy from './routes/privacy';
import Profile from './routes/profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Profile />,
  },
  {
    path: '/privacy',
    element: <Privacy />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

export default function App() {
  return (
    <Background>
      <RouterProvider router={router} />
    </Background>
  );
}
