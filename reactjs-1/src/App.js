import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  tasks   from './tasks';
import TaskForm from './components/Tasksform';

class App extends Component {
    constructor(){
        super();
        this.state = {
            tasks
        }
    this.handleAddTask = this.handleAddTask.bind(this);
    }
    removeTask(index) {
        this.setState({
            tasks: this.state.tasks.filter((e, i) => {
                return i !== index
            })
            });
        }
        
        handleAddTask(task) {
            this.setState({
            tasks: [...this.state.tasks, task]
            })
        }



    render(){
        const tasks = this.state.tasks.map((task, i) => {
            return (
                <div className="col-md-4" key={i}>
                    <div className="card mt-4">
                    <div className="card-title text-center">
                        <h3>{task.title}</h3>
                        <span className="badge badge-pill badge-danger ml-2">
                        {task.priority}
                        </span>
                    </div>
                    <div className="card-body">
                        {task.description}
                    </div>
                    <div className="card-footer">
                        <p><mark>{task.responsible}</mark></p>
                        <button
                        className="btn btn-danger"
                        onClick={this.removeTask.bind(this, i)}>
                        Delete
                        </button>
                    </div>
                    </div>
                </div>
                )
        });

        return (
            <div className="App">

            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand" href="/">
                    Tasks
                    <span className="badge badge-pill badge-light ml-2">
                            {this.state.tasks.length}
                    </span>
                    </a>
            </nav>
            
            <div className="container">
                <div className="row mt-4">
            
                <div className="col-md-4 text-center">
                    <TaskForm onAddTask={this.handleAddTask}></TaskForm>
                </div>
            
                <div className="col-md-8">
                    <div className="row">
                        {tasks}
                        </div>
                </div>
                        </div>
                    </div>
                </div>
                );
            }
    }

export default App;
