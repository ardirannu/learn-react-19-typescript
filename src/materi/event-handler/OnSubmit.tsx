const OnSubmit = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => { //type event
        event.preventDefault(); //mencegah reload
        alert('Form Submited');

        console.log(event.target);

        const form = event.target as HTMLFormElement;
        const nameInput = form.elements.namedItem('name') as HTMLInputElement;
        console.log(nameInput.value); // ini ambil value
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" className="mb-2"/>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
}

export default OnSubmit