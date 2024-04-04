const ConditionalRendering = (props) => {
    let output = null;
    if(props.isLoggedIn) {
        output = <div>Welcome, {props.userName}</div>
    }
    else {
        output = <div><a href="/login">Login</a></div>
    }

    return (
        <>
            {output}
        </>
    )
}

export default ConditionalRendering;