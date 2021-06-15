import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = () =>{

    const saveExpenseDataHandler = (enteredExpenseData) =>{
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        console.log('Expense Data',expenseData);
    }
    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData = {saveExpenseDataHandler}/>
    </div>
    
}

export default NewExpense;