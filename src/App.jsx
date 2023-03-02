import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard, { dashboardLoader } from './pages/dashboard';
import Error from './pages/error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Dashboard />,
    loader: dashboardLoader,
    errorElement: <Error />,
  },
]);

const App = () => {
  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
