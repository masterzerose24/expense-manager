import Category from './CategoryModel';

export default interface ExpenseModel {
  id?: number;
  title: string;
  category?: Category;
  date?: any;
  amount: number;
};