import {useState, useEffect, useRef} from 'react'

function UseRef2() {
    const [name, setName] = useState('')
    const render = useRef(1)
    const prevName = useRef('')

    useEffect(() => {
        render.current = render.current + 1
        prevName.current = name
    }, [name])

  return (
    <div>
      <h1>Render: {render.current}</h1>

      <h3>Prev Name State: {prevName.current}</h3>
      
      <input type="text" onChange={(e) => setName(e.target.value)} name={name} className="form-control mb-3" />
    </div>
  )
}

export default UseRef2
