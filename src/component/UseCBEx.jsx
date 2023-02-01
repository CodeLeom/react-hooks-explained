import React, {useState, useCallback} from 'react'

function UseCBEx() {
    const [tasks, setTasks] = useState(['I am the first Task'])

    //this is a function to add a new task
    const addTask = useCallback(() => {
        setTasks((prevState) => 
        [...prevState, 'A another Task Added'])}, [setTasks])

  return (
    <div>
      <Button addTask={addTask} />
        <hr />
        {tasks.map((task, index) => (
            <p key={index}>{task}</p>
        ))}
    </div>
  )
}

const Button = React.memo(({addTask}) => {
    console.log('Button Rendered')
    return <div>
        <button className="btn btn-primary" onClick={addTask}>Add Task</button>
    </div>
})

export default UseCBEx
