import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import React from "react";
import Details from './Components/Details';
import Page from './Components/Page';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
        Arr:[],
    }
} 
  updateUsers=(updatedUsers)=>{
    this.setState({Arr:updatedUsers})
  }
  render(){
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
    <Route path='/' element = {<Details users = {this.state.Arr} updateUsers = {this.updateUsers}/>}/>
    <Route path='/Page' element = {<Page users = {this.state.Arr}/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}
}

export default App;
