import {useRef} from 'react'

function UseRef1() {
    const inputRef = useRef()
    const paraRef = useRef()

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(inputRef.current.value)
        // inputRef.current.value = 'Adeola'
        paraRef.current.innerText = 'Thank you for submiting this form'
    }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>

        <input type="text" ref={inputRef} id='name' className="form-control mb-2" />

        <button type='submit' className="btn btn-primary">Submit</button>

        <p id='msg' ref={paraRef}></p>
      </form>
    </div>
  )
}

export default UseRef1
