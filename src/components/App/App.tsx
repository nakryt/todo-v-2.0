import React from "react"
import classes from "./App.module.css"
import AppHeader from "../AppHeader/AppHeader"
import TodoList from "../TodoList/TodoList"
import SearchPanel from "../SearchPanel/SearchPanel"
import Container from "../Container/Container"
import {Provider} from "react-redux"
import store from "../../store/store"
import AddTodo from "../AddTodo/AddTodo"

const App: React.FC = () => {
    return (
        <div className={classes.App}>
            <Provider store={store}>
                <Container>
                    <AppHeader />
                    <SearchPanel />
                    <TodoList />
                    <AddTodo />
                </Container>
            </Provider>
        </div>
    )
};

export default App
