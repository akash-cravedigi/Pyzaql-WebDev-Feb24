import React from "react";

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        console.log("Constructor executed");

        this.state = {
            name: "Akash Soni",
            currDateTime: new Date().toLocaleString()
        }

        setTimeout(() => {
            console.log("Timeout") 
        },6000)

        setInterval(() => {
            this.setState((state, props) => ({
                currDateTime: new Date().toLocaleString()
            }))
        }, 1000)

        let greeting;
        if(this.props.canGreet) {
            greeting = <em>JSX inside conditional stmt or looping stmt using props</em>
        }
        
        this.Greet = this.Greet.bind(this);
        this.setNewName = this.setNewName.bind(this);

    }

    setNewName = () => {
        this.setState((state, props) => (
            {
                name: "Nishish S"
            }
        ))
    }

    componentDidMount = () => {
        console.log("Component mounted");
    }

    shouldComponentUpdate = () => {
        console.log("Checking if component should update");
        let a=10; let b=20;
        if(a<b) {
            console.log("component will update")
            return true;
        }
        else {
            console.log("Component will not update");
            return false;
        }
    }

    componentDidUpdate = () => {
        console.log("Component did update")
    }

    componentWillUnmount = () => {
        console.log("Component will unmount");
    }

    Greet = (name) => {
        return <h1>Hello {name}!</h1>
    }

    render() {
        console.log("PAge rendered");
        return (
            <div>
                <b>Class Component</b>
                Time: {this.state.currDateTime}
                {this.Greet(this.state.name)}
                {this.greeting}
                <button onClick={this.setNewName}>Change Name</button>
            </div>
        )
    }
}

export default ClassComponent;