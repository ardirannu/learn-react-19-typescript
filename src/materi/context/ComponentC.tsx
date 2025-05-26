import ComponentD from './ComponentD'


const ComponentC = () => {
  return (
    <div className='flex justify-between gap-4'>
      <h5>Home</h5>
      <h5>About</h5>
      <h5>Profile</h5>
      <ComponentD/>
    </div>
  )
}

export default ComponentC