import React, { useState } from 'react';
import './ExpenseForm.css'
const ExpenseForm = (props) =>{

    // const [enteredTitle, setenteredTitle] = useState('');
    // const [enteredAmount, setenteredAmount] = useState('')
    // const [enteredDate, setenteredDate] = useState('')
    
    const [userInput, setuserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    });

    const titleChangeHandler = (event) =>{
        // setenteredTitle(event.target.value);
        // setuserInput(
        //     {
        //         ...userInput,
        //         enteredTitle: event.target.value
        //     }
        // )

        setuserInput((pervState) => {
            return {...pervState,
                enteredTitle: event.target.value
            }
        });
    }

    const amountChangeHandler = (event) =>{
        // setenteredAmount(event.target.value);
        setuserInput((pervState) => {
            return {...pervState,
                enteredAmount: event.target.value
            }
        });
    }
    const dateChangeHandler = (event) =>{
        // setenteredDate(event.target.value);
        setuserInput((pervState) => {
            return {...pervState,
                enteredDate: event.target.value
            }
        });
    }

   const submitHandler = (event) => {
       event.preventDefault();
       //console.log("new Object", userInput);
       props.onSaveExpenseData();
       setuserInput(() => {
        return {
            enteredTitle: '',
            enteredAmount: '',
            enteredDate: ''
        }
    });
   }

    return <form onSubmit={submitHandler}>
    <div className="new-expense__controls">
        <div className="new-expense__control">
            <label>Title</label>
            <input type="text" onChange={titleChangeHandler} value={userInput.enteredTitle}/>
        </div>
        <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={userInput.enteredAmount}/>
        </div>

        <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2021-01-01" max="2022-12-31" onChange={dateChangeHandler} value={userInput.enteredDate}/>
        </div>

        <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
        </div>
    </div>
    </form>
}
export default ExpenseForm; 