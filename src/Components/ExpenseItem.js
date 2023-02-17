import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  const onButtonClick = () => {
    let root = document.getElementById('item');
    root.remove();
  }

  return (
    <div className="expense-item" id='item'>
      <ExpenseDate expenseDate={props.expenseDate} />
      <ExpenseDetails expenseTitle={props.expenseTitle} expenseAmount={props.expenseAmount} expenseLocation={props.expenseLocation} />
      <button id='button' onClick={onButtonClick}>Delete Element</button>
    </div>
  )
}

export default ExpenseItem;