import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense'

function App() {
  const expenses = [
    {
      id:'e1',
      title: 'Car Insurance', 
      amount: 299.99, 
      date: new Date(2021, 5, 28)
    },
    {
      id:'e2',
      title: 'Toilet Paper', 
      amount: 29.00, 
      date: new Date(2021, 4, 29)
    },
    {
      id:'e3',
      title: 'Form Land', 
      amount: 13000.70, 
      date: new Date(2021, 7, 1)
    }
];
  return (
    <div className="App">
      <NewExpense/>
      <Expenses items = {expenses}></Expenses>
    </div>
  );
}

export default App;
