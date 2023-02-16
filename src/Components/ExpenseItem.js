import './ExpenseItem.css';

function ExpenseItem(props) {
  /* const expenseDate = new Date(2023, 2, 16);
  const expenseTitle = 'Food';
  const expenseAmount = 200;
  const expenseLocation = 'Bangalore'; */

  return (
    <div className="expense-item">
      <div>{props.expenseDate.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{props.expenseTitle}</h2>
        <h2>{props.expenseLocation}</h2>
        <div className='expense-item__price'>{props.expenseAmount}</div>
      </div>
    </div>
  )
}

export default ExpenseItem;