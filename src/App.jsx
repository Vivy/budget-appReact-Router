import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { logoutAction } from './action/logout';
import Main, { mainLoader } from './layouts/main';
import Dashboard, { dashboardAction, dashboardLoader } from './pages/dashboard';
import Error from './pages/error';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ExpensesPage, {
  expensesAction,
  expensesLoader,
} from './pages/expensespage';
import BudgetPage, { budgetAction, budgetLoader } from './pages/budgetpage';
import { deleteBudget } from './action/deletebudget';

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
        action: dashboardAction,
        errorElement: <Error />,
      },
      {
        path: 'budget/:id',
        element: <BudgetPage />,
        loader: budgetLoader,
        action: budgetAction,
        errorElement: <Error />,
      },
      {
        path: 'expenses',
        element: <ExpensesPage />,
        loader: expensesLoader,
        action: expensesAction,
      },
      {
        path: 'logout',
        action: logoutAction,
      },
      {
        path: 'delete',
        action: deleteBudget,
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
