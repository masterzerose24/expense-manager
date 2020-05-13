import React from 'react'
import { useHistory } from 'react-router-dom';

function TitlePage(props: any) {
  const history = useHistory();
  if (props.location.pathname === '/') {
    const timer = setTimeout(() => {
      history.push('/dashboard');
      clearTimeout(timer);
    }, 1000)
  }
  
  return (
    <div className="centered-text">
      <p>
        Expense Manager
      </p>
    </div>
  )
}

export default TitlePage
