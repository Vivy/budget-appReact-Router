import { CurrencyDollarIcon } from '@heroicons/react/24/solid';
import { Form } from 'react-router-dom';

const AddBudgetForm = () => {
  return (
    <div className='form-wrapper'>
      <h2 className='h3'>Create budget</h2>
      <Form method='post' className='grid-sm'>
        <div className='grid-xs'>
          <label htmlFor='newBudget'>Budget Name</label>
          <input
            type='text'
            name='newBudget'
            id='newBudget'
            placeholder='ex: Groceries'
            required
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
        <button type='submit' className='btn btn--dark'>
          <span> Create budget</span>
          <CurrencyDollarIcon width={20} />
        </button>
      </Form>
    </div>
  );
};

export default AddBudgetForm;
