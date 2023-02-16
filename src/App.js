import './App.css';
import ExpenseItem from './Components/ExpenseItem';

function App() {

  const expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: 'Bangalore'
    },
    { 
      id: 'e2',
      title: 'New TV', 
      amount: 799.49, 
      date: new Date(2021, 2, 12),
      location: 'Mumbai'
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: 'Delhi'
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
      location: 'Chennai'
    },
  ];

  return (
    <div className="App">
      {expenses.map((item) => {
        return (
          <ExpenseItem expenseDate={item.date} expenseTitle={item.title} expenseLocation={item.location} expenseAmount={item.amount} />
        )
      })}
    </div>
  );
}

export default App;
