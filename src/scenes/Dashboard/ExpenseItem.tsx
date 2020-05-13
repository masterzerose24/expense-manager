import React from 'react'
import { DollarCircleOutlined } from '@ant-design/icons';

const DATE_FORMAT = 'MMM DD, YYYY';

function ExpenseItem(props: any) {
    const { item: expense } = props;
    
    return (
        <div className="list-item">
            <div className="icon"> <DollarCircleOutlined /> </div>
            <div className="description">
                <p className="title">{expense.title}</p>
                <p className="category">{expense.date.format(DATE_FORMAT)} - {expense.category.name}</p>
            </div>
            <div className="amount">
                $ {expense.amount}
            </div>
        </div>
    )
}

export default ExpenseItem
