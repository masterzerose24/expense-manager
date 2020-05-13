import React from 'react';
import './App.scss';
import TitlePage from './components/TitlePage';
import Dashboard from './scenes/Dashboard'
import AddExpense from './scenes/AddExpense'
import { Route } from 'react-router-dom';

function App(state: any) {
  return (
    <div className="App">
      <Route path="/" exact component={TitlePage}></Route>
      <Route path="/dashboard" exact component={Dashboard}></Route>
      <Route path="/add-expense" exact component={AddExpense}></Route>
    </div>
  );
}

export default App;
