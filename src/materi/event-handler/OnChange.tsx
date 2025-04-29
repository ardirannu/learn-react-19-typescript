const OnChange = () => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('Input : ', event.target.value);
        console.log(event);
    }

    return (
        <>
            <div>On Change Event</div>
            <input type="text" onChange={handleChange} />
        </>
    )
}

export default OnChange