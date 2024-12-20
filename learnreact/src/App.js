import logo from './logo.svg';
import './App.css';
import UseStateHook from './components/UseStateHook';
import UseStateHookObject from './components/UseStateHookObject';
import Counter from './components/hookUseEffect/Counter';
import CounterArray from './components/hookUseEffect/CounterArray';
import UpdateWithVariable from './components/hookUseEffect/UpdateWithVariable';
import Cleanup from './components/hookUseEffect/Cleanup';
import MainComponent from './components/useContext/MainComponent';
import React, {createContext} from 'react';
import AvoidReRender from './components/useRef/AvoidReRender';
import ChangeDom from './components/useRef/ChangeDom';
import CounterApp from './components/useReducer/CounterApp';
import MemoLoop from './components/useMemo/MemoLoop';
import Main from './components/useCallBack/Main';
import ShowPost from './components/customHook/ShowPost';

const mainValue = 26;
export const GlobalItem = createContext();

//create context is used to make value globaly availabe for all child components
//first we need to create context from where the data to be passed
//from the child component we can access the data using useContext. we need to import the file in the child component where the data are available.
function App() {
  return (
    <ShowPost />
    // <Main />
    // <MemoLoop />
    // <CounterApp />
    // <ChangeDom />
    // <AvoidReRender />
    // <GlobalItem.Provider value={mainValue}>
    //   <div>
    //   <MainComponent/>
    //   </div>
    // </GlobalItem.Provider>
    // <div className="App">
    //   {/* <UseStateHook></UseStateHook> */}
    //   {/* <UseStateHookObject></UseStateHookObject> */}
    // {/* <Counter></Counter> */}
    // {/* <CounterArray /> */}
    // {/* <UpdateWithVariable /> */}
    // {/* <Cleanup /> */}
    
    // </div>
  );
}

export default App;
