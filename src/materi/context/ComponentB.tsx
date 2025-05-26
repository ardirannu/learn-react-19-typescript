import ComponentC from './ComponentC'

const ComponentB = () => {
  return (
    <div className='flex justify-between p-4 items-center'>
      <h1 className='text-red-500 text-4xl'>Test Context API</h1>
      <ComponentC/>
    </div>
  )
}

export default ComponentB