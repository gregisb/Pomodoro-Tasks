import React, { useState, useEffect } from 'react'
import { v4 as uuidv4} from 'uuid'
import { BrowserRouter, Route } from 'react-router-dom';
import axios from 'axios'

import './App.css'

import Header from './components/Header'
import AddTask from './components/AddTask';
import Tasks from './components/Tasks'
import TaskDetails from './components/TaskDetails';
import Timer from './components/Timer/Timer';
import Footer from './components/Footer/Footer'


const App = () => {
  const LOCAL_STORAGE_KEY = 'task list'

  const [tasks, setTasks] = useState([
    // {
    //   id: 1,
    //   title: 'Estudar JS',
    //   completed: false,
    //   details: 'Estudar métodos de array e assincronismo'
    // },
    // {
    //   id: 2,
    //   title: 'Ler livros',
    //   completed: true,
    //   details: ''
    // },
    
  ]);

  // useEffect(() => {
  //   const fetchTasks = async () => {
  //     const { data } = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=10')
  //     setTasks(data)
  //   };
  //   fetchTasks();
  // }, []);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if(task.id === taskId) return {...task, completed: !task.completed}

      return task;
    });
    setTasks(newTasks)
  }

  const handleTaskAddition = (taskTitle, taskDetails) => {
    const newTasks = [
      ...tasks, {
        title: taskTitle,
        id: uuidv4(),
        completed: false,
        details: taskDetails
      },
    ];
    setTasks(newTasks)
  };

  const handleTaskDelete = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId);
    setTasks(newTasks)
  }

  useEffect(() => {
    const retrieveTasks = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrieveTasks) {
      setTasks(retrieveTasks);
       }
    }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks]);

  return (
    <BrowserRouter>
        <div className='container'>
          <Timer />
          <Header />
          <Route path="/" exact render={() => (
            <>
            <AddTask handleTaskAddition={handleTaskAddition} />
            <Tasks tasks={tasks} 
                   handleTaskClick={handleTaskClick} 
                   handleTaskDelete={handleTaskDelete} />
            </>
          )}
          />
          <Route path='/:taskTitle' exact component={TaskDetails}/>
          <Footer />
        </div>
        
    </BrowserRouter>
  )
}

export default App