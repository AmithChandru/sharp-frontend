import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  return (
    <div className="expense-item">
      <ExpenseDate expenseDate={props.expenseDate} />
      <ExpenseDetails expenseTitle={props.expenseTitle} expenseAmount={props.expenseAmount} expenseLocation={props.expenseLocation} />
    </div>
  )
}

export default ExpenseItem;