import ComponentB from './ComponentB'

const ComponentA = () => {
    return (
        <div className='bg-white h-screen text-black dark:text-white dark:bg-black'>
            <ComponentB />
        </div>
    )
}

export default ComponentA
