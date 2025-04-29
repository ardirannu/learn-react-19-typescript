type Props = {
    name: string,
    age: number,
    isMarried?: 'done' | 'not yet' //opsional
};

const PropsComponent = ({ name, age, isMarried = 'done' }: Props) => { //with default value
    return (
        <>
            <div>Nama : {name}</div>
            <div>Umur : {age}</div>
            <div>Sudah menikah? : {isMarried}</div>
        </>
    )
}

export default PropsComponent