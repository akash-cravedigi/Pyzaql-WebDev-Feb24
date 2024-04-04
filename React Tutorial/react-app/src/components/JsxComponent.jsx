const JsxComponent = (props) => {
    
    let message = <p>Hello World from JSX</p>

    let greeting;
    if(props.canGreet) {
        greeting = <em>JSX inside conditional stmt or looping stmt using props</em>
    }
    let expression = "Data from expression";


    const Greet = (name) => {
        return <h1>Hello {name}!</h1>
    }

    return (
        <>
            <h3>JSX Components</h3>
            {message}
            {greeting}
            {Greet(props.name)}
            <p>Alert: {expression}</p>
        </>
    )
}

export default JsxComponent;