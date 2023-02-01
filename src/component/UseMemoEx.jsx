import {useState, useEffect, useMemo, useRef} from 'react'

function UseMemoEx() {
    const [num, setNum] = useState(1)
    const [inc, setInc] = useState(0)
    const sqrt = useMemo(() => getSqrt(num), [num])
    const render = useRef(1)

    useEffect(() => {
        render.current = render.current + 1
    })

const onClick = () => {
    setInc((prevState) => {
        console.log(prevState + 1)
        return prevState + 1
    })
}

  return (
    <div>
        <input type="number" value={num} onChange={(e) => setNum(e.target.value)} className="form-control w-20" />

        <h2 className="my-3">The Sqrt of {num} is {sqrt}</h2>

        <button onClick={onClick} className="btn btn-primary">Re Render</button>
<hr />
        <h3>Render: {render.current}</h3>
    </div>
  )
}

function getSqrt(n){
    for(let i = 0; i <= 1000; i++){
        console.log(i)
    }
    console.log('This is a deep function call!')
    return Math.sqrt(n)
}
export default UseMemoEx