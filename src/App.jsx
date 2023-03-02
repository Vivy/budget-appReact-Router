import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { logoutAction } from './action/logout';
import Main, { mainLoader } from './layouts/main';
import Dashboard, { dashboardLoader } from './pages/dashboard';
import Error from './pages/error';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    loader: mainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: dashboardLoader,
        errorElement: <Error />,
      },
      {
        path: 'logout',
        action: logoutAction,
      },
    ],
  },
]);

const App = () => {
  return (
    <div className='App'>
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
};

export default App;
