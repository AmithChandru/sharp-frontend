import { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import ExpenseDetails from './ExpenseDetails';
import './ExpenseItem.css';

const ExpenseItem = (props) => {

  const [amount, setAmount] = useState(props.expenseAmount);

  const onButtonClick = () => {
    setAmount(100);
  }

  return (
    <div className="expense-item" id='item'>
      <ExpenseDate expenseDate={props.expenseDate} />
      <ExpenseDetails expenseTitle={props.expenseTitle} expenseAmount={amount} expenseLocation={props.expenseLocation} />
      <button id='button' onClick={onButtonClick}>Edit Element</button>
    </div>
  )
}

export default ExpenseItem;