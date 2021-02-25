import {useState} from 'react'
import Header from './components/Header/Header'
import TaskList from './components/TaskList/TaskList'
import Task from './components/Task/Task'
import './App.css';

function App() {
  const [ tasks, setTasks ] = useState([
    {text:'task 1',completed: false, date:'2021-01-10', id: '001'},
    {text:'task 2',completed: true, date:'2020-11-30', id: '002'},
    {text:'task 3',completed: true, date:'2021-01-05', id: '003'},
    {text:'task 4',completed: false, date:'2020-12-17', id: '004'},
    {text:'task 5',completed: false, date:'2021-02-10', id: '005'},
    {text:'task 6',completed: false, date:'2021-02-10', id: '006'}
  ])

  const deleteTask = id => {
    const updatedTasks = tasks.filter (task => task.id !== id)
    setTasks(updatedTasks)
  }
  const addTask = text => {
    const newTask = {
      text: text,
      completed: false,
      date: '2021-09-09',
      id: "010"
    }
    const updatedTasks = [...tasks,newTask]
    setTasks(updatedTasks)
  }
  const incompleteTasks = tasks.filter(task =>!task.completed)
  const completeTasks = tasks.filter(task => task.completed)
   
  return (
    <div className="App">
      {/* console.log(incompleteTasks.length) */}
        
      <Header taskCount={ incompleteTasks.length } addTask= { addTask }/>
      <main className="all-tasks">

        <TaskList deleteTask= {deleteTask} tasks={incompleteTasks} status='incomplete'/>
        <TaskList deleteTask= {deleteTask} tasks={completeTasks} status='complete'/>
        
          {/* <section className="incomplete-tasks">
              <h2 className="heading">Tasks to do:</h2>
                <ul className="task-list">
                  { incompleteTasks.map(task => <Task text = {task.text} key ={task.id} complete={task.completed} />)}
                </ul>
          </section> */}
          {/* <section className="complete-tasks">
            <h2 className="heading">Complete tasks:</h2>
            <ul className="task-list">
                { completeTasks.map(task => <Task text = {task.text} key ={task.id} complete={task.completed} />)} */}


{/* 
                <Task complete={true}/>
                <Task complete={true}/> */}
{/* 
                <li className="task task--complete">
                    <p className="task__text">This is a task that needs to be done</p>
                    <button className="button">Delete</button>
                </li>
                <li className="task task--complete">
                    <p className="task__text">This is a task that needs to be done</p>
                    <button className="button">Delete</button>
                </li> */}
            {/* </ul> */}
        {/* </section> */}
    </main>
  </div>
  );
    
}

export default App;
