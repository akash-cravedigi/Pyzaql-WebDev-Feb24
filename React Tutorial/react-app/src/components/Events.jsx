const Events = () => {

    const handleButtonClick = (e) => {
        window.alert("Button clicked")
        console.log(e.target.innerText);
    }

    const handleInputOnChange = (e) => {
        console.log(e.target.value)
    }

    const handleInputKeyDown = (e) => {
        console.log("on key down")
    }

    const handleInputKeyUp = (e) => {
        console.log("On key up")
    }

    const handleMouseOver = (e) => {
        e.target.innerText = "mouse over"
    }

    const handleMouseOut = (e) => {
        e.target.innerText = "mouse out"
    }

    return (
        <>
            <input type="text" placeholder="Enter text" onChange={handleInputOnChange} onKeyDown={handleInputKeyDown} onKeyUp={handleInputKeyUp}/>
            <button onClick={handleButtonClick}>Click!</button>
            <div style={{padding: "50px", backgroundColor:"darkgreen", color:"white"}} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Hover over me!</div>
        </>
    )
}

export default Events;