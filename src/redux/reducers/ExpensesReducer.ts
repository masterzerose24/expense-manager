import moment from 'moment';
import ExpenseModel from 'models/ExpenseModel';
import CategoryModel from 'models/CategoryModel';
import {
	ACTIONS,
	ADD_EXPENSE,
	FIND_EXPENSES,
	SET_SEARCHING,
} from 'redux/actions/ExpensesAction';

const CATEGORIES: CategoryModel[] = [
	{
		id: 1,
		name: 'Food and Restaurants',
	},
	{
		id: 2,
		name: 'Online Banking',
	},

	{
		id: 3,
		name: 'Groceries',
	},

	{
		id: 4,
		name: 'Bills',
	},
];

const initItems: ExpenseModel[] = [
	{
		id: 1,
		title: 'Milktea',
		amount: 2,
		category: CATEGORIES[0],
		date: moment(Date.now()).subtract(3, 'days'),
	},
	{
		id: 2,
		title: 'Funds transfer',
		amount: 2,
		category: CATEGORIES[1],
		date: moment(Date.now()).subtract(7, 'days'),
	},
	{
		id: 3,
		title: 'Water Bills Payment',
		amount: 2,
		category: CATEGORIES[3],
		date: moment(Date.now()).subtract(2, 'days'),
	},
];

const initState = {
	list: initItems,
	categories: CATEGORIES,
	searchResult: [],
	isSearching: false,
};

export default (state: any = initState, action: any) => {
	const { type, payload } = action;

	switch (type) {
		case ACTIONS[ADD_EXPENSE]: {
			const finalPayload = {
				id: state.list.length + 2,
				...payload.expense,
			};
			return {
				...state,
				list: [...state.list, finalPayload],
			};
		}
		case ACTIONS[FIND_EXPENSES]: {
			const { searchString } = payload;
			return {
				...state,
				searchResult: searchString
					? state.list.filter((expense: ExpenseModel) =>
							expense.title.toLowerCase().includes(searchString.toLowerCase())
					  )
					: [],
			};
		}
		case ACTIONS[SET_SEARCHING]: {
			const { isSearch } = payload;
			return {
				...state,
				isSearching: isSearch,
			};
		}
		default: {
			return { ...state };
		}
	}
};
