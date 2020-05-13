import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom';
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import CategoryModel from 'models/CategoryModel';
import ExpenseModel from 'models/ExpenseModel';
import {
  addExpense
} from 'redux/actions/ExpensesAction';
import { Input, DatePicker, Select } from 'antd';
import TextArea from 'antd/lib/input/TextArea';

const DATE_FORMAT = 'MMM DD, YYYY';

const Header = (props: any) => {
  const { history, onFormSubmit } = props;

  const onDone = () => {
    onFormSubmit();
    history.push('/dashboard')
  }

  return (
    <div className="header">
      <div className="link">
        <Link to="/dashboard">Cancel </Link>
      </div>

      <div className="title">
        Expense
      </div>

      <div className="link">
        <a onClick={onDone}>Done</a>
      </div>
    </div>
  )
}

function AddExpense(props: any) {
  const { categories, addExpense } = props;
  const history = useHistory();
  const [formData, updateData] = useState({
    category: { ...categories[0] }
  });

  const dataFilter = (event: any, name: string) => {
    switch (name) {
      case 'category':
        return categories.filter((category: any) => category.id === event);
      case 'date':
        return event;
      default:
        return event.target.value;
    }
  }

  const onUpdateData = (event: any, name: string) => {
    const val = dataFilter(event, name);
    const newFormData = {
      ...formData,
      [name]: val,
    };
    updateData({ ...newFormData });
  }

  const formSubmit = (data: any): data is ExpenseModel => {
    return addExpense(data);
  }

  return (
    <div className="add-expense">
      <Header history={history} onFormSubmit={() => formSubmit(formData)}></Header>
      <div className="bodyForm">
        <div className="amount">
          <p className="name">Amount</p>
          <div className="input">
            <Input
              type="number"
              onChange={e => onUpdateData(e, 'amount')}
            ></Input>
          </div>
        </div>
        <p className="settings">Settings</p>
        <div className="category">
          <p className="name">Category</p>
          <div className="input">
            <Select defaultValue={categories[0].name} onChange={e => onUpdateData(e, 'category')}>
              {categories.map((category: CategoryModel) => (
                <Select.Option key={category.id} value={category.id}> {category.name} </Select.Option>
              ))}
            </Select>
          </div>
        </div>
        <div className="date">
          <p className="name">Date</p>
          <div className="input">
            <DatePicker onChange={e => onUpdateData(e, 'date')}></DatePicker>
          </div>
        </div>

        <div className="notes">
          <p className="name">
            Notes
              </p>
          <div className="input">
            <TextArea onChange={e => onUpdateData(e, 'title')}></TextArea>
          </div>
        </div>
      </div>
    </div >
  )
}


const mapPropsToState = (state: any) => {
  const { categories } = state.expenses;
  return {
    categories
  }
}

const mapDispatchToProps = (dispatch: any) => bindActionCreators({ addExpense }, dispatch);


export default connect(mapPropsToState, mapDispatchToProps)(AddExpense)