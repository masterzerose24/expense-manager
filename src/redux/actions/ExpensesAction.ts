import ExpenseModel from 'models/ExpenseModel';

export const GET_EXPENSES = 'GET_EXPENSES';
export const ADD_EXPENSE = 'ADD_EXPENSE';
export const FIND_EXPENSES = 'FIND_EXPENSES';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const SET_SEARCHING = 'SET_SEARCHING';

export const ACTIONS = {
	[GET_EXPENSES]: GET_EXPENSES,
	[ADD_EXPENSE]: ADD_EXPENSE,
	[FIND_EXPENSES]: FIND_EXPENSES,
	[GET_CATEGORIES]: GET_CATEGORIES,
	[SET_SEARCHING]: SET_SEARCHING,
};

export const getExpenses = () => (dispatch: any): void => {
	dispatch({ type: GET_EXPENSES, payload: {} });
};
export const findExpenses = (searchString: string) => (dispatch: any): void => {
	dispatch({ type: FIND_EXPENSES, payload: { searchString } });
};
export const addExpense = (expense: ExpenseModel) => (dispatch: any): void => {
	dispatch({ type: ADD_EXPENSE, payload: { expense } });
};
export const setSearching = (isSearch: boolean) => (dispatch: any) => {
	dispatch({ type: SET_SEARCHING, payload: {isSearch} });
};
