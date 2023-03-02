import { CurrencyDollarIcon } from '@heroicons/react/24/solid';
import { useEffect, useRef } from 'react';
import { Form, useFetcher } from 'react-router-dom';

const AddBudgetForm = () => {
  const fetcher = useFetcher();
  const isSubmitting = fetcher.state === 'submitting';

  useEffect(() => {
    if (!isSubmitting) {
      formRef.current.reset();
      focusRef.current.focus();
    }
  }, [isSubmitting]);

  const formRef = useRef();
  const focusRef = useRef();

  return (
    <div className='form-wrapper'>
      <h2 className='h3'>Create budget</h2>
      <fetcher.Form method='post' className='grid-sm' ref={formRef}>
        <div className='grid-xs'>
          <label htmlFor='newBudget'>Budget Name</label>
          <input
            type='text'
            name='newBudget'
            id='newBudget'
            placeholder='ex: Groceries'
            required
            ref={focusRef}
          />
        </div>
        <div className='grid-xs'>
          <label htmlFor='newBudgetAmount'>Amount</label>
          <input
            type='text'
            name='newBudgetAmount'
            id='newBudgetAmount'
            step='0.01'
            placeholder='ex: 200$'
            required
            inputMode='decimal'
          />
        </div>
        <input type='hidden' name='_action' value='createBudget' />
        <button type='submit' className='btn btn--dark' disabled={isSubmitting}>
          {isSubmitting ? (
            <span>Submitting.....</span>
          ) : (
            <>
              <span> Create budget</span>
              <CurrencyDollarIcon width={20} />
            </>
          )}
        </button>
      </fetcher.Form>
    </div>
  );
};

export default AddBudgetForm;
