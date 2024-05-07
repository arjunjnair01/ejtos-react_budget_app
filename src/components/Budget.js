
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
const Budget = () => {
    const { budget } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const { expenses } = useContext(AppContext);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);
    const handleBudgetChange = (event) => {
        const value = event.target.value;

        // Check if the entered value is a valid number
        if (!isNaN(value) && value !== '') {
            // Check if the value is within the allowed range
            if (parseInt(value) > 20000) {
                alert('Budget cannot exceed £20,000.');
            }
            if (parseInt(value) < totalExpenses) {
                alert('Budget cannot be lower than total spending.');
            }
            else {
                setNewBudget(value);
            }
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;