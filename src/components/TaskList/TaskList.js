import Task from '../Task/Task'
import './TaskList.css';

function TaskList({tasks, status}) {
  return (
    <section className={`${status}-tasks`   }>
              <h2 className="heading">Tasks to do:</h2>
                <ul className="task-list">
                  { tasks.map( task => <Task text = {task.text} key ={task.id} complete={task.completed} />)}
                </ul>
          </section>
  );
}

export default TaskList;
