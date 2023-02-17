import { useState } from "react";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const date = new Date(2020, 7, 21);

  const handleClick = (e) => {
    e.preventDefault();
    let obj = {
      title: title,
      amount: amount,
      date: date
    };
    props.addItem(obj);
  }

  return (
    <form>
      <label>
        Title:
        <input type='text' value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Amount:
        <input type='text' value={amount} onChange={(e) => setAmount(e.target.value)} />
      </label>
      <label>
        Date:
        <input type='text' />
      </label>
      <input type='submit' name="Submit" onClick={handleClick} />
    </form>
  )
}

export default ExpenseForm;