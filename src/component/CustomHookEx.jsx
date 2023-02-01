import useFetch from '../hooks/useFetch'

function CustomHookEx() {
    const {data, loading} = useFetch('https://jsonplaceholder.typicode.com/users', {})

    if(loading){
        return <h3>Loading your Posts...</h3>
    }
  return (
    <div>
      {data.map((user) => (
        <div className='card m-4'>
            <div className='card-body'>
                <div className='card-header bg-primary text-white'>
                     <h3 key={user.id}>{user.name}</h3>
                </div>
            </div>
        </div>
      ))}
    </div>
  )
}

export default CustomHookEx
