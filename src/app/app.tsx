import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Background from '../features/background/background';
import Profile from './routes/profile';
import Privacy from './routes/privacy';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Profile />,
  },
  {
    path: '/privacy',
    element: <Privacy />,
  },
]);

export default function App() {
  return (
    <Background>
      <RouterProvider router={router} />
    </Background>
  );
}
