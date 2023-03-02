import illustration from '../assets/illustration.jpg';
import { Form } from 'react-router-dom';
import { UserPlusIcon } from '@heroicons/react/24/solid';

const Intro = () => {
  return (
    <div className='intro'>
      <div>
        <h1>
          Take Control of <span className='accent'>Your Money</span>
        </h1>
        <p>
          Personal budgeting is the secret to financial freedom.Start your
          journey today.
        </p>
        <Form method='post'>
          <input
            type='text'
            name='userName'
            required
            placeholder='Add your name'
            aria-label='Your Name'
            autoComplete='given-name'
          />
          <button type='submit' className='btn btn--black'>
            <span>Create account</span>
            <UserPlusIcon width={20} />
          </button>
        </Form>
      </div>
      <img src={illustration} alt='Person with money' />
    </div>
  );
};

export default Intro;
