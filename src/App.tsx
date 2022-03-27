import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {incremented,amountAdded} from "./features/counter/counterSlice.ModernRedux";
import {useAppDispatch,useAppSelector} from "./app/hooks"
import {useFetchbreedsQuery} from "./features/counter/DogsApiSlice";
import {onDepositMoney,onWithdrawMoney,onBankrupt,onShow_Hide} from "./features/counter/BankSlice";
import {getStudentDetails} from "./features/counter/StudentSlice";

function App() {
  const modernValue = useAppSelector((state)=>state.modernCounter.value);
  const dispatch = useAppDispatch();
  const handleClick=()=>{
    dispatch(amountAdded(3));
  }
  const [numDogs,setNumDogs]=useState(10);
  const {data=[],isFetching} = useFetchbreedsQuery(numDogs);

  const amount = useAppSelector((state)=>state.bank.value);
  const show_hide = useAppSelector((state)=>state.bank.showComponent);
  const studentDetails=useAppSelector((state)=>state.student.studentDetails);

  useEffect(()=>{dispatch(getStudentDetails())},[])
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
      <button onClick={handleClick}>count list is {modernValue}</button>

      <div>
        <div>Show/Hide Bank Component</div>
        <button onClick={() => dispatch(onShow_Hide(!show_hide))}>
          Show/Hide
        </button>
        {show_hide && (
          <div>
            <p>Bank Component</p>
            <div>{amount}</div>
            <button onClick={() => dispatch(onDepositMoney(100))}>
              Deposit
            </button>
            <button onClick={() => dispatch(onWithdrawMoney(100))}>
              WithDraw
            </button>
            <button onClick={() => dispatch(onBankrupt())}>Bankrupt</button>
          </div>
        )}
      </div>

      <div>
        <p>Dogs API</p>
        <div>
          <p>Dogs to fetch</p>
          <select
            value={numDogs}
            onChange={(e) => setNumDogs(Number(e.target.value))}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Picture</th>
            </tr>
          </thead>
          <tbody>
            {data.map((breed) => {
              return (
                <tr key={parseInt(breed.id)}>
                  <td>{breed.name}</td>
                  <td>
                    <img src={breed.image.url} alt={breed.name} height={240} />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div>Student</div>
      <div>
        {console.log(studentDetails)}
        {
          <ol>
            {studentDetails.map((item: any, key: any) => {
              return (
                  <li id={item.id} key={key}>{item.name}</li>
              );
            })}
          </ol>
        }
      </div>
    </div>
  );
}

export default App;
