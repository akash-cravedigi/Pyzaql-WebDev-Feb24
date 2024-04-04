import { useState, useEffect } from "react";

const FuncComponent = () => {
    let [currDateTime, setCurrDateTime] = useState(new Date().toLocaleString());
    let [userName, setUserName] = useState("Akash Soni");

    setInterval(() => {
        setCurrDateTime(new Date().toLocaleString());
    }, 1000)

    const Greet = (name) => {
        return <h1>Hello {name}!</h1>
    }

    const handleNameChange = () => {
        setUserName("Prakruti");
    }

    useEffect(() => {
        // mounting
        console.log("Function component mounting")
    },[])

    useEffect(() => {
        //updating
        console.log("Function component updating")
    },[userName])

    useEffect(() => {
        // unmounting
        console.log("Function component unmounting")
        return () => { }
    }, [])

    return (
        <>
            <h3>Functional Component</h3>
            {currDateTime}
            {Greet(userName)}
            <button onClick={handleNameChange}>Change Name</button>
        </>
        
        
    )
}

export default FuncComponent;