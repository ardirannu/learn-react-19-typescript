
type Props = {
    isLoggedIn: boolean
}

const IfElse = ({isLoggedIn}: Props) => {
    let message: React.ReactNode;

    if(isLoggedIn){
        message = <h1>Welcome Back</h1>;
    }else{
        message = <h1>Please Login</h1>
    }

    return (
        <>
            {message}
            <h2>Dashboard</h2>
        </>
    )
}

export default IfElse