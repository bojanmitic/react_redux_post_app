import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import  Posts  from './Components/Posts';
import { Header } from './Components/Header';
import AddPost from './Components/AddPost';
import Post from './Components/Post';
import EditPost from './Components/EditPost';


class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
        <Header />
        <Switch>
            <Route path={`${process.env.PUBLIC_URL}/`} component={Posts} exact={true}/>
            <Route path={`${process.env.PUBLIC_URL}/create`}  component={AddPost}/> 
            <Route exact path={`${process.env.PUBLIC_URL}/edit/:id`}  component={EditPost} />
            <Route exact path={`${process.env.PUBLIC_URL}/:id`}  component={Post}/>  
        </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
