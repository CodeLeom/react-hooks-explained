import {useState, useEffect, useRef} from 'react'

function Todo() {
    const [loading, setLoading] = useState(true)
    const [todo, setTodo] = useState({})
    const isMounted = useRef(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/2')
            .then((res) => res.json())
            .then((data) => {
                setTimeout(() => {
                    if(isMounted){
                        setTodo(data)
                        setLoading(false)
                    }
                }, 3000)
            })

            //this runs when the component is mounted and to stop the component from mounting
            return () => {
                isMounted.current = false
                console.log('The function fires')
            }
    }, [isMounted])

  return loading ? <h3>Please I dey help you fetch your data...</h3> : <h1>{todo.title}</h1>
}

export default Todo