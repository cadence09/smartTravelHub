import React from "react";
import {Router,Switch,Route} from "react-router-dom";
import history from './history';
import Home from "./components/Home";
import PostList from './components/PostList';
import PostCard from './components/PostCard';
import PostForm from "./components/PostForm"

const Routes = () => {
    return (
        <Router history={history}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/postList" component={PostList} />
                <Route path="/postCard/:id" component={PostCard} />
                <Route path='/postForm'  component={PostForm}/>
            </Switch>
        </Router>
    )
}

export default Routes;