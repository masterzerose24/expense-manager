import React, { useEffect } from 'react'
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { SearchOutlined, PlusOutlined, CloseOutlined, } from '@ant-design/icons';
import { Button, Input } from 'antd';
import ExpenseModel from 'models/ExpenseModel';
import {
	getExpenses, findExpenses, setSearching
} from 'redux/actions/ExpensesAction';
import ExpenseItem from './ExpenseItem';


const HeaderTitle = (props: any) => {
	const { setSearching } = props;

	return (
		<div className="title">
			<p>Expense Manager</p>
			<div className="search-btn" onClick={e => setSearching(true)}>
				<SearchOutlined></SearchOutlined>
			</div>
		</div>
	)
};

const SearchBar = (props: any) => {
	const { findExpenses, setSearching } = props;

	return (
		<div className="search-bar">
			<div className="input">
				<Input
					onChange={e => findExpenses(e.target.value)}
				></Input>
			</div>
			<div className="close-btn" onClick={e => setSearching(false)}>
				<CloseOutlined></CloseOutlined>
			</div>
		</div>
	)
}

const ListRenderer = (props: any) => {
	const { list, isSearching } = props;
	const emptyMessage = isSearching ?
		`No results found.` : `No expenses.`

	if (!list.length)
		return (
			<div className="message">
				{emptyMessage}
			</div>
		)

	return list.map((expense: ExpenseModel) => (
		<ExpenseItem key={expense.id} item={expense}></ExpenseItem>
	))
}

function Dashboard(props: any) {
	const { getExpenses, expenses, findExpenses, isSearching, searchResult, setSearching } = props;

	useEffect(() => {
		if (!expenses.length) {
			getExpenses();
		}
	}, [expenses, getExpenses]);
	const renderList = (isSearching ? searchResult : expenses ) || [];

	return (
		<div className="dashboard">
			<div className="header-container">
				{!isSearching && <HeaderTitle setSearching={setSearching}></HeaderTitle>}
				{isSearching && <SearchBar findExpenses={findExpenses} setSearching={setSearching}></SearchBar>}
				<div className="add-btn">
					<Link to="add-expense">
						<Button type="link" className="add"> <PlusOutlined></PlusOutlined> Add New</Button>
					</Link>
				</div>
			</div>

			<div className="list-container">
				<ListRenderer list={renderList} isSearching={isSearching}></ListRenderer>
			</div>
		</div>
	)
}

const mapPropsToState = (state: any) => {
	const { list: expenses, isSearching, searchResult } = state.expenses;

	return {
		expenses, isSearching, searchResult
	}
}

const mapDispatchToProps = (dispatch: any) => bindActionCreators({ getExpenses, findExpenses, setSearching }, dispatch);

export default connect(mapPropsToState, mapDispatchToProps)(Dashboard)
