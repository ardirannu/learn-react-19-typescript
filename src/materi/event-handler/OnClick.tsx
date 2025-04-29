const OnClick = () => {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => { //type event
        alert('Button Clicked');
        console.log(event.target);
    };

    return (
        <button onClick={handleClick}>Click Me</button>
    )
}

export default OnClick