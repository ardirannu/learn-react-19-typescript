type Item = {
    id: number,
    name: string,
}

const items: Item[] = [
    { id: 1, name: 'Apple' },
    { id: 2, name: 'Manggo' },
    { id: 3, name: 'Banana' }
]

const ListItem = () => {
    return (
        <>
            <div>ListItem</div>
            <ul>
                {
                    items.map(item => {
                        return <li key={item.id}>{item.name}</li>
                    })
                }
            </ul>
        </>
    )
}

export default ListItem