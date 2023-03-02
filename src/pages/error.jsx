import { ArrowUturnLeftIcon, HomeIcon } from '@heroicons/react/24/solid';
import { Link, useNavigate, useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  const nav = useNavigate();

  return (
    <div className='error'>
      <h1>We've got a problem.</h1>
      <p>{error.message || error.status.Text}</p>
      <div className='flex-md'>
        <button className='btn btn--dark' onClick={() => nav(-1)}>
          <ArrowUturnLeftIcon width={20} />
          <span>Go back</span>
        </button>
        <Link to='/' className='btn btn--dark'>
          <HomeIcon width={20} />
          <span>Go home</span>
        </Link>
      </div>
    </div>
  );
};

export default Error;
